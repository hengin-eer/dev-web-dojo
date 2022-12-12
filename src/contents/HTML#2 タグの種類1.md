---
id: 1.2
author: hengineer
date: 11/28, 2022
category: html
---


# タグの種類について学ぼう Part1

`HTML`にはウェブページを構成するための多大な種類のタグが存在します

そしてHTMLが持つタグの種類は**2022年11月現在、108種類**となっています

しかし実際にすべてのタグを使用する。なんてことはありません

そこでこれからn回のパートに分けてHTMLのタグについて説明していこうと思います

少し覚えるのに苦労するかもしれませんが、徐々に慣れてくるはずです！

今回は「**web制作に欠かせないタグを学ぼう前編**」です！

# 【前編】web制作に欠かせないタグを学ぼう

ここからweb制作において必須レベルのタグをn個紹介していきます

**実際にどのような場面で使うか**、**どのようなルールがあるのか**などに注目して学習していきましょう

## h1~h6タグ: 見出し

**hタグは見出しを表すタグ**で、1～6段階まで強さがあり数字が大きいほど**見出しの重要度**、**デフォルトのフォントサイズ**が大きい

hは「heading（見出し）」の略と覚える

<iframe height="300" style="width: 100%;" scrolling="no" title="dojo-html-1-2" src="https://codepen.io/hengineer/embed/ExRRzEB?default-tab=html%2Cresult" frameborder="no" loading="lazy">
  See the Pen <a href="https://codepen.io/hengineer/pen/ExRRzEB">
  dojo-html-1-2</a> by hengineer (<a href="https://codepen.io/hengineer">@hengineer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> 注意してほしい点は、**hタグでフォントのレイアウトをしないようにする**ことである
> 
> フォントのレイアウト等はHTMLのデフォルトのスタイルに依存せず、必ずCSSによって定義するように心がける

## pタグ: 段落

**pタグは段落を表すタグ**で、主に文章に使われます

恐らく文章を沢山書かれる方はこのタグを使用する頻度が多いかと思われます

実はタグで括らずに直接文章をHTML内に記述しても表示はされますが、タグで括らないと意味をもつ要素にはならないので必ずタグで囲うようにします

pは「paragraph（パラグラフ）」の略と覚える

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/hengineer/embed/QWxxRYB?default-tab=html%2Cresult" frameborder="no" loading="lazy">
  See the Pen <a href="https://codepen.io/hengineer/pen/QWxxRYB">
  Untitled</a> by hengineer (<a href="https://codepen.io/hengineer">@hengineer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## aタグ: リンク

**aタグはリンクを表すタグ**で、リンクを埋め込む際に使われます

このタグでは今までと少し違い、特有の「**属性**」を持っています

**`href`属性にリンク先のurl等を追加する**ことで指定したリンクに飛ぶことが出来ます

```html:html
<a href="リンク先のURL" target="_blank" rel="noreferrer">画面に表示される文章</a>
```

`target`に`_blank`を指定することで別タブでリンクを開けるようになりますが、`_blank`にはセキュリティ、パフォーマンスの2点に問題があるので`rel="noreferrer"`でリンク先でリンク元を参照できないようにして対策をしています

aは「anchor（アンカー）」の略と覚える

> 注意書きですが、どのタグにも「属性」は存在します
>
> 例の1つが`class`属性です
> 
> `class`はCSSでスタイル定義の対象を判断する際などに使われ、特定のclassに属している要素として扱うことが可能になります

<iframe height="300" style="width: 100%;" scrolling="no" title="dojo-html-1-2-3" src="https://codepen.io/hengineer/embed/YzvvoKZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hengineer/pen/YzvvoKZ">
  dojo-html-1-2-3</a> by hengineer (<a href="https://codepen.io/hengineer">@hengineer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ul/ol, liタグ: リスト

**ul,olタグはリストを、liタグはそれらのアイテムを表すタグ**で、それぞれリストを表示したい際に使われますが、２つには当然違いがあります

### ul

ulは「unordered list（順序不同リスト）」の略で、その名の通り順序のないリストを表示したい際に使われます

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/hengineer/embed/ExRpKqx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hengineer/pen/ExRpKqx">
  Untitled</a> by hengineer (<a href="https://codepen.io/hengineer">@hengineer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### ol

olは「ordered list（順序リスト）」の略で、その名の通り順序通りのリストを表示したい際に使われます

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/hengineer/embed/QWxVKYN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hengineer/pen/QWxVKYN">
  Untitled</a> by hengineer (<a href="https://codepen.io/hengineer">@hengineer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

それぞれul, olの違いはありますが、両方ともliタグはそれぞれのタグの中に入れ子で記述します

```html:html
<ul>
  <!-- ul, olのタグに入れ子で記述 -->
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```