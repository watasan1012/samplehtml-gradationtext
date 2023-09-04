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

