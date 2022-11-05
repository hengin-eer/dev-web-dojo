# Web dojo

nitacwplのWeb道場について

- [Web dojo](#web-dojo)
  - [Web dojoの更新方法](#web-dojoの更新方法)
    - [記事の生成について](#記事の生成について)
    - [記事のアップロード](#記事のアップロード)
    - [更新内容をデプロイ `npm run deploy`](#更新内容をデプロイ-npm-run-deploy)


## Web dojoの更新方法

記事の生成・更新からデプロイまでの手順をここに記す

### 記事の生成について

まずは記事を生成する

```
---
id: x
author: xxx
date: x/xx, 20xx
category: xxx
---

# title~

text text text text 
text text text text..
```

以上のように書く

また記事のデータについては以下のような仕様であるのよく確認すること

- 記事のタイトル： マークダウンファイルの拡張子`.md`を除いたものになる
  - 例： `web研について.md` => web研について
- 記事のslug： 記事のslug(URL)も記事のタイトルと同様である
  - 例： `web研について.md` => `https://example.com/web研について`

### 記事のアップロード

生成した記事を`src/contents/`にマークダウンファイルをアップロードする

ファイル名が被らないように注意する

### 更新内容をデプロイ `npm run deploy`

`json`の更新及びデプロイはひとつのコマンドで完結する

ターミナルに`npm run deploy`と入力する

しばらくしてから確認するとコンテンツの更新が行われているはずである