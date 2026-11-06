"use strict";

var _component = require("../common/component");
var _transition = _interopRequireDefault(require("../mixins/transition"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const i18n = getI18nInstance();
(0, _component.MaComponent)({
  behaviors: [_transition.default],
  properties: {
    closeable: Boolean,
    overlayStyle: String,
    customStyle: String,
    round: Boolean,
    transition: {
      type: String,
      observer: 'observeClass'
    },
    zIndex: {
      type: Number,
      value: 100
    },
    overlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center',
      observer: 'observeClass'
    },
    closeIcon: {
      type: String,
      value: 'cancel'
    },
    closeIconPosition: {
      type: String,
      value: 'top-right'
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    },
    safeAreaInsetTop: {
      type: Boolean,
      value: false
    },
    lockScroll: {
      type: Boolean,
      value: true
    },
    trigger: {
      type: Boolean,
      value: true
    }
  },
  created: function created() {
    const rtlLanguages = new Set(["ar", "ug", "ku", "fa", "ur", "he"]);
    if (rtlLanguages.has(i18n.getLocale())) {
      this.setData({
        closeIconPosition: 'top-left'
      });
    }
    this.observeClass();
  },
  methods: {
    onClickCloseIcon: function onClickCloseIcon() {
      this.triggerEvent('close', '', {
        bubbles: false
      });
    },
    onClickOverlay: function onClickOverlay() {
      this.triggerEvent('clickOverlay', '', {
        bubbles: true
      });
      if (this.data.closeOnClickOverlay) {
        this.triggerEvent('close', '', {
          bubbles: false
        });
      }
    },
    observeClass: function observeClass() {
      const {
        transition,
        position,
        duration
      } = this.data;
      const data = {
        name: transition || position
      };
      if (transition === 'none') {
        data.duration = 0;
        this.originDuration = duration;
      } else {
        if (this.originDuration !== null) {
          data.duration = this.originDuration;
        }
      }
      this.setData(data);
    }
  }
});