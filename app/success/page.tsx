'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { closeLiff } from '@/lib/liff'

export default function SuccessPage() {
  const [closing, setClosing] = useState(false)
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    // 3秒後に自動的にLIFFを閉じる
    const timer = setTimeout(() => {
      handleClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setClosing(true)
    // LIFFを閉じる
    closeLiff()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* 成功アイコン */}
        <div className="mb-6">
          <div className="mx-auto w-24 h-24 bg-line-green rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* メッセージ */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          登録完了！
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          プラスプランへの登録が完了しました
        </p>
        <p className="text-gray-600 mb-8">
          月額980円の決済が正常に処理されました
        </p>

        {/* 詳細情報 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600">
            登録内容の詳細はLINEトークでお知らせします
          </p>
        </div>

        {/* 閉じるボタン */}
        <button
          onClick={handleClose}
          disabled={closing}
          className="btn-primary w-full"
        >
          {closing ? '閉じています...' : 'LINEに戻る'}
        </button>

        {/* 自動的に閉じる通知 */}
        <p className="text-xs text-gray-500 mt-4">
          3秒後に自動的に閉じます
        </p>

        {/* セッションID（デバッグ用） */}
        {sessionId && (
          <p className="text-xs text-gray-400 mt-4 break-all">
            Session ID: {sessionId}
          </p>
        )}
      </div>
    </div>
  )
}
