var utils = require('../sjs/utils.sjs');
var style = require('../sjs/style.sjs');

var GREYS = '#cacaca';

function pivotText(pivotText, percentage) {
  return pivotText || percentage + '%';
}

function rootStyle(data) {
  return style({
    height: data.strokeWidth ? utils.addUnit(data.strokeWidth) : '',
    background: data.trackColor
  });
}

function portionStyle(data) {
  return style({
    background: data.inactive ? GREYS : data.color,
    width: data.percentage ? data.percentage + '%' : ''
  });
}

function pivotStyle(data) {
  return style({
    color: data.textColor,
    right: data.right + 'px',
    background: data.pivotColor
      ? data.pivotColor
      : data.inactive
      ? GREYS
      : data.color
  });
}

module.exports = {
  pivotText: pivotText,
  rootStyle: rootStyle,
  portionStyle: portionStyle,
  pivotStyle: pivotStyle
};
