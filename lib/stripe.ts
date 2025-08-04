import Stripe from 'stripe'

// 環境変数が設定されていない場合はダミーのキーを使用
// （LPページのみの表示用）
const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key'

export const stripe = new Stripe(stripeKey, {
  apiVersion: '2023-10-16',
})

export interface CreateCheckoutSessionParams {
  userId: string
  customerEmail?: string
  customerName?: string
}

export const createCheckoutSession = async ({
  userId,
  customerEmail,
  customerName,
}: CreateCheckoutSessionParams) => {
  const priceId = process.env.STRIPE_PRICE_ID
  const productId = process.env.STRIPE_PRODUCT_ID

  if (!priceId || !productId) {
    throw new Error('Stripe価格IDまたは商品IDが設定されていません')
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription', // サブスクリプションモード
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}?cancelled=true`,
      customer_email: customerEmail,
      client_reference_id: userId, // LINEユーザーIDを保存
      metadata: {
        userId: userId,
        customerName: customerName || '',
      },
      subscription_data: {
        metadata: {
          userId: userId,
        },
      },
      locale: 'ja', // 日本語表示
    })

    return session
  } catch (error) {
    console.error('Checkoutセッション作成エラー:', error)
    throw error
  }
}

export const retrieveCheckoutSession = async (sessionId: string) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return session
  } catch (error) {
    console.error('Checkoutセッション取得エラー:', error)
    throw error
  }
}

export const retrieveSubscription = async (subscriptionId: string) => {
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    return subscription
  } catch (error) {
    console.error('サブスクリプション取得エラー:', error)
    throw error
  }
}
