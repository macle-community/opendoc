/* eslint-disable */
var style = require('../sjs/style.sjs');
var addUnit = require('../sjs/add-unit.sjs');

function wrapStyle(data) {
  var stl = {
    transform: data.transform
      ? 'translate3d(0, ' + data.transform + 'px, 0)'
      : '',
    top: data.fixed ? addUnit(data.offsetTop) : '',
    'z-index': data.zIndex
  };
  return style(stl);
}

function containerStyle(data) {
  return style({
    height: data.fixed ? addUnit(data.height) : '',
    'z-index': data.zIndex
  });
}

module.exports = {
  wrapStyle: wrapStyle,
  containerStyle: containerStyle
};
