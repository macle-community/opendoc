"use strict";

var _component = require("../common/component");
var _utils = require("../common/utils");
var _validator = require("../common/validator");
var _pageScroll = require("../mixins/page-scroll");
const ROOT_ELEMENT = '.maui-sticky';
(0, _component.MaComponent)({
  properties: {
    zIndex: {
      type: Number,
      value: 99
    },
    offsetTop: {
      type: Number,
      value: 0,
      observer: 'onScroll'
    },
    disabled: {
      type: Boolean,
      observer: 'onScroll'
    },
    container: {
      type: null,
      observer: 'onScroll'
    },
    scrollTop: {
      type: null,
      observer(val) {
        this.onScroll({
          scrollTop: val
        });
      }
    }
  },
  data: {
    fixed: false,
    height: 0,
    transform: 0,
    _id: ''
  },
  attached() {
    this.setData({
      _id: `_maui_sticky_${(0, _utils.autoIncreaseId)()}`
    });
  },
  behaviors: [(0, _pageScroll.pageScrollMixin)(function (event) {
    if (this.data.scrollTop !== null) {
      return;
    }
    this.onScroll(event);
  })],
  methods: {
    onScroll({
      scrollTop = 0
    }) {
      const {
        container,
        disabled,
        offsetTop
      } = this.data;
      if (disabled) {
        this.setDataAfterDiff({
          transform: 0,
          fixed: false
        });
        return;
      }
      this.scrollTop = scrollTop || this.scrollTop;
      if (typeof container === 'function') {
        Promise.all([this.getRect(), this.getContainerRect()]).then(([root, containerRect]) => {
          if (containerRect.top < offsetTop) {
            if (offsetTop + root.height > containerRect.height + containerRect.top) {
              this.setDataAfterDiff({
                fixed: false,
                transform: containerRect.height - root.height
              });
            } else {
              this.setDataAfterDiff({
                fixed: true,
                height: root.height,
                transform: 0
              });
            }
          } else {
            this.setDataAfterDiff({
              fixed: false,
              transform: 0
            });
          }
        }).catch(() => {});
        return;
      }
      this.getRect().then(root => {
        if (!(0, _validator.isDef)(root) || !root.width && !root.height) {
          return;
        }
        if (offsetTop >= root.top) {
          this.setDataAfterDiff({
            height: root.height,
            fixed: true
          });
          this.transform = 0;
        } else {
          this.setDataAfterDiff({
            fixed: false
          });
        }
      });
    },
    // 有变化再setData
    setDataAfterDiff(data) {
      ma.nextTick(() => {
        const diff = Object.keys(data).reduce((acc, key) => {
          if (data[key] !== this.data[key]) {
            acc[key] = data[key];
          }
          return acc;
        }, {});
        if (Object.keys(diff).length > 0) {
          this.setData(diff);
        }
        this.emit('scroll', {
          scrollTop: this.scrollTop,
          isFixed: data.fixed || this.data.fixed
        });
      });
    },
    getContainerRect() {
      const nodesRef = this.data.container();
      if (!nodesRef) {
        return Promise.reject(new Error('not found container'));
      }
      return new Promise(resolve => nodesRef.boundingClientRect(resolve).exec());
    },
    getRect() {
      const selector = `#${this.data._id}`;
      return new Promise(resolve => {
        ma.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => resolve(rect[0]));
      });
    },
    emit(...args) {
      this.triggerEvent.apply(this, args);
    }
  },
  mounted() {
    this.onScroll();
  }
});