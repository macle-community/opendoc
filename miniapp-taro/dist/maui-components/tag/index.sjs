var style = require('../sjs/style.sjs');

function rootStyle(data) {
  return style({
    'background-color': data.plain ? '' : data.color,
    color: data.textColor || data.plain ? data.textColor || data.color : ''
  });
}

function setIconColor(data) {
  return data.textColor || data.plain ? data.color || '#1989fa' : '#fff';
}

module.exports = {
  rootStyle: rootStyle,
  setIconColor: setIconColor
};
