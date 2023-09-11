# samplehtml-gradationtext

## validator

validatorとは、検証（バリデーション）を行うプログラムやツールを指すことが多いです。

今回紹介するバリデータは、htmlや、css言語にバリデーションを行います。

[validator.nu](https://validator.nu/)

## tree

ディレクトリー内のファイルと、ディレクトリーツリー構造を表示するコマンドです。

```sh
% tree -I node_modules
```

-I オプション node_modules ディレクトリを無視して表示することができます。

```result
.
└── README.md

1 directory, 1 file
```

## GitHubで新しいリポジトリを作成する

1. GitHubにログインする。アカウントを持っていない場合は、GitHubのアカウントを作成します。

2. 新しいリポジトリの作成

- [https://github.com/new](https://github.com/new) をブラウザーで表示します。

- Create a new repository 画面が表示されるので

- 「Repository name」 に 任意のリモートリポジトリ名を入れます。

- リポジトリの公開開設定を設定する。
  - リポジトリを公開する場合 「Public」を選択します。
  - リポジトリを非公開にする場合「Private」を選択します。

- 「Initialize this repository with:」 覧にある、「Add a README file」 にチェックを入れます。

- 最後に、「Create repository」 をクリックします。

## リモートリポジトリの内容をローカルにコピーする

1. `https://github.com/ユーザー名/リポジトリ名`より「Code ▼」をクリックして、SSH 下の URL をコピーします。

2. ターミナルを起動して、リモートリポジトリからローカルにコピーします。

```sh
% git clone git@github.com:GitHubアカウント名/リモートリポジトリ名.git
```

## カレントディレクトリの移動

カレントディレクトリ(現在の作業ディレクトリ)を変更するためのコマンドです。

```sh
% cd リポジトリ名
```

## Gitの使い方

### Git追跡対象から外すファイルを指定する

プロジェクトのルートディレクトリに、.gitignore ファイルを作成することでGit追跡対象から外すことができます。

```sh
% echo ".DS_Store" >> .gitignore
```

.DS_Store ファイルは、macOS で使用される隠しファイルで、特定のディレクトリに関するメタデータや設定情報を保持するためのファイルです。

さらに npm install コマンドで作成される node_modules/ ディレクトリを.gitignore ファイルに記載して Git 追跡対象から外します。

```.gitignore
.DS_Store
node_modules/
```

### Gitの作業ディレクトリの状態を表示する

作業ディレクトリの状態を表示するため以下のコマンドを実行する

```sh
% git status
```

### Gitのローカルブランチの情報を表示する

```sh
% git branch -vv
```

### ステージングエリアにファイルを追加する

```sh
% git add .
```

### Gitでコミットを作成する

コミットは、ファイルの変更を登録します

```sh
% git commit -m "start"
```

```result
[master (root-commit) f6d0447] start
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
```

### ローカルリポジトリ内の変更をリモートリポジトリに追加する

```sh
% git push
```

## Node.js プロジェクトの初期設定ファイルの作成

```sh
% npm init -y
```

## 開発・実装

Sassファイルを作成します。

## MindBEMding

[MindBEMding](https://gist.github.com/juno/6182957)

### SMACSSの設計思想で開発する

SMACSSの設計思想に基づいて、Sassファイルを作成します。

Sassファイルを以下の5つのフォルダに分割して整理します。

```tree
assets/scss
├── base
│   └── base.scss
├── layout
│   └── layout.scss
├── module
│   └── module.scss
├── state
│   └── state.scss
└── theme
    └── theme.scss
```

```sh
% mkdir -p assets/scss && cd assets/scss && touch input.scss
```

```sh
% mkdir -p base && cd base && touch normalize.scss
```

```sh
% touch base.scss
```

scss ディレクトリより、各種ディレクトリとファイルを作成する

```sh
% mkdir layout && cd layout && touch layout.scss
```

```sh
% mkdir module && cd module && touch module.scss
```

```sh
% mkdir state && cd state && touch state.scss
```

```sh
% mkdir theme && cd theme && touch theme.scss
```

次に、各フォルダには、以下の役割を持つスタイルを記述します。

- Base

サイト全体のスタイルなど、基本的なスタイルを指定します。
reset.cssや、normalize.cssタイポグラフィ(font系)などのライブラリを使用する。

```css
/* Base styles */
body {}
a {}
```

- Layout

大まかなページのレイアウトに関するスタイルを指定します。ヘッダーやフッター、サイドバーなど、ページの骨格となる要素が含まれます。
レスポンシブデザインのためのグリッドシステムやフレキシブルボックスモデルなどもここで定義されます。

```css
/* Layout styles */
.header {}
.footer {}
```

- Module

BaseやLayoutよりも細かい、全ての再利用可能なコンポーネントやパーツに関するスタイルを指定する。
button,card,form,要素などが該当します。

```css
/* Module styles */
.button {}
.card {}
```

- State

JavaScriptなどの状態によって見た目が変わる場合のスタイルを指定する.
.is-activeや.is-hoveredなどのクラス名を使用して、要素の状態を表現します。

```css
/* State styles */
.button.is-hovered {}
.button.is-active {}
```

- Theme

サイト全体で統一するスタイルに関する設定を指定します。例えば、カラーテーマやフォント設定が該当します。
変数を使用してテーマのカスタマイズを容易にします。

```css
/* Theme styles */
:root {
  --primary-color: #0077cc;
  --secondary-color: #0099ff;
}
```

## flocssの設計思想で開発する

Foundation
サイト全体の背景や、フォントなどのデフォルトのスタイルを定義します。

Layout
ヘッダーやフッター、ナビゲーションやサイドバーなど、各ページで共通するコンテナを定義します。

Object
Objectは全体を通して再利用可能なモジュールを定義します。
Objectはさらに３つの階層に分類されます。

Component
Componentは最も小さなモジュールの単位です。
ボタンやナビゲーションなど。他のプロジェクトでも汎用的に使用できるものを定義します。
プレフィックスをつけます。c-
具体的な内容

Project
Projectはプロジェクト固有の見た目を有するものを定義します。
ユーザープロフィールなどの要素が該当します。

p-

Utility
Utilityは余白や非表示の設定など、細かい調整を定義します。
必要に応じて適用したい要素に付与していきます。
u-

- ファイル構成

sassでstyle.scss でまとめるコードを記載する

```sh
% mkdir -p assets/scss/foundation && cd assets/scss/foundation && touch _reset.scss && touch _base.scss && touch _mixin.scss && cd ..
```

```sh
% mkdir -p object/project && cd object/project && touch p-cookie.scss && cd ../..
```

```sass
/* ==================================================
* Foundation
================================================== */

/* _reset.scss _normalize.scss */
@use "../scss/foundation/_reset";

/* _base.scss */
@use "../scss/foundation/_base";

/* ==================================================
* Layout
================================================== */

/* _header.scss */
@use "layout/_header";

.l-header {}

/* _navscss(ナビゲーション) */

/* _main.scss */
@use "layout/_main";

/* _aside.scss(サイドバー) */
@use "layout/_sidebar";
.l_sidevar.scss

/* _section.scss */

/* _footer.scss */
@use "layout/_footer";


/* ==================================================
* Object
================================================== */
/* --------------------------------------------------
* Component
-------------------------------------------------- */

/* _button.scss */
@use "object/component/_button";
.c-button {}

/* _link.scss */

.c-link {}

/* _flexbox.scss */

.c-flexbox {}

/* _grid.scss */
@use "object/component/_grid";

/* _media.scss */
@use "object/component/_media";

/* _title.scss */
@use "object/component/_title";

/* _daialog.scss */

/* --------------------------------------------------
* Project
-------------------------------------------------- */

/* _article.scss */
@use "object/project/_articles";

/* _comments.scss */
@use "object/project/_comments";

/* _gallery.scss */
@use "object/project/_gallery";

/* _profile.scss */
@use "object/project/_profile";

/* _contact.scss */
/* _gnavi.scss */
/* _hamburger.scss */
/* _profile.scss */
/* _section.scss */
@use "object/project/_section";



/* --------------------------------------------------
* Utility
-------------------------------------------------- */
/* _clearfix.scss */
@use "object/utility/_clearfix";
.u-clearfix {}
/* _align.scss */
@use "object/utility/_align";

/* _margin.scss */
@use "object/utility/_margin";
/* _position.scss */
/* _typography.scss */
@use "object/utility/_typography";

/* _size.scss */
/* _text.scss */



/* --------------------------------------------------
* javascript
-------------------------------------------------- */

/* hamburger.scss */

.js-hamburger__active {}


```

## Vite をインストール



## PostCSS



```
% npm i -D vite postcss postcss-preset-env
```

## 自動整形する

### Prettierのインストール

```sh
% npm install --save-dev prettier
```

### 空の設定ファイルを作成する

```sh
% echo {} > .prettierrc.json
```

.prettierrc.json 設定ファイルを修正します

```.prettierrc.json
{
    "tabWidth": 2,
    "singleQuote": true,
    "trailingComma": "none",
    "semi": true
}
```

### 自動フォーマットの対象から除外するファイルを指定する

```sh
% echo '.git/' > .prettierignore
```

さらにpackage-lock.jsonを追加する

```text
node_modules/
package.json
package-lock.json
```

### htmlファイルを整形する

```sh
% npx prettier '**/*.html' --write
```

### scssファイルを整形する

```sh
% npx prettier 'assets/**/*.scss' --write
```

### cssファイルを整形する

```sh
% npx prettier 'assets/**/*.css' --write
```

### JavaScriptファイルを整形する

```sh
% npx prettier 'assets/**/*.js' --write
```

## 静的解析

コードの品質を向上させるため静的解析をします。JavaScriptだとESLint。CSSだとStylelintなどがあります。

### JavaScriptの(ESLint)

```sh
% npm install eslint --save-dev
```

### ESLintの設定ファイルを作成する

ESLintのルールを定義するためESLintの設定ファイルを作成する

```sh
% npx eslint --init
```

ESlintをどのように使いますか？

```result
? How would you like to use ESLint? … 
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style
```

- To check syntax only 構文のみをチェックする
- To check syntax and find problems 構文と問題をチェックする
❯ To check syntax, find problems, and enforce code style 構文と問題をチェックしさらにコードスタイルを強制する

どのようなモジュールを使用していますか？

```result
? What type of modules does your project use? … 
  JavaScript modules (import/export)
  CommonJS (require/exports)
❯ None of these
```

質問されるのでimportやrequireを使用しないなら「None of these」を選択

プロジェクトはどのフレームワークを使っていますか？...

```result
? Which framework does your project use? …
  React
  Vue.js
❯ None of these
```

プロジェクトではTypeScriptを使用していますか？

```result
? Does your project use TypeScript? › No / Yes
```

コードはどこで実行されますか？

```result
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
  Node
```

コードの実行場所をフロントエンドなのかサーバーサイドなのかの問いです。

プロジェクトのスタイル？

```result
? How would you like to define a style for your project? … 
❯ Use a popular style guide
  Answer questions about your style
```

一般的なスタイルガイドを使用する
問いに答えてスタイルガイドを指定していく

ルールを変える場合は、`.eslintrc`ファイルにESLintルールを定義

```result
? Which style guide do you want to follow? … 
  Airbnb: https://github.com/airbnb/javascript
❯ Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo
```

設定ファイルをどのフォーマットにしますか？

```result
? What format do you want your config file to be in? … 
  JavaScript
  YAML
❯ JSON
```

npmで今すぐインストールしますか？

```result
? Would you like to install them now? › No / Yes
```

どこのパッケージ・マネージャーを使いたい？

```result
? Which package manager do you want to use? … 
❯ npm
  yarn
  pnpm
```

### ESLintのバージョン確認

ESLintのバージョンを確認することで、ESLintがインストールできたことを確認します。
出力結果は、ESLintのバージョンのみです。

```sh
% npx eslint -v
```

v8.48.0

### ESLint と Prettier のルールを合わせる

```sh
% npm install eslint-config-prettier --save-dev
```

- .eslintrc.json ファイル を変更する

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["standard", "prettier"],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
```

### ESLintフォーマット実行

ESLintを実行するために以下のコマンドを実行します。

```sh
% npx eslint 'assets/**/*.js'
```

- 自動修正は--fixオプションを使う

```sh
% npx eslint 'assets/**/*.js' --fix
```

### Scssの(Stylelint)

### Stylelintのインストールする

scss と CSSをチェックするために以下のパッケージをインストールする

```sh
% npm install --save-dev stylelint stylelint-config-standard stylelint-config-standard-scss
```

Stylelintの設定ファイル(.stylelintrc.json)を作成する

```sh
% echo '{ "extends": "stylelint-config-standard-scss" }' > .stylelintrc.json
```

echoコマンドで、文字列をファイルに出力する場合は、 > で出力するファイル名を指定する。

### CSSのセレクタの順番を順番に並べる

```sh
% npm install --save-dev stylelint-config-recess-order
```

- 次に、.stylelintrc.json に"stylelint-config-recess-order"を追加します。

```json
{
"extends": [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order"
    ]
}
```

### Stylelintを実行します

- css

```sh
% npx stylelint "assets/**/*.css"
```

自動修正

```sh
% npx stylelint "**/*.css" --fix
```

- sass

```sh
% npx stylelint "**/*.scss"
```

自動修正

```sh
% npx stylelint "**/*.scss" --fix
```

## プリプロセッサ

SassやLESSなどのプリプロセッサでPureなCSSに変換する。

### DartSass

```sh
% npm install --save-dev sass
```
