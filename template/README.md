# {{ name }}

> {{ description }}

## Build Setup

```bash
# 依存関係のインストール
yarn

# ビルド
yarn build

# ビルド（変更監視付き）
yarn dev
{{#test}}

# テスト
yarn test

# テストカバレッジを開く (only Windows)
yarn repo
{{/test}}
{{#doc}}

# ドキュメント生成
yarn doc
{{/doc}}
```
