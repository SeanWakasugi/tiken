# 006 GitHub Pages初回公開

## 目的

tiken を GitHub Pages で初回公開し、URLで共有できる状態にする。

## 対象範囲

- `.github/workflows/deploy.yml`
- `astro.config.mjs`
- `README.md`
- GitHub repository settings

## 作業

1. GitHub上に `tiken` リポジトリを作成する
2. `main` ブランチを作成またはリネームする
3. `astro.config.mjs` の `site` を実際の GitHub Pages URL に更新する
4. GitHub Pages の Source を GitHub Actions に設定する
5. `npm run build` をローカルで確認する
6. `main` に push する
7. Actions の成功を確認する
8. 公開URLでトップページとサンプルスライドを確認する
9. READMEに公開URLを追記する

## 完了条件

- GitHub Actions の deploy が成功する
- 公開URLで `/tiken/` が表示できる
- `/tiken/slides/ai-slide-workflow/` が表示できる
- READMEに公開URLが記載されている

## 検証コマンド

```bash
npm run build
git status --short
```

## 成果物

- 初回公開済みの GitHub Pages
- READMEの公開URL更新

## 次のセッション

[007 品質チェック自動化](007-quality-automation.md) に進む。
