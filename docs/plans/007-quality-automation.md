# 007 品質チェック自動化

## 目的

公開前チェックの一部を自動化し、壊れたページや基本的な品質低下に早く気づけるようにする。

## 対象範囲

- `package.json`
- `.github/workflows/deploy.yml`
- `.github/workflows/`
- `docs/review-checklist.md`

## 作業

1. Astro check と build がCIで必ず実行されていることを確認する
2. リンクチェックツールの導入可否を決める
3. 必要であればリンクチェック用の npm script を追加する
4. Markdown lint またはフォーマット方針を決める
5. CI失敗時の対応手順を docs に追記する

## 完了条件

- CIで最低限のビルド品質を確認できる
- リンク切れ検出の方針が決まっている
- 手動チェックと自動チェックの境界が明確
- `npm run build` が成功する

## 検証コマンド

```bash
npm run build
```

## 成果物

- 品質チェック用 npm script
- CI設定の更新
- チェック運用の docs 追記

## 次のセッション

[008 ナレッジサイト拡張](008-knowledge-site-expansion.md) に進む。
