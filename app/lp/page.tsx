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
        <section id="features" className="py-12 px-6 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold title-underline">Plusプランは、ただの上位版じゃない。</h2>
            <p className="mt-8 text-lg font-bold">
              あなただけの<br />
              <span className="text-pink-500">"売れる日記"</span><br />
              生成システムです
            </p>
          </div>

          <div className="space-y-10">
            {/* 機能1: 口調・キャラ完コピ */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"/>
                  <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
                  <path d="M19.5 8.5c.3.1.5.3.7.5l.3.4c.1.2.2.4.2.6v1.8c0 .2-.1.4-.2.6l-.3.4c-.2.2-.4.4-.7.5l-1.5.8c-.2.1-.4.2-.6.2h-1.8c-.2 0-.4-.1-.6-.2l-1.5-.8c-.3-.1-.5-.3-.7-.5l-.3-.4c-.1-.2-.2-.4-.2-.6V9.7c0-.2.1-.4.2-.6l.3-.4c.2-.2.4-.4.7-.5l1.5-.8c.2-.1.4-.2.6-.2h1.8c.2 0 .4.1.6.2l1.5.8Z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-pink-500">【口調・キャラ完コピ】AIがあなたの分身になる</h3>
              <p className="text-sm mt-2 px-2">
                プロフィールURLを入れるだけ。<br />
                あなたの言葉遣い、絵文字のクセ、キャラまで丸暗記！<br />
                長年のマネージャーみたいに、あなたの魅力を完璧に理解した日記を書きます。
              </p>
              <p className="mt-2 font-bold text-sm bg-pink-100 inline-block px-3 py-1 rounded-full">
                ▶︎ 「自分らしさ」がアピールできる！
              </p>
            </div>

            {/* 機能2: カスタム設定 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M2 14h4"/><path d="M10 8h4"/><path d="M18 16h4"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-sky-500">【カスタム設定】面倒な手直し、完全撲滅</h3>
              <p className="text-sm mt-2 px-2">
                エロ度合い、日記の長さ、自分の呼び方…<br />
                ぜーんぶカスタマイズOK！<br />
                あなたのルール通りに、完璧な日記が完成します。
              </p>
              <p className="mt-2 font-bold text-sm bg-sky-100 inline-block px-3 py-1 rounded-full">
                ▶︎ 本当に「コピペだけ」で作業完了！
              </p>
            </div>

            {/* 機能3: 特別搭載AI */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.042 21.672L13.684 16.6s.435-.58.819-.979a21.46 21.46 0 0 1 4.962-4.962c.398-.383.979-.819.979-.819l5.072 1.358a1 1 0 0 1 .632.972l-1.358 5.072a1 1 0 0 1-.972.632Z"/>
                  <path d="m5.878 5.878 4.243 4.243"/><path d="M2 22l1.414-1.414"/><path d="M12 12l-2-2"/><path d="M20 4 12 12"/><path d="m15 19-2-2"/><path d="m22 2-1.414 1.414"/>
                  <path d="M12 12a2 2 0 0 1-2-2V7a2 2 0 1 1 4 0v3a2 2 0 0 1-2 2Z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-yellow-500">【特別搭載AI】売上に直結する"神フレーズ"を連発</h3>
              <p className="text-sm mt-2 px-2">
                Plusプラン限定の"超天才AI"は言葉の引き出しがケタ違い。<br />
                読んだ男性が「今すぐ会いたい…！」<br />
                と感じる、心を鷲掴みにする表現を提案します。
              </p>
              <p className="mt-2 font-bold text-sm bg-yellow-100 inline-block px-3 py-1 rounded-full">
                ▶︎ 日記からの予約率UPでライバルと差をつける！
              </p>
            </div>
          </div>

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