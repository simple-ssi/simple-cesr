# Instructions

- This project template uses `ts-node` and targets Node 20
- However, both the`start` and the `test` scripts in `package.json` are overly complicated due a [bug](https://github.com/TypeStrong/ts-node/issues/1997) in `ts-node` related to Node 20. When the bug is resolved, you should be able to revert to `npx ts-node [file or glob]` without any need to invoke the ESM loader directly (it is enabled by `"esm": true` in the `ts-node` section in `tsconfig.json`).
- `no-emit` is set to `true` in `tsconfig.json` so don't expect any outputted javascript files. The `.ts` files are meant to be executed directly with `ts-node`.
