import { createClient } from '@supabase/supabase-js'

// 環境変数が設定されていない場合はダミーのクライアントを作成
// （LPページのみの表示用）
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://dummy.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy-key'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      persistSession: false,
    },
  }
)

export interface User {
  id: number
  user_id: string
  display_name: string
  picture_url?: string
  subscription_status: 'free' | 'plus' | 'cancelled'
  created_at: string
  updated_at: string
}

export interface PaymentHistory {
  id: number
  user_id: string
  stripe_customer_id: string
  stripe_session_id: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  created_at: string
}

// ユーザー情報を取得または作成
export const upsertUser = async (
  userId: string,
  displayName: string,
  pictureUrl?: string
): Promise<User> => {
  const { data, error } = await supabase
    .from('users')
    .upsert(
      {
        user_id: userId,
        display_name: displayName,
        picture_url: pictureUrl,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'user_id',
      }
    )
    .select()
    .single()

  if (error) {
    console.error('ユーザー作成/更新エラー:', error)
    throw error
  }

  return data
}

// ユーザーのサブスクリプション状態を確認
export const checkUserSubscription = async (userId: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      // ユーザーが存在しない
      return null
    }
    console.error('ユーザー取得エラー:', error)
    throw error
  }

  return data
}

// 決済履歴を記録
export const createPaymentHistory = async (
  userId: string,
  stripeCustomerId: string,
  stripeSessionId: string,
  amount: number,
  status: 'pending' | 'completed' | 'failed' | 'refunded' = 'pending'
): Promise<PaymentHistory> => {
  const { data, error } = await supabase
    .from('payment_history')
    .insert({
      user_id: userId,
      stripe_customer_id: stripeCustomerId,
      stripe_session_id: stripeSessionId,
      amount,
      currency: 'jpy',
      status,
    })
    .select()
    .single()

  if (error) {
    console.error('決済履歴作成エラー:', error)
    throw error
  }

  return data
}

// ユーザーのプランを確認
export async function getUserPlan(userId: string): Promise<'free' | 'plus' | null> {
  try {
    // まずusersテーブルからsubscription_statusを確認
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('subscription_status')
      .eq('user_id', userId)
      .single()

    if (userError) {
      console.error('Error fetching user data:', userError)
      // エラーの場合はsubscriptionsテーブルも確認
    } else if (userData?.subscription_status === 'active' || userData?.subscription_status === 'plus') {
      return 'plus'
    }

    // subscriptionsテーブルも確認
    const { data: subData, error: subError } = await supabase
      .from('subscriptions')
      .select('plan, status')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single()

    if (subError) {
      console.error('Error fetching subscription data:', subError)
      return 'free' // デフォルトはfreeプラン
    }

    if (subData && subData.plan === 'plus' && subData.status === 'active') {
      return 'plus'
    }

    return 'free'
  } catch (error) {
    console.error('Error checking user plan:', error)
    return 'free' // エラーの場合はfreeプランとして扱う
  }
}
