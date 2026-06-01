# 002 スライドテンプレート整備

## 目的

新しいスライドを毎回ゼロから作らず、同じ構成と品質で追加できるテンプレートを整える。

## 対象範囲

- `src/pages/slides/`
- `src/styles/slide.css`
- `docs/templates/`
- `docs/content-guidelines.md`

## 作業

1. `src/pages/slides/_template/` 相当のテンプレート方針を決める
2. reveal.js の共通設定をコンポーネントまたはユーティリティへ切り出す
3. スライドでよく使うレイアウトを3種類作る
   - タイトル
   - 結論 + 図解
   - 比較
4. `docs/templates/slide-script-template.md` を実運用に必要な粒度まで拡張する
5. `README.md` の「新しいスライドの作り方」をテンプレート前提に更新する

## 完了条件

- 新しいスライドを既存サンプルのコピーに頼らず作れる
- スライド本文と `script.md` の対応関係が明確
- `npm run build` が成功する

## 検証コマンド

```bash
npm run build
```

## 成果物

- スライド作成テンプレート
- 発表用スクリプトテンプレート
- READMEの手順更新

## 次のセッション

[003 図解パターン集の初期実装](003-diagram-patterns.md) に進む。
