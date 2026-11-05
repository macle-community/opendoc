var utils = require('../sjs/utils.sjs');

function bem(name, conf) {
  return utils.bem(name, conf);
}

function overlayStyle(data) {
  var s = '';
  s = data.overlayStyle ? s + data.overlayStyle : s;
  s =
    data.overlay && data.overlay !== 'false'
      ? s
      : s +
        ';background-color: var(--overlay-background-color, rgba(0, 0, 0, 0.0));';
  return s;
}

function popupStyle(data) {
  var s =
    'z-index:' + data.zIndex + ';transition-duration: ' + data.duration + 'ms;';
  s = data.customStyle ? s + data.customStyle + ';' : s;
  s = data.display ? s : s + 'display: none';
  return s;
}

module.exports = {
  popupStyle: popupStyle,
  overlayStyle: overlayStyle,
  bem: bem
};
