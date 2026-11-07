define("maui-components/common/validator.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

exports.__esModule = true;
exports.isVideoUrl = exports.isPromise = exports.isPlainObject = exports.isObj = exports.isNumber = exports.isImageUrl = exports.isFunction = exports.isDef = exports.isBoolean = void 0;
const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;
const isDef = value => {
  return value !== undefined && value !== null;
};
exports.isDef = isDef;
const isObj = x => {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
};
exports.isObj = isObj;
const isNumber = value => {
  return /^\d+(\.\d+)?$/.test(value);
};
exports.isNumber = isNumber;
const isPromise = val => {
  return isPlainObject(val) && isFunction(val.then) && isFunction(val.catch);
};
exports.isPromise = isPromise;
const isBoolean = value => {
  return typeof value === 'boolean';
};
exports.isBoolean = isBoolean;
const isVideoUrl = url => {
  return VIDEO_REGEXP.test(url);
};
exports.isVideoUrl = isVideoUrl;
const isFunction = val => {
  return typeof val === 'function';
};
exports.isFunction = isFunction;
const isImageUrl = url => {
  return IMAGE_REGEXP.test(url);
};
exports.isImageUrl = isImageUrl;
const isPlainObject = val => {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
};
exports.isPlainObject = isPlainObject;
}));