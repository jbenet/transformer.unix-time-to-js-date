# transformer.unix-time-to-js-date

[Transformer](http://github.com/jbenet/transformer) conversion: unix-time to js-date

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Javascript

```js
var transformer = require('dat-transformer');
var tUnixTimeToJsDate = transformer('unix-time', 'js-date');
tUnixTimeToJsDate(1399425045); // new Date("2014-05-07T01:10:45.000Z")
```
