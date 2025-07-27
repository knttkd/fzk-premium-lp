'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DemoPage() {
  const [currentPlan, setCurrentPlan] = useState<'free' | 'plus'>('free')

  useEffect(() => {
    // ローカルストレージから現在のプランを取得
    const storedPlan = localStorage.getItem('userPlan') as 'free' | 'plus' | null
    if (storedPlan) {
      setCurrentPlan(storedPlan)
    }
  }, [])

  const setUserPlan = (plan: 'free' | 'plus') => {
    localStorage.setItem('userPlan', plan)
    setCurrentPlan(plan)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">デモコントローラー</h1>
        
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-4">
            ユーザープランを切り替えて、画面遷移をテストできます。
          </p>
          
          <div className="space-y-3">
            <button 
              onClick={() => setUserPlan('free')}
              className={`w-full font-bold py-3 px-4 rounded transition ${
                currentPlan === 'free' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              フリープランユーザーとしてアクセス
            </button>
            
            <button 
              onClick={() => setUserPlan('plus')}
              className={`w-full font-bold py-3 px-4 rounded transition ${
                currentPlan === 'plus' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-pink-100 hover:bg-pink-200 text-pink-800'
              }`}
            >
              Plusプランユーザーとしてアクセス
            </button>
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-2">現在の設定:</p>
          <p className="font-bold text-lg mb-4">
            {currentPlan === 'plus' ? 'Plusプラン' : 'フリープラン'}
          </p>
        </div>

        <div className="space-y-3 border-t pt-4">
          <h2 className="font-bold text-lg mb-2">ページ一覧</h2>
          
          <Link 
            href="/"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded text-center transition"
          >
            メインページへ（自動振り分け）
          </Link>
          
          <Link 
            href="/lp"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded text-center transition"
          >
            新LPデザイン（強制表示）
          </Link>
          
          <Link 
            href="/settings"
            className="block w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded text-center transition"
          >
            Plus設定画面（強制表示）
          </Link>
          
          <Link 
            href="/old-lp"
            className="block w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded text-center transition"
          >
            旧LPデザイン
          </Link>
        </div>
      </div>
    </div>
  )
}