'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function PlusPage() {
  const [userName, setUserName] = useState<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    // URLパラメータからユーザー情報を取得
    const name = searchParams.get('name')
    if (name) {
      setUserName(decodeURIComponent(name))
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative">
      {/* グリッドパターン背景 */}
      <div className="absolute inset-0 grid-pattern opacity-20" style={{zIndex: -10}}></div>
      
      <div className="max-w-md mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            ✨ Plusプランへようこそ！
          </h1>
          {userName && (
            <p className="text-lg text-gray-600">
              {userName}さん
            </p>
          )}
        </div>

        {/* ステータスカード */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">現在のプラン</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Plus プラン
              </p>
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              アクティブ
            </div>
          </div>
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 mb-1">月額料金</p>
            <p className="text-xl font-bold text-gray-800">¥980</p>
          </div>
        </div>

        {/* 特典一覧 */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            🎁 利用可能な特典
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">無制限の日記作成</p>
                <p className="text-sm text-gray-600">毎日何枚でも写真を撮って日記を作成</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">AIによる高度な分析</p>
                <p className="text-sm text-gray-600">写真から感情や出来事を詳細に分析</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">プレミアムテンプレート</p>
                <p className="text-sm text-gray-600">特別なデザインの日記テンプレート</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">優先サポート</p>
                <p className="text-sm text-gray-600">お問い合わせへの優先対応</p>
              </div>
            </div>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="space-y-3">
          <a 
            href="/"
            className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            日記を作成する
          </a>
          <a
            href="/settings"
            className="block w-full bg-white text-gray-700 font-semibold py-3 px-6 rounded-full text-center shadow border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            設定・サブスクリプション管理
          </a>
        </div>

        {/* フッター */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>お困りの場合は</p>
          <a href="/support" className="text-pink-500 hover:text-pink-600 font-semibold">
            サポートセンター
          </a>
        </div>
      </div>
    </div>
  )
}