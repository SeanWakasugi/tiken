# 001 初期セットアップ確認

## 目的

現在のリポジトリが、tiken の最小構成としてローカルで動き、GitHub Pages公開に進める状態か確認する。

## 対象範囲

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `.github/workflows/deploy.yml`
- `src/pages/index.astro`
- `src/pages/slides/`
- `docs/`

## 作業

1. `npm install` を実行する
2. `npm run build` を実行する
3. `npm run dev` を起動し、以下をブラウザで確認する
   - `/tiken/`
   - `/tiken/slides/`
   - `/tiken/slides/ai-slide-workflow/`
   - `/tiken/slides/ai-slide-workflow/script/`
   - `/tiken/docs/`
   - `/tiken/patterns/`
4. GitHubリポジトリの実URLが決まっていれば `astro.config.mjs` の `site` を更新する
5. `README.md` のローカル実行手順が実態と合っているか確認する

## 完了条件

- `npm run build` が成功する
- 主要ページをローカルで表示できる
- `docs/` に仕様、ガイド、公開手順、計画が揃っている
- `tiken` 以外の旧プロジェクト名が設定や説明に残っていない

## 検証コマンド

```bash
npm install
npm run build
npm run dev
```

## 次のセッション

[002 スライドテンプレート整備](002-slide-template.md) に進む。
