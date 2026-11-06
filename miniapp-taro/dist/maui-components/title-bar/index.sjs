/* eslint-disable */
var style = require('../sjs/style.sjs');

function barStyle(data) {
  return style({
    'z-index': data.zIndex,
    'padding-top': data.safeAreaInsetTop ? data.statusBarHeight + 'px' : 0
  });
}

module.exports = {
  barStyle: barStyle
};
