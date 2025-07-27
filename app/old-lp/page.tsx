'use client'

import Link from 'next/link'

export default function OldLPPage() {
  return (
    <div className="max-w-md mx-auto">
      {/* ファーストビュー */}
      <header className="relative text-center px-4 py-12 overflow-hidden">
        {/* 装飾 */}
        <div className="absolute top-5 left-5 w-3 h-3 bg-sky-300 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-16 left-12 w-2 h-2 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-8 right-8 w-4 h-4 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-pink-500 text-shadow leading-tight">AI写メ日記</h1>
          <p className="mt-2 text-lg font-bold text-shadow">毎日がもっと、特別になる。</p>
          
          <div className="my-8">
            <div className="mx-auto w-[300px] h-[300px] rounded-3xl shadow-2xl border-4 border-white transform rotate-3 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex items-center justify-center">
              <div className="text-white text-center -rotate-3">
                <p className="text-4xl font-bold mb-2">My Diary</p>
                <p className="text-lg">📝 ✨ 💕</p>
              </div>
            </div>
          </div>
          
          <p className="text-base font-medium leading-relaxed">
            今日の出来事を写真と一緒に残すだけ。<br/>
            AIがあなたにピッタリの<br/>
            <span className="font-bold text-pink-500">"エモい"日記</span>を提案してくれるよ。
          </p>

          <a href="#plan" className="mt-8 inline-block btn-gradient text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Plusプランに登録する
          </a>
          <p className="mt-2 text-xs text-gray-500">いつでも解約OK！</p>
        </div>
      </header>

      {/* 悩み共感セクション */}
      <section className="py-12 px-6">
        <div className="glassmorphism p-6 rounded-3xl shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">こんなこと、ない？</h2>
          <ul className="space-y-3 text-left inline-block">
            <li className="flex items-center">
              <span className="mr-2 text-pink-500">✕</span>
              <span>日記が三日坊主になっちゃう…</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-pink-500">✕</span>
              <span>SNSに載せるような特別な毎日じゃない</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-pink-500">✕</span>
              <span>文章を書くのがちょっとニガテ</span>
            </li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-pink-500 mt-2">そのお悩み、<br/>AI写メ日記がぜんぶ解決！</p>
        </div>
      </section>

      {/* プラン・料金セクション */}
      <section id="plan" className="py-12 px-4 bg-white">
        <div className="relative bg-pink-50 border-2 border-pink-200 rounded-3xl p-6 text-center shadow-2xl">
          <div className="absolute -top-4 -left-3 transform rotate-[-15deg]">
            <span className="text-3xl">👑</span>
          </div>
          <h2 className="text-xl font-bold text-pink-500">Plusプラン</h2>
          <p className="text-5xl font-extrabold my-4">¥980<span className="text-2xl font-bold">/月</span></p>
          <p className="text-xs text-gray-500">(税込)</p>

          <ul className="space-y-3 mt-6 text-left inline-block">
            <li className="flex items-center">
              <span className="mr-2 text-green-500 text-lg">✓</span>
              <span>すべての機能が使い放題</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500 text-lg">✓</span>
              <span>日記の保存数無制限</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500 text-lg">✓</span>
              <span>広告なしで快適</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500 text-lg">✓</span>
              <span>限定の可愛いテーマ</span>
            </li>
          </ul>

          <button className="mt-8 inline-block w-full btn-gradient text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
            今すぐ登録して始める
          </button>
          <p className="mt-2 text-xs text-gray-500">アプリストアで決済されます</p>
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
        <p className="text-2xl font-bold text-pink-500 text-shadow">
          さあ、あなたも<br/>"特別な毎日"を始めよう！
        </p>
        <div className="mt-8 text-xs text-gray-400 space-x-4">
          <a href="#" className="hover:text-pink-400">利用規約</a>
          <a href="#" className="hover:text-pink-400">プライバシーポリシー</a>
        </div>
        <p className="mt-4 text-xs text-gray-400">&copy; 2024 AI Syame Nikki. All Rights Reserved.</p>
      </footer>
    </div>
  )
}