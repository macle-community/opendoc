/* eslint-disable */
var style = require('../sjs/style.sjs');
var addUnit = require('../sjs/add-unit.sjs');

function barStyle(barHeight, activeColor) {
  return style({
    height: addUnit(barHeight),
    background: activeColor,
  });
}

module.exports = {
  barStyle: barStyle,
};
