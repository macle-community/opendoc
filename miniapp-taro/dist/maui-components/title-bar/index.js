"use strict";

var _utils = require("../common/utils");
var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    titleStyle: String,
    title: String,
    fixed: {
      type: Boolean,
      observer: 'setHeight'
    },
    placeholder: {
      type: Boolean,
      observer: 'setHeight'
    },
    leftText: String,
    rightText: String,
    customStyle: String,
    leftArrow: Boolean,
    leftIcon: {
      type: String,
      value: 'arrowleft'
    },
    leftImage: {
      type: String,
      value: null
    },
    border: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 1
    },
    safeAreaInsetTop: {
      type: Boolean,
      value: true
    },
    useSlot: {
      type: Boolean,
      value: false
    }
  },
  data: {
    height: 44
  },
  methods: {
    onClickLeft() {
      this.triggerEvent('clickLeft');
    },
    onClickRight() {
      this.triggerEvent('clickRight');
    },
    setHeight() {
      if (!this.data.fixed || !this.data.placeholder) {
        return;
      }
      ma.nextTick(() => {
        (0, _utils.getRect)(this, '.maui-nav-bar').then(res => {
          if (res && 'height' in res) {
            this.setData({
              height: res.height
            });
          }
        });
      });
    }
  },
  created() {
    const {
      statusBarHeight
    } = (0, _utils.getSystemInfoSync)();
    this.setData({
      statusBarHeight,
      height: 46 + statusBarHeight
    });
  },
  mounted() {
    this.setHeight();
  }
});