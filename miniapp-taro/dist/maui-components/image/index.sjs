/* eslint-disable */
var style = require('../sjs/style.sjs');
var addUnit = require('../sjs/add-unit.sjs');

function rootStyle(data) {
  return style([
    {
      width: addUnit(data.width),
      height: addUnit(data.height),
      'border-radius': addUnit(data.radius)
    },
    data.radius ? 'overflow: hidden' : null
  ]);
}

module.exports = {
  rootStyle: rootStyle
};
