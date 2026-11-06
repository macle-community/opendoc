/* eslint-disable */

function rootStyle(data) {
  var duration = data.duration ? data.duration : 300;
  var s = 'transition-duration: ' + duration + 'ms;';
  s = data.zIndex ? s + 'z-index:' + data.zIndex + ';' : s;
  s = data.customStyle ? s + data.customStyle + ';' : s;
  s = data.display ? s : s + 'display: none';
  return s;
}

module.exports = {
  rootStyle: rootStyle
};
