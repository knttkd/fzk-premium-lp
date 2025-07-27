import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Supabase環境変数が設定されていません')
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
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
