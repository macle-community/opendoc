"use strict";

exports.__esModule = true;
exports.default = void 0;
let queue = [];
const defaultOptions = {
  show: false,
  title: '',
  titleStyle: '',
  width: null,
  theme: 'default',
  message: '',
  messageStyle: '',
  zIndex: 100,
  overlay: true,
  selector: '#maui-dialog',
  className: '',
  transition: 'scale',
  customStyle: '',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
};
let currentOptions = {
  ...defaultOptions
};
function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}
const Dialog = options => {
  const newOptions = {
    ...currentOptions,
    ...options
  };
  return new Promise((resolve, reject) => {
    const context = (typeof newOptions.context === 'function' ? newOptions.context() : newOptions.context) || getContext();
    const dialog = context.selectComponent(newOptions.selector);
    delete newOptions.context;
    delete newOptions.selector;
    if (dialog) {
      dialog.setData({
        callback: (action, instance) => {
          action === 'confirm' ? resolve(instance) : reject(instance);
        },
        ...newOptions
      });
      ma.nextTick(() => {
        dialog.setData({
          show: true
        });
      });
      queue.push(dialog);
    }
  });
};
Dialog.alert = options => Dialog(options);
Dialog.confirm = options => Dialog({
  showCancelButton: true,
  ...options
});
Dialog.close = () => {
  queue.forEach(dialog => {
    dialog.close();
  });
  queue = [];
};
Dialog.stopLoading = () => {
  queue.forEach(dialog => {
    dialog.stopLoading();
  });
};
Dialog.currentOptions = currentOptions;
Dialog.defaultOptions = defaultOptions;
Dialog.setDefaultOptions = options => {
  currentOptions = {
    ...currentOptions,
    ...options
  };
  Dialog.currentOptions = currentOptions;
};
Dialog.resetDefaultOptions = () => {
  currentOptions = {
    ...defaultOptions
  };
  Dialog.currentOptions = currentOptions;
};
Dialog.resetDefaultOptions();
var _default = exports.default = Dialog;