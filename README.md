# プラスプラン決済LP

LINEリッチメニューから誘導される決済LPです。
LIFFを使用してユーザー情報を取得し、Stripeで月額980円のサブスクリプション決済を処理します。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS
- **決済**: Stripe
- **データベース**: Supabase
- **LINE連携**: LIFF (LINE Front-end Framework)
- **言語**: TypeScript

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local.example`を`.env.local`にコピーして、必要な値を設定してください：

```bash
cp .env.local.example .env.local
```

必要な環境変数：
- `NEXT_PUBLIC_LIFF_ID`: LINE Developers ConsoleのLIFF ID
- `NEXT_PUBLIC_BASE_URL`: アプリケーションのベースURL
- `STRIPE_SECRET_KEY`: StripeのシークレットAPIキー
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripeの公開可能キー
- `STRIPE_PRODUCT_ID`: Stripe商品ID
- `STRIPE_PRICE_ID`: Stripe価格ID（月額サブスク用）
- `SUPABASE_URL`: SupabaseプロジェクトのURL
- `SUPABASE_SERVICE_ROLE_KEY`: SupabaseのService Roleキー

### 3. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)でアプリケーションが起動します。

## デプロイ

### Vercelへのデプロイ

1. GitHubにプッシュ
2. Vercelでプロジェクトをインポート
3. 環境変数を設定
4. デプロイ

### 本番環境の設定

1. **LIFF URL更新**: LINE Developers ConsoleでエンドポイントURLを本番URLに更新
2. **Stripe設定**: 本番用のAPIキーと価格IDに更新
3. **環境変数**: `NEXT_PUBLIC_BASE_URL`を本番URLに更新

## 機能

- LINEアカウントでのユーザー認証（LIFF）
- プロフィール情報の自動取得
- 既存プラン登録者のチェック
- Stripeでの安全な決済処理
- 決済完了後の自動画面遷移
- レスポンシブデザイン

## ディレクトリ構造

```
premium-lp/
├── app/                    # Next.js App Router
│   ├── api/               # APIルート
│   │   └── create-checkout-session/
│   ├── success/           # 決済成功ページ
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── components/            # Reactコンポーネント
├── lib/                   # ユーティリティ
│   ├── liff.ts           # LIFF関連
│   ├── stripe.ts         # Stripe関連
│   └── supabase.ts       # Supabase関連
└── public/               # 静的ファイル
```

## セキュリティ

- 環境変数は`.env.local`に保存（Gitには含まれない）
- StripeシークレットキーはサーバーサイドのみでALTER使用
- Supabase Service Roleキーはサーバーサイドのみで使用
- HTTPS通信の強制（本番環境）

## トラブルシューティング

### LIFFが動作しない
- LINEアプリ内で開いているか確認
- LIFF IDが正しいか確認
- HTTPSでアクセスしているか確認（開発時はlocalhostはOK）

### 決済が失敗する
- Stripe APIキーが正しいか確認
- 価格IDが月額サブスク用か確認
- ネットワーク接続を確認

### データベースエラー
- Supabase URLとキーが正しいか確認
- テーブルとカラムが存在するか確認
- RLS（Row Level Security）の設定を確認
