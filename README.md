# Adventus Mortis Website

Vite + React で構築された公式サイト。

## 必要環境
- Node.js 18 以上（推奨: 20）
- pnpm 10 以上

## セットアップ
```bash
pnpm install
```

## 開発サーバー
```bash
pnpm dev
```

## ビルド
```bash
pnpm build
```
出力先: `dist/`

## プレビュー
```bash
pnpm preview
```

## 環境変数
Vite の環境変数はすべて `VITE_` プレフィックスが必要です。
`env.example` をコピーして `.env` を作成してください。

```bash
cp env.example .env
```

例:
```env
VITE_APP_NAME="Adventus Mortis"
VITE_API_BASE_URL=""
```

## ライセンス
適宜追加してください。 