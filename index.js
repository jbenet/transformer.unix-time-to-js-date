var transformer = require('dat-transformer');
var tUnixTime = transformer('unix-time');
var tJsDate = transformer('js-date');
// require any other modules you may need here.

module.exports = transformer.Conversion(tUnixTime, tJsDate, convert);

function convert(unixTime) {
  return new Date(unixTime * 1000.0); // Date uses ms, not s.
}
