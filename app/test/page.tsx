'use client'

export default function TestPage() {
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

      {/* 機能紹介セクション */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8 title-underline">AI写メ日記でできること</h2>
        <div className="space-y-8">
          {/* Point 1 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📅</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-pink-500">毎日新しいテーマが届く</h3>
              <p className="text-sm mt-1">「今日のラッキーカラーは？」「最近ハマってる曲は？」など、毎日違うお題が届くから、書くことに困らない！</p>
            </div>
          </div>
          {/* Point 2 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🤖</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-sky-500">AIが"エモい"文章を提案</h3>
              <p className="text-sm mt-1">撮った写真と言葉を少し入れるだけで、AIが感動的な日記やポエム風の文章を自動で作成。自分では思いつかない表現に出会えるかも。</p>
            </div>
          </div>
          {/* Point 3 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🎁</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-yellow-500">自分だけの思い出アルバム</h3>
              <p className="text-sm mt-1">カレンダー機能でいつでも思い出を振り返り。何気ない毎日が、あなただけの宝物でいっぱいになる。</p>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 title-underline">みんなの声</h2>
        <div className="space-y-6">
          {/* Voice 1 */}
          <div className="glassmorphism p-5 rounded-2xl shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-red-200 flex items-center justify-center text-red-600 font-bold">
                A
              </div>
              <div>
                <p className="font-bold">あやか / 22歳</p>
                <p className="text-sm mt-1">毎日テーマが来るから飽きずに続けられてる！AIが書いてくれる文章が可愛すぎて、毎日の楽しみが増えました♡</p>
              </div>
            </div>
          </div>
          {/* Voice 2 */}
          <div className="glassmorphism p-5 rounded-2xl shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-blue-600 font-bold">
                M
              </div>
              <div>
                <p className="font-bold">みき / 19歳</p>
                <p className="text-sm mt-1">自分の撮った写真がオシャレな日記になるのが嬉しい！友達に「最近なんかキラキラしてるね」って言われました（笑）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プラン・料金セクション */}
      <section id="plan" className="py-12 px-4 bg-white">
        <div className="relative bg-pink-50 border-2 border-pink-200 rounded-3xl p-6 text-center shadow-2xl">
          {/* 装飾 */}
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

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-yellow-800 text-sm">テストページのため、決済機能は動作しません</p>
          </div>

          <button
            disabled={true}
            className="mt-4 inline-block w-full btn-gradient text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg opacity-50 cursor-not-allowed"
          >
            今すぐ登録して始める
          </button>
          <p className="mt-2 text-xs text-gray-500">アプリストアで決済されます</p>
        </div>
      </section>
      
      {/* フッター */}
      <footer className="text-center py-8 px-4">
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