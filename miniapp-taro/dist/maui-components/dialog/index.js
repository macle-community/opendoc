"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    show: {
      type: Boolean,
      observer(show) {
        !show && this.stopLoading();
      }
    },
    title: String,
    titleStyle: String,
    message: String,
    messageStyle: String,
    theme: {
      type: String,
      value: 'default'
    },
    customStyle: String,
    messageAlign: String,
    overlayStyle: String,
    useSlot: Boolean,
    showCancelButton: Boolean,
    closeOnClickOverlay: Boolean,
    width: null,
    zIndex: {
      type: Number,
      value: 2000
    },
    confirmButtonText: {
      type: String,
      value: '确认'
    },
    cancelButtonText: {
      type: String,
      value: '取消'
    },
    confirmButtonColor: {
      type: String,
      value: 'red'
    },
    cancelButtonColor: {
      type: String,
      value: 'gray'
    },
    showConfirmButton: {
      type: Boolean,
      value: true
    },
    overlay: {
      type: Boolean,
      value: true
    }
  },
  data: {
    loading: {
      confirm: false,
      cancel: false
    }
  },
  methods: {
    confirm() {
      this.handleAction('confirm');
    },
    cancel() {
      this.handleAction('cancel');
    },
    clickOverlay() {
      this.close('overlay');
    },
    close(action) {
      this.setData({
        show: false
      });
      this.triggerEvent('close', action);
    },
    stopLoading() {
      this.setData({
        loading: {
          confirm: false,
          cancel: false
        }
      });
    },
    handleAction(action) {
      this.triggerEvent(action, {
        dialog: this
      });
      this.close(action);
    }
  }
});