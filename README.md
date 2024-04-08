# Template for NPM packages

## Derived from multiple examples. [This](https://snyk.io/blog/best-practices-create-modern-npm-package/) one and [this](https://evertpot.com/universal-commonjs-esm-typescript-packages/) one in particular...

## Instructions

Initialize the repo (a starting `.gitignore` is provided):

```bash
git init
```

Install the dependencies:

```bash
npm install
```

In VS Code consider enabling the following extensions in the workspace:

- markdownlint
- StandardJS

To run tests:

```bash
npm test
```

To run formatter (`ts-standard`):

```bash
npm run formatter
```

To build:

```bash
npm run build
```

To validate proper behavior as an npm package, crete a separate project and link to this project as follows:

```bash
npx link [path/to/rootdir/of/this/project]
```
