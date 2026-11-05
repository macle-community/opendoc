"use strict";

exports.__esModule = true;
exports.textareaProps = exports.inputProps = exports.commonProps = void 0;
const commonProps = {
  value: String,
  disabled: Boolean,
  placeholder: String,
  placeholderStyle: String,
  focus: Boolean,
  adjustPosition: Boolean,
  selectionStart: {
    type: Number,
    value: -1
  },
  selectionEnd: {
    type: Number,
    value: -1
  },
  cursor: {
    type: Number,
    value: -1
  },
  maxlength: {
    type: Number,
    value: 140
  }
};
exports.commonProps = commonProps;
const textareaProps = {
  autosize: Boolean
};
exports.textareaProps = textareaProps;
const inputProps = {
  password: Boolean,
  confirmHold: Boolean,
  bindinput: String,
  type: {
    type: String,
    value: 'text'
  },
  confirmType: {
    type: String,
    value: 'done'
  },
  cursorSpacing: {
    type: Number,
    value: 0
  }
};
exports.inputProps = inputProps;