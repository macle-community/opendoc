/* eslint-disable */
var utils = require('../sjs/utils.sjs');
var style = require('../sjs/style.sjs');

function tabClass(active, ellipsis) {
  var classes = ['tab-class'];
  if (active) {
    classes.push('tab-active-class');
  }
  if (ellipsis) {
    classes.push('maui-ellipsis');
  }
  return classes.join(' ');
}

function tabStyle(data) {
  var color = data.active ? data.titleActiveColor : data.titleInactiveColor;
  var ellipsis = data.scrollable && data.ellipsis;

  if (data.type === 'card') {
    return style({
      color: color || (!data.disabled && !data.active ? data.color : null),
      'border-color': data.color,
      'background-color': !data.disabled && data.active ? data.color : null,
      'flex-basis': ellipsis ? 88 / data.swipeThreshold + '%' : null
    });
  }
  return style({
    color: color,
    'flex-basis': ellipsis ? 88 / data.swipeThreshold + '%' : null
  });
}

function navStyle(color, type) {
  return style({
    'border-color': type === 'card' && color ? color : null
  });
}

function lineStyle(data) {
  return style({
    opacity: data.inited ? 1 : 0,
    width: utils.addUnit(data.lineWidth),
    transform: 'translateX(' + data.lineOffsetLeft + 'px)',
    height: data.lineHeight !== -1 ? utils.addUnit(data.lineHeight) : null,

    'background-color': data.color,
    '-webkit-transform': 'translateX(' + data.lineOffsetLeft + 'px)',
    'border-radius':
      data.lineHeight !== -1 ? utils.addUnit(data.lineHeight) : null,
    'transition-duration': !data.skipTransition ? data.duration + 's' : null,
    '-webkit-transition-duration': !data.skipTransition
      ? data.duration + 's'
      : null
  });
}

function trackStyle(data) {
  if (!data.animated) {
    return '';
  }
  // 动画样式
  return style({
    left: -100 * data.currentIndex + '%',
    'transition-duration': data.duration + 's',
    '-webkit-transition-duration': data.duration + 's'
  });
}

module.exports = {
  tabClass: tabClass,
  tabStyle: tabStyle,
  navStyle: navStyle,
  lineStyle: lineStyle,
  trackStyle: trackStyle,
  showInfo: function (item) {
    return item.info !== null || item.dot;
  },
  customTabStyle: function (item) {
    return item.active ? item.tabActiveStyle : item.tabStyle;
  },
  key: function (index, _id) {
    return index + '_' + _id;
  }
};
