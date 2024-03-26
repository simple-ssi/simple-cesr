# Testing

## Unit Tests

Unit tests are found under `src`, inline with the respective component under test.

## High-level Tests

Other, more holistic, tests can be found in this directory:

### Standards Test

The standards test confirms agreement of `simple-cesr`'s output with other implementations of CESR. For now, only output from the `Matter` class in [cesr-ts](https://github.com/weboftrust/cesr-ts) (derived from [signify-ts](https://github.com/weboftrust/signify-ts)) from [WebOfTrust](https://github.com/weboftrust) is used as input data.
