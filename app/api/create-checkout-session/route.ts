import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'

/**
 * n8n中心アーキテクチャに基づく最小限のAPI実装
 * 役割：Stripeチェックアウトセッションの作成のみ
 * データ処理（ユーザー作成、決済履歴記録）はn8nが担当
 */
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

    // Stripeチェックアウトセッションを作成
    // メタデータとclient_reference_idでユーザー情報をn8nに引き継ぐ
    const session = await createCheckoutSession({
      userId,
      customerName: displayName,
      metadata: {
        userId,
        displayName,
        pictureUrl: pictureUrl || ''
      }
    })

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
