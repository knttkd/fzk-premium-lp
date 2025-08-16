'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const searchParams = useSearchParams()
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    // URLパラメータからuserIdを取得
    const id = searchParams.get('userId')
    setUserId(id)
    
    // 開発環境でテスト用のuserIdを設定
    if (!id && process.env.NODE_ENV === 'development') {
      setUserId('test-user-' + Date.now())
    }
  }, [searchParams])

  const handleCheckout = async () => {
    if (!userId) {
      setError('ユーザー情報が取得できません。LINEアプリから開いてください。')
      return
    }

    try {
      setProcessing(true)
      setError(null)

      // Checkoutセッションを作成
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'エラーが発生しました')
      }

      // Stripeのチェックアウトページにリダイレクト
      window.location.href = data.url

    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました')
      setProcessing(false)
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* グリッドパターンを最下層に配置 */}
      <div className="absolute inset-0 grid-pattern" style={{zIndex: -10}}></div>
      <div className="relative">
      <div className="max-w-md mx-auto">
        {/* ファーストビュー */}
        <header className="relative text-center px-4 py-4 overflow-hidden">
          {/* 装飾 */}
          <div className="absolute top-5 left-5 w-3 h-3 bg-sky-300 rounded-full opacity-80 animate-pulse"></div>
          <div className="absolute top-24 left-12 w-2 h-2 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
          <div className="absolute top-8 right-8 w-4 h-4 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-500 text-shadow leading-tight">
              ただの"AI任せ"から<br />
              <span className="text-4xl sm:text-5xl">"ジブン専用AI"</span>に<br />
              しませんか？
            </h1>
            <p className="mt-3 text-lg font-bold text-shadow">売れっ子になって、ラクに稼いじゃお。</p>
          </div>
        </header>

        {/* CTAセクション（上部は直線） */}
        <section className="py-6 px-4 relative pb-10" style={{backgroundColor: '#ffeaeb'}}>
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="relative -mb-[108px]">
              <div className="relative w-full max-w-[360px] h-[360px] mx-auto bg-white rounded-xl">
                {/* グラデーションオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent z-10 pointer-events-none rounded-xl"></div>
                <Image 
                  src="/images/cta-main.png" 
                  alt="AIキャラクター" 
                  width={360}
                  height={360}
                  className="object-contain w-full h-full relative z-0"
                />
              </div>
            </div>
            <div className="relative z-20">
              <h2 className="text-3xl font-bold mb-4 text-center mt-10" style={{textShadow: '0 0 8px #ff949e, 0 0 15px #ff949e, 0 0 20px #ff949e, 0 0 30px #ff949e', color: '#fff'}}>
                専用のAIで<br />もっと稼げる日記へ
              </h2>
            </div>
            <p className="text-base mb-6 text-center relative z-30 mt-6">
              今の便利さを超える、圧倒的な機能が<br />プラスプランにはあります。
            </p>
            <div className="text-center relative">
              <a href="#features" className="inline-block btn-gradient text-white font-bold text-lg py-2 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300" style={{boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)'}}>
                プラスプランの<br />神機能をチェック
              </a>
            </div>
          </div>
        </section>

        {/* セクションBとCの間の波線 */}
        <div className="relative">
          <svg className="w-full h-16 -mb-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q150,120 300,60 T600,60 T900,60 T1200,60 L1200,0 L0,0 Z" fill="#ffeaeb"/>
          </svg>
        </div>

        {/* 解決策・機能紹介セクション */}
        <section id="features" className="py-12 px-6 relative -mt-12 pb-16" style={{backgroundColor: '#facfd7', paddingTop: '60px', zIndex: -1}}>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold title-underline">プラスプランは<br />ただの上位版じゃない</h2>
            <p className="mt-8 text-lg font-bold">
              あなただけの<br />
              <span className="text-pink-500">"売れる日記"</span><br />
              生成システムです
            </p>
          </div>

          <div className="space-y-6">
            {/* 機能1: 口調・キャラ完コピ */}
            <div className="rounded-3xl shadow-md p-6 relative overflow-hidden" style={{backgroundColor: '#ffffff'}}>
              <div className="text-center">
                <div className="relative inline-block -mb-[26px]">
                  <div className="w-64 h-64 relative mx-auto overflow-hidden rounded-xl">
                    {/* グラデーションオーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
                    <Image 
                      src="/images/new-ai-character.png" 
                      alt="機能アイコン1" 
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="relative z-20">
                  <h3 className="font-bold text-base text-pink-500 mb-2">【口調・キャラ完コピ】<br />AIがあなたの分身になる</h3>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 text-xs text-gray-700">
                  <p className="font-medium mb-2">プロフィールURLを入れるだけ。<br />あなたの言葉遣い、絵文字のクセ、キャラまで丸暗記！<br />長年のマネージャーみたいに、あなたの魅力を完璧に理解した日記を書きます。</p>
                  <p className="text-pink-600 font-bold mt-3">▶ 「自分らしさ」がアピールできる！</p>
                </div>
              </div>
            </div>

            {/* 機能2: カスタム設定 */}
            <div className="rounded-3xl shadow-md p-6 relative overflow-hidden" style={{backgroundColor: '#ffffff'}}>
              <div className="text-center">
                <div className="relative inline-block -mb-[26px]">
                  <div className="w-64 h-64 relative mx-auto overflow-hidden rounded-xl">
                    {/* グラデーションオーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
                    <Image 
                      src="/images/feature-icon-2.jpeg" 
                      alt="機能アイコン2" 
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="relative z-20">
                  <h3 className="font-bold text-base text-pink-500 mb-2">【カスタム設定】<br />面倒な手直し、完全撲滅</h3>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 text-xs text-gray-700">
                  <p className="font-medium mb-2">エロ度合い、日記の長さ、自分の呼び方…<br />
ぜーんぶカスタマイズOK!<br />
あなたのルール通りに、完璧な日記が完成します。</p>
                  <p className="text-pink-600 font-bold mt-3">▶ 本当に「コピペだけ」で作業完了！</p>
                </div>
              </div>
            </div>

            {/* 機能3: 特別搭載AI */}
            <div className="rounded-3xl shadow-md p-6 relative overflow-hidden" style={{backgroundColor: '#ffffff'}}>
              <div className="text-center">
                <div className="relative inline-block -mb-[26px]">
                  <div className="w-64 h-64 relative mx-auto overflow-hidden rounded-xl">
                    {/* グラデーションオーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
                    <Image 
                      src="/images/feature-icon-3.png" 
                      alt="機能アイコン3" 
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="relative z-20">
                  <h3 className="font-bold text-base text-pink-500 mb-2">【特別搭載AI】<br />売上に直結する"神フレーズ"を連発</h3>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 text-xs text-gray-700">
                  <p className="font-medium mb-2">プラスプラン限定の"超天才AI"は言葉の引き出しがケタ違い。<br />読んだ男性が「今すぐ会いたい…！」<br />と感じる、心を鷲掴みにする表現を提案します。</p>
                  <p className="text-pink-600 font-bold mt-3">▶ 日記からの予約率UPでライバルと差をつける！</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-lg font-bold">
            あなたの仕事は、<br />
            <br className="sm:hidden" />
            予約の連絡を返すことだけになるかも。
          </p>
        </section>

        {/* セクションCの下部の波線 */}
        <div className="relative" style={{marginTop: '-1px'}}>
          <svg className="w-full h-16 block" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q150,120 300,60 T600,60 T900,60 T1200,60 L1200,0 L0,0 Z" fill="#facfd7"/>
          </svg>
        </div>

        {/* プラン・料金セクション */}
        <section id="plan" className="py-12 px-4 relative -mt-16" style={{backgroundColor: '#fff5f8', paddingTop: '80px', zIndex: -1}}>
          <div className="relative bg-white border-2 border-pink-200 rounded-3xl p-6 text-center shadow-2xl">
            {/* 装飾 */}
            <div className="absolute -top-4 -left-3 transform rotate-[-15deg]">
              <span className="text-3xl">💖</span>
            </div>
            <h2 className="text-2xl font-bold text-pink-500">自分へ投資、始めちゃお？</h2>
            
            <ul className="space-y-3 mt-8 mb-8 text-left inline-block font-medium">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-3 flex-shrink-0">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span><span className="font-bold">神フレーズAI</span>を使える！</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-3 flex-shrink-0">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>あなた専用に<span className="font-bold">進化するAI</span></span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-3 flex-shrink-0">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span><span className="font-bold">エロ売り ⇔ 清楚</span>の調整機能</span>
              </li>
            </ul>
            
            <p className="text-5xl font-extrabold my-4">
              ¥980<span className="text-2xl font-bold">/月</span>
            </p>

            <div className="relative">
              <button 
                onClick={handleCheckout}
                disabled={processing}
                className="mt-6 inline-block w-full btn-gradient text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                style={{boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)'}}
              >
                {processing ? '処理中...' : (
                  <>今すぐ「プラスプラン」を<br />体験する</>
                )}
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">いつでも解約OK！</p>
            {error && (
              <p className="mt-4 text-red-500 text-sm">{error}</p>
            )}
          </div>
        </section>
        
        {/* 波状の境界線 */}
        <div className="relative bg-gray-100">
          <svg className="w-full h-16 -mb-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q150,0 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z" fill="#f3f4f6"/>
          </svg>
        </div>
        
        {/* フッター */}
        <footer className="text-center py-8 px-4 relative bg-gray-100">
          <div className="mt-8 text-xs text-gray-400 space-x-4">
            <a href="#" className="hover:text-pink-400">利用規約</a>
            <a href="#" className="hover:text-pink-400">プライバシーポリシー</a>
          </div>
          <p className="mt-4 text-xs text-gray-400">&copy; 2024 AI写メ日記. All Rights Reserved.</p>
        </footer>
      </div>
      </div>
    </div>
  )
}