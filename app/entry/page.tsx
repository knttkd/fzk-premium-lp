'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getUserPlan } from '@/lib/supabase'

export default function EntryPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkUserPlan = async () => {
      // URLパラメータからuserIdを取得
      const userId = searchParams.get('userId')
      const name = searchParams.get('name')
      
      if (!userId) {
        // userIdがない場合は通常のLPページへ
        router.push('/lp')
        return
      }

      // ユーザーのプランを確認
      const plan = await getUserPlan(userId)
      
      // プランに応じてリダイレクト
      if (plan === 'plus') {
        // Plusプランの場合はPlus専用ページへ
        const params = new URLSearchParams()
        params.set('userId', userId)
        if (name) params.set('name', name)
        router.push(`/plus?${params.toString()}`)
      } else {
        // Freeプランまたはエラーの場合は通常のLPページへ
        const params = new URLSearchParams()
        params.set('userId', userId)
        if (name) params.set('name', name)
        router.push(`/lp?${params.toString()}`)
      }
    }

    checkUserPlan()
  }, [router, searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
          <div className="w-full h-full border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600">プラン情報を確認中...</p>
      </div>
    </div>
  )
}