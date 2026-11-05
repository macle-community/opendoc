/* eslint-disable */
var object = require('./object.sjs');
var array = require('./array.sjs');

/*
 *   CamelCase Name Conversion
 */
function caseTransform(word) {
  return word
    .replace(getRegExp('[A-Z]', 'g'), function(i) {
      return '-' + i;
    })
    .toLowerCase();
}

function style(tagStr) {
  if (array.isArray(tagStr)) {
    return tagStr
      .filter(function (item) {
        return item !== null && item !== '' && item !== undefined;
      })
      .map(function (item) {
        return style(item);
      })
      .join(';');
  }

  if (tagStr instanceof Object || tagStr.constructor === 'Object') {
    return object
      .keys(tagStr)
      .filter(function (key) {
        return (
          tagStr[key] !== null &&
          tagStr[key] !== '' &&
          tagStr[key] !== undefined
        );
      })
      .map(function (key) {
        return [caseTransform(key), [tagStr[key]]].join(': ');
      })
      .join(';');
  }
  return tagStr;
}

module.exports = style;
