'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function NewLPPage() {
  return (
    <div className="min-h-screen grid-pattern">
      <div className="max-w-md mx-auto">
        {/* ファーストビュー */}
        <header className="relative text-center px-4 py-16 overflow-hidden">
          {/* 装飾 */}
          <div className="absolute top-5 left-5 w-3 h-3 bg-sky-300 rounded-full opacity-80 animate-pulse"></div>
          <div className="absolute top-24 left-12 w-2 h-2 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
          <div className="absolute top-8 right-8 w-4 h-4 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
          
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-pink-500 text-shadow leading-tight">
              そろそろ"AI任せ"から<br />
              <span className="text-4xl sm:text-5xl">"ワタシ専用AI"</span>に<br />
              しませんか？
            </h1>
            <p className="mt-4 text-base font-bold text-shadow">売れっ子キャストはもう始めてる、日記の最終形態。</p>
          </div>
        </header>

        {/* CTAセクション */}
        <section className="py-12 px-6">
          <div className="glassmorphism p-8 rounded-3xl shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Image 
                src="/ai-character-transparent.png" 
                alt="AI キャラクター" 
                width={256}
                height={256}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-pink-500 text-center">
              専用のAIで<br />もっと稼げる日記へ
            </h2>
            <p className="text-base mb-8 text-center">
              今の便利さを超える、圧倒的な機能が<br />Plusプランにはあります。
            </p>
            <div className="text-center">
              <a href="#features" className="inline-block btn-gradient text-white font-bold text-lg py-2 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                Plusプランの<br />神機能をチェック
              </a>
            </div>
          </div>
        </section>

        {/* 解決策・機能紹介セクション */}
        <section id="features" className="py-12 px-6 bg-gray-50">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold title-underline">Plusプランは、ただの上位版じゃない。</h2>
            <p className="mt-8 text-lg font-bold">
              あなただけの<br />
              <span className="text-pink-500">"売れる日記"</span><br />
              生成システムです
            </p>
          </div>

          <div className="space-y-6">
            {/* 機能1: 口調・キャラ完コピ */}
            <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="35" r="18" fill="#FEC0CB"/>
                      <path d="M50 55 C35 55 25 65 25 80 L75 80 C75 65 65 55 50 55 Z" fill="#6DB3E2"/>
                      <circle cx="50" cy="35" r="15" fill="#FDDDE6"/>
                      <path d="M43 32 Q50 38 57 32" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="44" cy="33" r="1.5" fill="#333"/>
                      <circle cx="56" cy="33" r="1.5" fill="#333"/>
                      <path d="M50 25 C50 25 45 20 40 25 C40 25 45 22 50 25" fill="#8B4513"/>
                      <path d="M50 25 C50 25 55 20 60 25 C60 25 55 22 50 25" fill="#8B4513"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">まるで私のためだけという関係性が入っていたかのように個性溢れる日記に、読者が惹かれるでしょう。付き合いが長いです。</p>
                  <h3 className="font-bold text-base text-pink-500 mb-2">1. 私だけ、口調＋個性あ〜</h3>
                  <div className="bg-pink-50 rounded-xl p-3 text-xs text-gray-700">
                    <p className="font-medium mb-1">あなたのワード向に何か文章が書入りたい、自分のムキセンサリファとポスにフレーワドもセンスよく!</p>
                    <p className="text-pink-600 font-bold mt-2">▶ 本当にコピペだけで作業完了！</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 機能2: カスタム設定 */}
            <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="38" r="20" fill="#FEC0CB"/>
                      <path d="M50 60 C33 60 20 73 20 90 L80 90 C80 73 67 60 50 60 Z" fill="#FFB3D9"/>
                      <circle cx="50" cy="38" r="17" fill="#FDDDE6"/>
                      <path d="M42 35 Q50 42 58 35" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="44" cy="36" r="1.5" fill="#333"/>
                      <circle cx="56" cy="36" r="1.5" fill="#333"/>
                      <path d="M35 30 C35 30 42 25 50 28 C58 25 65 30 65 30" fill="none" stroke="#8B4513" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="35" y="10" width="30" height="8" rx="4" fill="#6DB3E2" opacity="0.3"/>
                      <rect x="40" y="12" width="20" height="4" rx="2" fill="#6DB3E2"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">私をワークドPCに向から身感覚が盛込もう、自分のワードたぶも入れましょ。長いこ、理知してにできるルールが開運しています。</p>
                  <h3 className="font-bold text-base text-pink-500 mb-2">2. 好み、30歳や運動部へ</h3>
                  <div className="bg-pink-50 rounded-xl p-3 text-xs text-gray-700">
                    <p className="font-medium mb-1">エロ合い、日記の長さ、自分の呼び方…
ぜーんぶカスタマイズOK!
あなたのルール通りに、完璧な日記が完成します。</p>
                    <p className="text-pink-600 font-bold mt-2">▶ 本当にコピペだけで作業完了！</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 機能3: 特別搭載AI */}
            <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="38" r="20" fill="#FEC0CB"/>
                      <path d="M50 60 C33 60 20 73 20 90 L80 90 C80 73 67 60 50 60 Z" fill="#E6B8FF"/>
                      <circle cx="50" cy="38" r="17" fill="#FDDDE6"/>
                      <circle cx="42" cy="36" r="5" fill="#FFB3D9"/>
                      <circle cx="58" cy="36" r="5" fill="#FFB3D9"/>
                      <path d="M42 35 Q50 44 58 35" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="44" cy="36" r="1.5" fill="#333"/>
                      <circle cx="56" cy="36" r="1.5" fill="#333"/>
                      <path d="M35 27 C35 27 42 22 50 25 C58 22 65 27 65 27" fill="none" stroke="#8B4513" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M48 42 Q50 44 52 42" fill="none" stroke="#FF69B4" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">時刻や曜日フェーいかれと見つやすです。ブルータさが、完成イベストスマホモセッションシェ持って重視したタプスメッシュ。</p>
                  <h3 className="font-bold text-base text-pink-500 mb-2">3. 特別中からわりレば+</h3>
                  <div className="bg-pink-50 rounded-xl p-3 text-xs text-gray-700">
                    <p className="font-medium mb-1">環境でお得れの女性に向スエースクリエイティブで、プルーンベリーやつき時かなセリフフォ単語さで男性の心を鷲掴みにする表現を提案します。</p>
                    <p className="text-pink-600 font-bold mt-2">▶ 日記からの予約率UPでライバルと差をつける！</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 機能4: プロ仕様 */}
            <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="38" r="20" fill="#FEC0CB"/>
                      <path d="M50 60 C33 60 20 73 20 90 L80 90 C80 73 67 60 50 60 Z" fill="#FFE4B5"/>
                      <circle cx="50" cy="38" r="17" fill="#FDDDE6"/>
                      <path d="M50 28 C50 28 40 23 35 28 L50 35 L65 28 C60 23 50 28 50 28" fill="#FFD700"/>
                      <path d="M42 35 Q50 41 58 35" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="44" cy="36" r="1.5" fill="#333"/>
                      <circle cx="56" cy="36" r="1.5" fill="#333"/>
                      <circle cx="72" cy="25" r="8" fill="#FFD700" opacity="0.8"/>
                      <path d="M72 25 L70 23 L72 21 L74 23 Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">飲み終わると毎日付け潜のになります。デパレットタブタを広がるスト今冒を殊能力すれば、のもしろとテレを今のままですね。</p>
                  <h3 className="font-bold text-base text-pink-500 mb-2">4. KB台、顔譜/動画色へ</h3>
                  <div className="bg-pink-50 rounded-xl p-3 text-xs text-gray-700">
                    <p className="font-medium mb-1">PLまん店けのぬ重天才AI」な言葉の引き出しがケタ違い。
読んた男性か「今すぐ会いたい…！」</p>
                    <p className="text-pink-600 font-bold mt-2">▶ 日記からの予約率UPでライバルと差をつける！</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 機能5: 成長型AI */}
            <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="38" r="20" fill="#FEC0CB"/>
                      <path d="M50 60 C33 60 20 73 20 90 L80 90 C80 73 67 60 50 60 Z" fill="#B8E6B8"/>
                      <circle cx="50" cy="38" r="17" fill="#FDDDE6"/>
                      <path d="M42 35 Q50 42 58 35" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="44" cy="36" r="1.5" fill="#333"/>
                      <circle cx="56" cy="36" r="1.5" fill="#333"/>
                      <path d="M38 28 C38 28 44 24 50 27 C56 24 62 28 62 28" fill="none" stroke="#90EE90" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M25 60 L30 55 L35 60" stroke="#90EE90" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M65 60 L70 55 L75 60" stroke="#90EE90" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">市板上書きめぐりというところあば、各層国系すれ主どのエリメップたと気込にダリクフェタペースセタレクツがしていきます。</p>
                  <h3 className="font-bold text-base text-pink-500 mb-2">5. 成長方、洞察・情報通へ</h3>
                  <div className="bg-pink-50 rounded-xl p-3 text-xs text-gray-700">
                    <p className="font-medium mb-1">3署化冥言けるようになりびまよう。</p>
                    <p className="text-pink-600 font-bold mt-2">▶ 使えば使うほど成長するAI！</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-500">
            3層化の情報が入っており全ての文章となります話になリけん。
          </p>

          <p className="mt-12 text-center text-lg font-bold">
            あなたの仕事は、<br />
            <br className="sm:hidden" />
            予約の連絡を返すことだけになるかも。
          </p>
        </section>

        {/* プラン・料金セクション */}
        <section id="plan" className="py-12 px-4">
          <div className="relative bg-white border-2 border-pink-200 rounded-3xl p-6 text-center shadow-2xl">
            {/* 装飾 */}
            <div className="absolute -top-4 -left-3 transform rotate-[-15deg]">
              <span className="text-3xl">💖</span>
            </div>
            <h2 className="text-2xl font-bold text-pink-500">自分へ投資、しよ？</h2>
            
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

            <button className="mt-6 inline-block w-full btn-gradient text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              今すぐ「Plusプラン」を<br />体験する
            </button>
            <p className="mt-2 text-xs text-gray-500">いつでも解約OK！</p>
          </div>
        </section>
        
        {/* フッター */}
        <footer className="text-center py-8 px-4">
          <div className="mb-8">
            <Link 
              href="/demo"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-full transition"
            >
              デモページに戻る
            </Link>
          </div>
          <div className="mt-8 text-xs text-gray-400 space-x-4">
            <a href="#" className="hover:text-pink-400">利用規約</a>
            <a href="#" className="hover:text-pink-400">プライバシーポリシー</a>
          </div>
          <p className="mt-4 text-xs text-gray-400">&copy; 2024 Your Service Name. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}