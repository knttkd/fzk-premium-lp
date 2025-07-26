import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'
import { upsertUser, createPaymentHistory } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, displayName, pictureUrl } = body

    if (!userId || !displayName) {
      return NextResponse.json(
        { error: '必要な情報が不足しています' },
        { status: 400 }
      )
    }

    // ユーザー情報を作成または更新
    const user = await upsertUser(userId, displayName, pictureUrl)

    // 既にプラスプランの場合はエラー
    if (user.subscription_status === 'plus') {
      return NextResponse.json(
        { error: '既にプラスプランに登録済みです' },
        { status: 400 }
      )
    }

    // Stripeチェックアウトセッションを作成
    const session = await createCheckoutSession({
      userId,
      customerName: displayName,
    })

    // 決済履歴を記録（pending状態）
    await createPaymentHistory(
      userId,
      session.customer as string || '',
      session.id,
      980, // 金額
      'pending'
    )

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })
  } catch (error) {
    console.error('Checkoutセッション作成エラー:', error)
    return NextResponse.json(
      { error: '決済セッションの作成に失敗しました' },
      { status: 500 }
    )
  }
}
