# Testing

## Unit Tests

Unit tests are found inline under `src` next to the component under test.

## High-level Tests

Other, more holistic, tests can be found in this directory:

### Standards

The standards test confirms agreement of `simple-cesr`'s output with other implementations of CESR. For now it checks against the output from `Matter` in [cesr-ts](https://github.com/weboftrust/cesr-ts) (derived from [signify-ts](https://github.com/weboftrust/signify-ts)) from [WebOfTrust](https://github.com/weboftrust).
