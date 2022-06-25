# Feature Flag Util
Utilities functions to deal with feature flags.

## installation
```SH
yarn add feature-flag-util
```

## usage

```TS
import * as FeatureFlag from 'feature-flag-util';

const whitelistedCompanies = ['012345678910234', '432019876543210'];

FeatureFlag.isCompanyListed(whitelistedCompanies, '012345678910234'); // returns true

FeatureFlag.isCompanyListed(whitelistedCompanies, '654321043201987'); // returns false

FeatureFlag.isCompanyListedAsNumber(whitelistedCompanies, 12345678910234); // returns true

FeatureFlag.isRandomInPercentage(50); // returns true if random number generated is less than 50 otherwise, false
```

> ℹ for JavaScript <= es5 use require
```JS
var FeatureFlag = require('feature-flag-util');
var result = FeatureFlag.isRandomInPercentage(50);
```