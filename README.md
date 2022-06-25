# Date Util
Date handler to parse string and date in ISO and BR format

## installation
```SH
yarn add @lucasliet/date-util
```

## usage

```TS
import * as DateUtil from '@lucasliet/date-util';

const dateBR: string = DateUtil.toBRFormat(new Date());       //returns string in dd/MM/yyyy format

const dateISO: string = DateUtil.toISOFormat(dateBR);         //returns string in yyyy-MM-yyyy format

const isInBRFormat: boolean = DateUtil.isInBRFormat(dateBR);  //check if string pattern matches dd/MM/yyyy format

const date: Date = DateUtil.parseDate(dateBR);                //returns a date Object from dd/MM/yyyy or yyyy-MM-dd string format
```


> ℹ for JavaScript <= es5 use require
```JS
var DateUtil = require('@lucasliet/date-util');
var date = DateUtil.parseDate('2001-03-21');
```