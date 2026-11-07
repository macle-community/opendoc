define("maui-components/tabs/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
var _touch = require("../mixins/touch");
var _utils = require("../common/utils");
var _validator = require("../common/validator");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  behaviors: [_touch.touch],
  classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class', 'wrap-class'],
  relations: (0, _relation.useChildren)('tab', function () {
    this.updateTabs();
  }),
  properties: {
    color: String,
    sticky: Boolean,
    border: Boolean,
    navStyle: String,
    tabStyle: String,
    lineStyle: String,
    wrapStyle: String,
    swipeable: Boolean,
    customStyle: String,
    tabActiveStyle: String,
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      value: 'line'
    },
    active: {
      type: null,
      value: 0,
      observer(name) {
        if (this.getCurrentName() !== name) {
          this.setCurrentIndexByName(name);
        }
      }
    },
    zIndex: {
      type: Number,
      value: 1
    },
    animated: {
      type: Boolean,
      observer() {
        this.children().forEach((child, index) => child.updateRender(index === this.data.currentIndex, index, this));
      }
    },
    ellipsis: {
      type: Boolean,
      value: true,
      observer(value) {
        this.setData({
          scrollable: this.children().length > this.data.swipeThreshold || !value
        });
      }
    },
    duration: {
      type: Number,
      value: 0.3
    },
    offsetTop: {
      type: Number,
      value: 0
    },
    lineWidth: {
      type: null,
      value: 40,
      observer: 'resize'
    },
    lineHeight: {
      type: null,
      value: -1
    },
    lazyRender: {
      type: Boolean,
      value: true
    },
    swipeThreshold: {
      type: Number,
      value: 5,
      observer(value) {
        this.setData({
          scrollable: this.children().length > value || !this.data.ellipsis
        });
      }
    },
    useBeforeChange: {
      type: Boolean,
      value: false
    }
  },
  data: {
    _id: '',
    tabs: [],
    scrollLeft: 0,
    inited: false,
    currentIndex: 0,
    container: null,
    scrollable: false,
    lineOffsetLeft: 0,
    skipTransition: true,
    scrollWithAnimation: false
  },
  attached() {
    (0, _utils.requestAnimationFrame)(() => {
      this.setData({
        _id: `_maui_tab_${(0, _utils.autoIncreaseId)()}`,
        container: () => ma.createSelectorQuery().select(`#${this.data._id}`)
      });
    });
  },
  ready() {
    this.swiping = true;
    this.resize();
    this.scrollIntoView();
  },
  methods: {
    updateTabs() {
      const {
        data
      } = this;
      const children = this.children();
      this.setData({
        tabs: children.map(child => child.data),
        scrollable: children.length > data.swipeThreshold || !data.ellipsis
      });
      this.setCurrentIndexByName(data.active || this.getCurrentName());
    },
    trigger(eventName, child) {
      const {
        currentIndex
      } = this.data;
      const data = this.getChildData(currentIndex, child);
      if (!(0, _validator.isDef)(data)) {
        return;
      }
      this.emit(eventName, data);
    },
    onTap(event) {
      const {
        index
      } = event.currentTarget.dataset;
      const child = this.children()[index];
      if (child.data.disabled) {
        this.trigger('disabled', child);
        return;
      }
      this.onBeforeChange(index).then(() => {
        this.setCurrentIndex(index);
        (0, _utils.nextTick)(() => {
          this.trigger('click');
        });
      }, () => {});
    },
    // correct the index of active tab
    setCurrentIndexByName(name) {
      const children = this.children();
      const index = children.findIndex(child => child.getComputedName() === name);
      if (index > -1) {
        this.setCurrentIndex(index);
      } else {
        this.setCurrentIndex(name);
      }
    },
    setCurrentIndex(currentIndex) {
      if (typeof currentIndex !== 'number') {
        return;
      }
      const {
        data
      } = this;
      const children = this.children();
      if (!(0, _validator.isDef)(currentIndex) || currentIndex >= children.length || currentIndex < 0) {
        return;
      }
      (0, _utils.groupSetData)(this, () => {
        children.forEach((item, index) => {
          const active = index === currentIndex;
          if (active !== item.data.active || !item.inited) {
            item.updateRender(active, index, this);
          }
        });
      });
      if (currentIndex === data.currentIndex) {
        if (!data.inited) {
          this.resize();
        }
        return;
      }
      const shouldEmitChange = data.currentIndex !== null;
      this.setData({
        currentIndex
      });
      (0, _utils.requestAnimationFrame)(() => {
        (0, _utils.nextTick)(() => {
          this.resize();
          this.scrollIntoView();
          this.trigger('input');
          if (shouldEmitChange) {
            this.trigger('change');
          }
        });
      });
    },
    getCurrentName() {
      const activeTab = this.children()[this.data.currentIndex];
      if (activeTab) {
        return activeTab.getComputedName();
      }
      return null;
    },
    resize() {
      if (this.data.type !== 'line') {
        return;
      }
      const {
        currentIndex,
        ellipsis,
        skipTransition
      } = this.data;
      Promise.all([(0, _utils.getAllRect)(this, '.maui-tab'), (0, _utils.getAllRect)(this, '.maui-tabs__line')]).then(([rects = [], lineRects]) => {
        const thisRects = rects.filter(item => item.dataset.id === this.data._id) ?? [];
        const lineRect = lineRects.filter(item => item.dataset.id === this.data._id) ?? [];
        if (thisRects.length === 0 || lineRect.length === 0) {
          return;
        }
        const rect = thisRects[currentIndex];
        if (rect == null) {
          return;
        }
        let lineOffsetLeft = thisRects.slice(0, currentIndex).reduce((prev, curr) => prev + curr.width, 0);
        lineOffsetLeft += (rect.width - lineRect[0].width) / 2 + (ellipsis ? 0 : 8);
        this.setData({
          lineOffsetLeft,
          inited: true
        });
        this.swiping = true;
        if (skipTransition) {
          // waiting transition end
          setTimeout(() => {
            this.setData({
              skipTransition: false
            });
          }, this.data.duration);
        }
      });
    },
    scrollIntoView() {
      const {
        scrollable,
        currentIndex,
        scrollWithAnimation
      } = this.data;
      if (!scrollable) {
        return;
      }
      Promise.all([(0, _utils.getAllRect)(this, '.maui-tab'), (0, _utils.getAllRect)(this, '.maui-tabs__nav')]).then(([tabRects, navRects]) => {
        const thisTabRects = tabRects.filter(item => item.dataset.id === this.data._id) ?? [];
        const navRect = navRects.filter(item => item.dataset.id === this.data._id) ?? [];
        if (thisTabRects.length === 0 || navRect.length === 0) {
          return;
        }
        const tabRect = thisTabRects[currentIndex];
        const offsetLeft = thisTabRects.slice(0, currentIndex).reduce((prev, curr) => prev + curr.width, 0);
        this.setData({
          scrollLeft: offsetLeft - (navRect[0].width - tabRect.width) / 2
        });
        if (!scrollWithAnimation) {
          (0, _utils.nextTick)(() => {
            this.setData({
              scrollWithAnimation: true
            });
          });
        }
      });
    },
    onTouchScroll(event) {
      this.emit('scroll', event.detail);
    },
    onTouchStart(event) {
      if (!this.data.swipeable) {
        return;
      }
      // 标记为滑动中
      this.swiping = true;
      this.touchStart(event);
    },
    onTouchMove(event) {
      if (!this.swiping || !this.data.swipeable) {
        return;
      }
      this.touchMove(event);
    },
    onTouchEnd() {
      if (!this.swiping || !this.data.swipeable) {
        return;
      }
      const {
        offsetX,
        deltaX,
        direction
      } = this;
      const minSwipeDistance = 50;
      if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
        const index = this.getAvaiableTab(deltaX);
        if (index !== -1) {
          this.onBeforeChange(index).then(() => {
            this.setCurrentIndex(index);
          });
        }
      }
      this.swiping = false;
    },
    getAvaiableTab(direction) {
      const {
        tabs,
        currentIndex
      } = this.data;
      const step = direction > 0 ? -1 : 1;
      for (let i = step; currentIndex + i < tabs.length && currentIndex + i >= 0; i += step) {
        const index = currentIndex + i;
        if (index >= 0 && index < tabs.length && tabs[index] && !tabs[index].disabled) {
          return index;
        }
      }
      return -1;
    },
    onBeforeChange(index) {
      const {
        useBeforeChange
      } = this.data;
      if (!useBeforeChange) {
        return Promise.resolve();
      }
      return new Promise((resolve, reject) => {
        this.emit('beforechange', {
          ...this.getChildData(index),
          callback: status => status ? resolve() : reject(new Error('Canceled by user'))
        });
      });
    },
    getChildData(index, child) {
      const currentChild = child || this.children()[index];
      if (!(0, _validator.isDef)(currentChild)) {
        return null;
      }
      return {
        index: currentChild.data.index,
        name: currentChild.getComputedName() || currentChild.data.index,
        title: currentChild.data.title
      };
    },
    emit(...args) {
      this.triggerEvent.apply(this, args);
    },
    children() {
      return this.getRelationNodes('../tab/index') ?? [];
    }
  }
});
}));