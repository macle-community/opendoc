/* eslint-disable */
var style = require('../sjs/style.sjs');
var addUnit = require('../sjs/add-unit.sjs');

function iconStyle(param) {
  var styles = {
    'font-size': addUnit(param.iconSize)
  };

  var isChecked = param.value || (param.inParentArrIdx !== undefined && param.inParentArrIdx >= 0);
  if (
    param.checkedColor &&
    !(param.disabled || param.parentDisabled) &&
    isChecked
  ) {
    styles['border-color'] = param.checkedColor;
    styles['background-color'] = param.checkedColor;
  }

  return style(styles);
}

function iconCustomStyle(param) {
  return style({
    'line-height': addUnit(param.iconSize),
    'font-size': '.8em',
    display: 'block'
  });
}

module.exports = {
  iconStyle: iconStyle,
  iconCustomStyle: iconCustomStyle
};
