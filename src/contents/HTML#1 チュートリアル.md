---
id: 1.1
author: hengineer
date: 9/27, 2022
category: html
---


# HTMLの世界へようこそ！

こんにちは。 今回執筆を主に担当させていただきます、[へんじにあ@tim_daik](https://twitter.com/tim_daik)です

**Webサイトを作成する中で最も基本的かつ必要なスキルが`HTML`です**

つまりこのコースで皆さんにはHTMLを習得してもらいます

これからHTMLの学習をしていってもらうのですが、プログラミングを触ったことが無かったり、HTMLに触れたことがない人も多いかと思いますので、まずはHTMLについて学んでいきましょう

# そもそもHTMLとは？

## 概要

`HTML`とは「HyperText Markup Language」の略称で、マークアップ言語のひとつです

HTMLでは文章を`<p>`のような「タグ」と「タグ」で囲い記述していきます

>マークアップ言語とは、視覚表現や文章構造を記述するための形式言語です
>
>つまりHTMLは正式にはプログラミング言語に該当しないということになります


## HTMLの歴史

HTMLは「ティム・バーナーズ＝リー」という人物が1989年にコード化したツール群でした

>ティム・バーナーズ＝リーは世界初のブラウザ「WorldWideWeb」を1991年に発表した人物でもあります
>
>他にも彼は、俗にいうインターネットである`WWW（World Wide Web）`を考案し、実装・開発をしました

もともとは彼が情報や進行中の研究を彼の同僚らと共有するために開発しました

初期バージョンでは文法規則が緩かったためHTMLはウェブ技術になじみのない層に受け入れられやすく、HTMLが広まっていく要因となりました

その後公式な仕様が発表されるようになりIETF、W3Cを経て、Apple・Mozilla・Operaの開発者たちによって結成された組織「WHATWG」「HTML Living Standard」を提唱し、これが2022年11月現在のHTMLの標準規格となっています

# HTMLの記法

## タグとは？

HTMLの記法を理解する上で「**タグ**」というものがあります

タグとは`<p>`のような山括弧に囲われた特殊な文字列で、文章をタグで囲むことによって要素として扱うことが出来ます

### 記述例


<iframe height="300" style="width: 100%;" scrolling="no" title="dojo-html-1-1" src="https://codepen.io/hengineer/embed/PoaeXZo?default-tab=html%2Cresult" frameborder="no" loading="lazy">
  See the Pen <a href="https://codepen.io/hengineer/pen/PoaeXZo">
  dojo-html-1-1</a> by hengineer (<a href="https://codepen.io/hengineer">@hengineer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ひな型

先ほどのようにHTMLを記述していくためには雛形の中に書き込んでいく必要があります

雛形を下に記します

### 記述例


```html:template.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    <!-- ここに記述していく -->
</body>
</html>
```

それぞれのタグについて軽く解説していきます

- `<!DOCTYPE html>`: ドキュメントの種類が`HTML`だと宣言しています
- `<html lang="en">`: HTMLを記入していくには`<html></html>`で囲う必要があります 属性の`lang`には言語を入れますので日本語であれば`ja`を記入します
- `<head>`: このタグの中に`<meta />`を入れていきます それぞれページのタイトルや説明、読み込むcssファイルなどの情報を書いていきます
- `<body>`: コメントにあるとおりこの中に記述されているタグが画面に表示されていく部分になります

ご覧の通り少しコードの量がありますので初心者の方にはこれだけでも苦痛になるかと思います

そこで`VScode`を利用している方は言語モードを`html`に選択後、`!`を入力するだけで補完機能から入力できるかと思います

## コメントアウト

コードを記述していく際に**ちょっとしたメモ・注意点を残したり**、**一部のコードを無効化したいけどコードを消したくない**といったことがしばしばあります

そんな期待に応えてくれる「**コメントアウト**」がほとんどの言語に備わっています

ただ、言語によってコメントアウトの記述の仕方は若干違いますので、混同しないように注意しましょう

HTMLでは`<!--  -->`でコードを囲うことでコメントアウトすることが出来ます

```html:html
<h1>Title</h1>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
<!-- <p>The quick, brown fox jumps over a lazy dog. DJs</p> -->

<!-- この中がコメントアウトされるコード -->
```

これでコードは無効化することが出来ています

しかしHTMLの場合いちいちコードのコメントアウトを記述するのは疲れます

そこで`VScode`を使用している方は任意のコード上にカーソルがフォーカスされていることを確認し、`Ctrl + /`を入力するだけでコメントアウト及びコメントアウトの解除を行うことが出来ます

🚧building...