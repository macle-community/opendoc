var style = require('../sjs/style.sjs');
var addUnit = require('../sjs/add-unit.sjs');

function titleStyle(data) {
  return style([
    {
      'max-width': addUnit(data.titleWidth),
      'min-width': addUnit(data.titleWidth)
    },
    data.titleStyle
  ]);
}

module.exports = {
  titleStyle: titleStyle
};
