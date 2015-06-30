# timezone-country-region

[![version](https://img.shields.io/npm/v/timezone-country-region.svg) ![download](https://img.shields.io/npm/dm/timezone-country-region.svg)](https://www.npmjs.com/package/timezone-country-region)

lookup timezone by country, region.

## Usage

```javascript
var tz = require('timezone-country-region');

var timezone = tz.lookup('KR', '11');
console.log(timezone);
// Asia/Seoul
```


## Reference

* Timezones: [http://www.maxmind.com/timezone.txt](http://www.maxmind.com/timezone.txt)
* Region codes [http://www.maxmind.com/app/iso3166_2](http://www.maxmind.com/app/iso3166_2)

## LICENSE

timezone-country-region is licensed under the MIT license.