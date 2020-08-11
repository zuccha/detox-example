# Detox example repository

This repository is needed as an example for showing how tests fail on hidden
(zero width, zero height) `TextInput` components on iOS with Detox 17.3.5.

## Build

To build
```
yarn install
cd ios
pod install
cd ..
detox build
```

## Run tests

To run tests
```
detox test
```

The test is supposed to fail with error
```
Test Failed: View “<RCTUITextField: 0x7ff17d800e00>” is not hittable at point “{"x":0,"y":0}”; View safe area bounds are empty
```