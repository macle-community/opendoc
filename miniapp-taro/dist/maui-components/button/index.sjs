/* eslint-disable */
var PREFIX = 'maui-';

// 当前 SJS 无法支持 Object.keys 需要明确指定对象key
var rootClassOptPropsKeys = [
  'block',
  'round',
  'plain',
  'square',
  'loading',
  'disabled',
  'hairline',
  'unclickable'
];

/**
 * 生成元素上的 class 样式串
 * @param name 元素名
 * @param mustProps 必选的属性, 样式串中带这个属性
 * @param optProps 可选的属性, falsy 值不会在样式串中带入
 * @returns 样式串
 */
function rootClass(name, mustProps, optProps) {
  var nameWithPrefix = PREFIX + name;

  var mustPropsWithDefault = mustProps || [];
  var optPropsWithDefault = optProps || {};
  var classes = [nameWithPrefix];

  for (var i = 0; i < mustPropsWithDefault.length; i++) {
    var prop = mustPropsWithDefault[i];
    classes.push(nameWithPrefix + '--' + prop);
  }

  for (var i = 0; i < rootClassOptPropsKeys.length; i++) {
    var key = rootClassOptPropsKeys[i];
    if (optPropsWithDefault[key]) {
      classes.push(nameWithPrefix + '--' + key);
    }
  }

  return classes.join(' ');
}

function rootStyle(plain, color, customStyle) {
  if (!color) {
    return customStyle;
  }

  var retStyle = '';

  if (plain) {
    retStyle = retStyle + 'color: ' + color + ';';
  } else {
    retStyle = retStyle + 'color: #fff;' + 'background: ' + color + ';';
  }

  if (color.indexOf('gradient') !== -1) {
    retStyle = retStyle + 'border: 0;';
  } else {
    retStyle = retStyle + 'border-color:' + color + ';';
  }

  return customStyle ? retStyle + customStyle : retStyle;
}

function loadingColor(type, color, plain) {
  if (plain) {
    return color || '#c9c9c9';
  }

  if (type === 'default') {
    return '#c9c9c9';
  }

  return '#fff';
}

function loadingStyle(type, color, plain, size) {
  var rColor = loadingColor(type, color, plain);

  if (!(size.indexOf('px') === size.length - 2)) {
    size = size + 'px';
  }
  return 'color: ' + rColor + '; width: ' + size + '; height: ' + size + ';';
}

function isImage(name) {
  return name && name.indexOf('/') !== -1;
}

module.exports = {
  rootClass: rootClass,
  rootStyle: rootStyle,
  loadingStyle: loadingStyle,
  isImage: isImage
};
