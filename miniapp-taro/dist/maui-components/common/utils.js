'use strict';

exports.__esModule = true;
exports.addUnit = addUnit;
exports.autoIncreaseId = void 0;
exports.getAllRect = getAllRect;
exports.getCurrentPage = getCurrentPage;
exports.getRect = getRect;
exports.getSystemInfoSync = getSystemInfoSync;
exports.groupSetData = groupSetData;
exports.nextTick = nextTick;
exports.requestAnimationFrame = requestAnimationFrame;
let systemInfo;
function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = ma.getSystemInfoSync();
  }
  return systemInfo;
}
function requestAnimationFrame(cb) {
  const systemInfoSync = getSystemInfoSync();
  if (systemInfoSync.platform === 'devtools') {
    return setTimeout(() => {
      cb();
    }, 1000 / 30);
  }
  return ma.createSelectorQuery().selectViewport().boundingClientRect().exec(() => {
    cb();
  });
}
function getRect(context, selector) {
  return new Promise(resolve => {
    ma.createSelectorQuery().in(context).select(selector).boundingClientRect().exec((rect = []) => resolve(rect[0]));
  });
}
function addUnit(value) {
  if (value === null) {
    return undefined;
  }
  return /^-?\d+(\.\d+)?$/.test(String(value)) ? `${value}px` : value;
}
function getCurrentPage() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}
const autoIncreaseId = exports.autoIncreaseId = (() => {
  let _id = 0;
  return () => {
    return ++_id;
  };
})();
function getAllRect(context, selector) {
  return new Promise(resolve => {
    ma.createSelectorQuery().in(context).selectAll(selector).boundingClientRect().exec((rect = []) => resolve(rect[0]));
  });
}
function canIUseGroupSetData() {
  false;
}
function groupSetData(context, cb) {
  if (canIUseGroupSetData()) {
    context.groupSetData(cb);
  } else {
    cb();
  }
}
function canIUseNextTick() {
  return true;
}
function nextTick(cb) {
  if (canIUseNextTick()) {
    ma.nextTick(cb);
  } else {
    setTimeout(() => {
      cb();
    }, 1000 / 30);
  }
}