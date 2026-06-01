# 公開運用

## 公開方針

tiken は GitHub Pages で公開します。`main` ブランチに push または merge された内容を GitHub Actions でビルドし、`dist` を Pages にデプロイします。

## ブランチ運用

- `main`: 公開対象
- `feature/*`: 新規スライド、図解、機能追加
- `fix/*`: 軽微な修正

小さく始めるため、複雑なブランチ戦略は採用しません。

## Pull Requestで確認すること

- 内容が公開可能か
- 誤字脱字がないか
- スライドの構成が自然か
- 画面崩れがないか
- リンクが正しいか
- 発表用スクリプトが用意されているか
- `npm run build` が通っているか

## GitHub Pages設定

GitHubリポジトリ側で以下を設定します。

1. Settings → Pages を開く
2. Source を GitHub Actions にする
3. `main` への push で `.github/workflows/deploy.yml` が実行されることを確認する

## URL設計

スライド:

```text
/slides/<slug>/
```

発表用スクリプト:

```text
/slides/<slug>/script/
```

図解パターン:

```text
/patterns/<pattern-slug>/
```

補足ドキュメント:

```text
/docs/<doc-slug>/
```

## 公開前の必須確認

- リポジトリが公開されても問題ないか
- コンテンツが公開されても問題ないか
- Git履歴に機密情報がないか
- 使用している画像、フォント、データの権利に問題がないか
- URLやリポジトリ名が公開向けとして妥当か
- `astro.config.mjs` の `site` が実際の公開URLに更新されているか

## 初回公開時に残っている設定

現在の `astro.config.mjs` の `site` は仮の `https://example.github.io` です。GitHubリポジトリ作成後、実際の GitHub Pages URL に更新してください。
