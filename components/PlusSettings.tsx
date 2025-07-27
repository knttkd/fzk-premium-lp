'use client'

import { useState } from 'react'
import { LiffProfile } from '@/lib/liff'
import { User } from '@/lib/supabase'

interface PlusSettingsProps {
  profile: LiffProfile | null
  user: User | null
}

export default function PlusSettings({ profile, user }: PlusSettingsProps) {
  const [aiPersonality, setAiPersonality] = useState('')
  const [selfPronoun, setSelfPronoun] = useState('')
  const [customerPronoun, setCustomerPronoun] = useState('')
  const [diaryLength, setDiaryLength] = useState(3)
  const [eroLevel, setEroLevel] = useState(3)
  const [emojiFrequency, setEmojiFrequency] = useState(3)
  const [profileUrl, setProfileUrl] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    // TODO: 設定を保存する処理
    setTimeout(() => {
      setSaving(false)
      alert('設定を保存しました')
    }, 1000)
  }

  const handleLearnFromProfile = async () => {
    if (!profileUrl) {
      alert('プロフィールURLを入力してください')
      return
    }
    // TODO: プロフィールから学習する処理
    alert('AIが学習を開始しました')
  }

  return (
    <div className="min-h-screen grid-pattern">
      <div className="max-w-md mx-auto p-4">
        {/* ヘッダー */}
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold text-pink-500">AI写メ日記 Plus</h1>
          <p className="text-sm mt-2 text-gray-600">あなた専用のAI設定</p>
          {profile && (
            <div className="mt-4 flex items-center justify-center space-x-2">
              <img src={profile.pictureUrl} alt={profile.displayName} className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium">{profile.displayName}さん</span>
            </div>
          )}
        </header>

        {/* AIキャラクター設定 */}
        <section className="glassmorphism rounded-3xl p-6 mb-6">
          <h2 className="text-xl font-bold text-pink-500 mb-4">AIキャラクター設定</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">AIの口調・性格</label>
            <textarea 
              className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-400" 
              rows={3} 
              placeholder="例：明るくて元気！絵文字たくさん使う💕"
              value={aiPersonality}
              onChange={(e) => setAiPersonality(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">自分の呼び方</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-400" 
              placeholder="例：私、うち、名前"
              value={selfPronoun}
              onChange={(e) => setSelfPronoun(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">お客さんの呼び方</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-400" 
              placeholder="例：〇〇さん、〇〇くん"
              value={customerPronoun}
              onChange={(e) => setCustomerPronoun(e.target.value)}
            />
          </div>
        </section>

        {/* 日記スタイル設定 */}
        <section className="glassmorphism rounded-3xl p-6 mb-6">
          <h2 className="text-xl font-bold text-sky-500 mb-4">日記スタイル設定</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">日記の長さ</label>
            <div className="flex items-center space-x-2">
              <span className="text-sm">短め</span>
              <input 
                type="range" 
                min="1" 
                max="5" 
                value={diaryLength}
                onChange={(e) => setDiaryLength(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm">長め</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">エロ度合い</label>
            <div className="flex items-center space-x-2">
              <span className="text-sm">清楚</span>
              <input 
                type="range" 
                min="1" 
                max="5" 
                value={eroLevel}
                onChange={(e) => setEroLevel(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm">エロ売り</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">絵文字の使用頻度</label>
            <div className="flex items-center space-x-2">
              <span className="text-sm">少なめ</span>
              <input 
                type="range" 
                min="1" 
                max="5" 
                value={emojiFrequency}
                onChange={(e) => setEmojiFrequency(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm">多め</span>
            </div>
          </div>
        </section>

        {/* 学習用プロフィールURL */}
        <section className="glassmorphism rounded-3xl p-6 mb-6">
          <h2 className="text-xl font-bold text-yellow-500 mb-4">AIに学習させる</h2>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">プロフィールURL</label>
            <input 
              type="url" 
              className="w-full p-3 rounded-lg border border-yellow-200 focus:outline-none focus:border-yellow-400" 
              placeholder="https://example.com/profile"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
            />
            <p className="text-xs text-gray-600 mt-1">過去の日記からあなたの特徴を学習します</p>
          </div>
          <button 
            onClick={handleLearnFromProfile}
            className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition"
          >
            AIに学習させる
          </button>
        </section>

        {/* 保存ボタン */}
        <div className="text-center mb-8">
          <button 
            onClick={handleSave}
            disabled={saving}
            className={`btn-gradient text-white font-bold text-lg py-4 px-16 rounded-full shadow-lg transition-transform duration-300 ${
              saving ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
            }`}
          >
            {saving ? '保存中...' : '設定を保存'}
          </button>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-gray-400 pb-8">
          <p>&copy; 2024 AI写メ日記 Plus. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}