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

### ローカルリポジトリ内の変更をリモートリポジトリに追加する

```sh
% git push
```

## Node.js プロジェクトの初期設定ファイルの作成

```sh
% npm init -y
```

## 開発・実装

CSSの設計手法に則って実装を行う

## 自動整形する

### Prettierのインストール

```sh
% npm install --save-dev --save-exact prettier
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
% echo .git/ > .prettierignore
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

### JavaScriptの(ESLint)

```sh
% npm install eslint --save-dev
```

### ESLintの設定ファイルを作成する

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

### バージョン確認

```sh
% npx eslint -v
```

v8.48.0

### ESLintフォーマット実行

ESLintを実行するために以下のコマンドを実行します。

```sh
% npx eslint 'assets/**/*.js'
```

- 自動修正は--fixオプションを使う

```sh
% npx eslint 'assets/**/*.js' --fix
```

## ESLint と　Prettierの　ルールを合わせる

```sh
npm install eslint-config-prettier --save-dev
```

- .eslintrc.json ファイル を変更する

```json
{
    "extends": ["standard", "prettier"],
}
```

### Scssの(Stylelint)

## PostCSS をインストールする

PostCSSはCSSコードを解析し、プラグインを使用してそのコードをルールに則って変換します。

```sh
% npm i --save-dev postcss postcss-cli
```

postcss-cli をインストールすることでコマンドラインから利用できます。

空の設定ファイルを作成するpostcss.config.jsを作成します。



```
% npm i -D stylelint postcss stylelint-config-sass-guidelines
```


