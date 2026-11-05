/* eslint-disable */
var style = require('../sjs/style.sjs');
var addUnit = require('../sjs/add-unit.sjs');
var BLUE = '#1989fa';
var GRAY_DARK = '#969799';

function rootStyle(styleData) {
  var currentColor;

  if (styleData.checked === styleData.activeValue) {
    currentColor = styleData.activeColor;
  } else {
    currentColor = styleData.inactiveColor;
  }

  return style({
    'font-size': addUnit(styleData.size),
    'background-color': currentColor
  });
}

function loadingColor(data) {
  data = data || {};
  var checked = data.checked;
  var activeValue = data.activeValue;
  var activeColor = data.activeColor;
  var inactiveColor = data.inactiveColor;

  checked = checked === undefined ? false : checked;
  activeValue = activeValue === undefined ? false : activeValue;
  activeColor = activeColor !== undefined ? activeColor : BLUE;
  inactiveColor = inactiveColor !== undefined ? inactiveColor : GRAY_DARK;

  return checked === activeValue ? activeColor : inactiveColor;
}

module.exports = {
  rootStyle: rootStyle,
  loadingColor: loadingColor,
};
