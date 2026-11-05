"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    src: {
      type: String,
      observer() {
        this.setData({
          error: false,
          loading: true
        });
      }
    },
    round: Boolean,
    width: {
      type: String,
      value: '320'
    },
    height: {
      type: String,
      value: '240'
    },
    radius: null,
    mode: {
      type: String,
      value: 'aspectFill'
    },
    showError: {
      type: Boolean,
      value: true
    },
    showLoading: {
      type: Boolean,
      value: true
    }
  },
  data: {
    error: false,
    loading: true,
    viewStyle: ''
  },
  methods: {
    onLoad(event) {
      this.setData({
        loading: false
      });
      this.triggerEvent('load', event.detail);
    },
    onError(event) {
      this.setData({
        loading: false,
        error: true
      });
      this.triggerEvent('error', event.detail);
    },
    onClick(event) {
      this.triggerEvent('click', event.detail);
    }
  }
});