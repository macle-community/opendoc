/* eslint-disable */
var style = require('../sjs/style.sjs');
var addUnit = require('../sjs/add-unit.sjs');

function rootStyle(data) {
  if (!data.gutter) {
    return '';
  }

  return style({
    'padding-right': addUnit(data.gutter / 2),
    'padding-left': addUnit(data.gutter / 2)
  });
}

module.exports = {
  rootStyle: rootStyle
};
