# プロジェクト情報

## このプロジェクトの目的
LINEリッチメニューから決済LPへ誘導し、Stripeを使用してプラスプラン（月額980円）への登録を実現するシステムの構築。LINEユーザーIDと決済情報を確実に紐付け、自動的にユーザーのステータスを更新する仕組みを実装する。

## コード構造
```
fzk-premium-lp/
├── app/                      # Next.js App Router
│   ├── page.tsx             # メインページ（LIFF統合）
│   ├── lp/                  # 新LP（キャスト向け）
│   ├── old-lp/              # 旧LP（オリジナルデザイン）
│   ├── settings/            # Plus設定画面
│   ├── demo/                # デモコントローラー
│   ├── api/                 # APIエンドポイント
│   └── globals.css          # グローバルスタイル
├── components/              # Reactコンポーネント
│   └── PlusSettings.tsx     # Plus設定コンポーネント
├── lib/                     # ユーティリティ
│   ├── liff.ts             # LIFF関連の処理
│   ├── stripe.ts           # Stripe関連の処理
│   └── supabase.ts         # Supabase関連の処理
├── public/                  # 静的ファイル
│   └── ai-character-transparent.png
└── README.md               # プロジェクト説明
```

## 処理の概要
1. **ユーザーフロー**
   - LINEリッチメニュー → LIFF（決済LP） → Stripe決済 → 完了通知

2. **システム連携**
   - LINE（LIFF） - フロントエンド認証
   - Vercel - 決済LPホスティング
   - Stripe - 決済処理
   - n8n - Webhook処理・自動化
   - Supabase - データ永続化

3. **主要機能**
   - LINEユーザーID取得（LIFF）
   - 決済セッション作成（Stripe）
   - Webhook受信・処理（n8n）
   - ユーザーステータス更新（Supabase）
   - デモページシステム（プラン切り替え・ページナビゲーション）

## 編集履歴と紐付くコミット
- 2025-07-26: 初回コミット (f816181) - AI写メ日記 プラスプラン決済LP
- 2025-07-27: 環境変数名を修正 (84166c8) - SUPABASE_URL → NEXT_PUBLIC_SUPABASE_URL
- 2025-07-27: デモページシステムを実装 (601a0c2) - 複数のLPデザインを自由に切り替え可能に