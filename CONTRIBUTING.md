## Contributing

This guide will help you gettting started with contributing to logR

## Table of Contents
- [Contributing](#contributing)
- [Table of Contents](#table-of-contents)
- [Environment Setup](#environment-setup)
  - [Buch](#buch)
  - [Lehrer](#lehrer)
- [Submiting a PR](#submiting-a-pr)
- [Commit message guidelines](#commit-message-guidelines)

## Environment Setup

To get started, fork the repo on github and clone it

logR is split into multiple [pnpm](https://pnpm.io) projects:

| Path    | Project            |
| ------- | ------------------ |
| /buch   | React Frontend     |
| /lehrer | Typescript Backend |

Before working on either buch or lehrer, run `pnpm i` in the root directory to install husky and initialize git hooks

### Buch

1. Run `pnpm i` to install all dependencies
2. For a auto-refreshing dev server, run `pnpm dev` or `vite`
3. For building for production, run `pnpm build`

### Lehrer

1. Run `pnpm i` to install all dependencies
2. Run `pnpm start` to compile and run

## Submiting a PR

Before you submit your Pull Request, make sure you:

- search [the PRs](https://github.com/ixhbinphoenix/logR/pulls) for an open PR that tries to achieve the same thing
- commit your changes to a new git branch:
  ```shell
  git checkout -b feature
  ```
- write your code following the code style and folder structure
- (if applicable) write unit tests for your changes
- follow the [commit message guidelines](#commit-message-guidelines)
- sign your commits. Not required, but nice

## Commit message guidelines

Commits should be formatted like this:

```txt
$type($project): $description [$ci]
```

- $type
  - feat - New Feature
  - fix - Bug fix
  - refactor - Refactoring that does no functional changes
  - docs - Changes to documentation
  - maint - Maintenance like CI, tests and scripts
- $project
  - buch
  - lehrer
  - root
- $description - Short description of the changes  
- $ci *optional* - Write [skip ci] in your commit to disable all CI checks. Only for $type docs


