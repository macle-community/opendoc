"use strict";

exports.__esModule = true;
exports.textareaProps = exports.inputProps = exports.commonProps = void 0;
const commonProps = exports.commonProps = {
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
const textareaProps = exports.textareaProps = {
  autosize: Boolean
};
const inputProps = exports.inputProps = {
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