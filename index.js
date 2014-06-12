var Conversion = require('transformer-conversion');
var tUnixTime = require('transformer.unix-time');
var tJsDate = require('transformer.js-date');
// require any other modules you may need here.

module.exports = Conversion(tUnixTime, tJsDate, convert);

function convert(unixTime) {
  return new Date(unixTime * 1000.0); // Date uses ms, not s.
}
