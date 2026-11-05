"use strict";

var _utils = require("../common/utils");
var _component = require("../common/component");
var _touch = require("../mixins/touch");
(0, _component.MaComponent)({
  behaviors: [_touch.touch],
  properties: {
    disabled: {
      type: Boolean,
      value: false
    },
    value: {
      type: null,
      value: 0,
      observer(val) {
        if (val !== this.value) {
          this.updateValue(val);
        }
      }
    },
    useButtonSlot: {
      type: Boolean,
      value: false
    },
    max: {
      type: Number,
      value: 100,
      observer() {
        this.updateValue(this.value);
      }
    },
    min: {
      type: Number,
      value: 0,
      observer() {
        this.updateValue(this.value);
      }
    },
    inactiveColor: {
      type: String,
      value: '#e5e5e5',
      observer() {
        this.updateValue(this.value);
      }
    },
    step: {
      type: Number,
      value: 1
    },
    vertical: Boolean,
    barHeight: {
      type: String,
      value: '2px',
      observer() {
        this.updateValue(this.value);
      }
    },
    activeColor: {
      type: String,
      value: '#1989fa',
      observer() {
        this.updateValue(this.value);
      }
    }
  },
  created() {
    this.updateValue(this.data.value);
  },
  methods: {
    /**
     * 处理触摸开始事件，根据触摸位置更新滑块的值
     * @param {TouchEvent} touchEvent - 触摸事件
     */

    onTouchStart(touchEvent) {
      if (this.data.disabled) {
        return;
      }
      const {
        index
      } = touchEvent.currentTarget.dataset;
      if (typeof index === 'number') {
        this.buttonIndex = index;
      }
      this.touchStart(touchEvent);
      this.startValue = this.format(this.value);
      this.newValue = this.value;
      if (this.isRange(this.newValue)) {
        this.startValue = this.newValue.map(item => this.format(item));
      } else {
        this.startValue = this.format(this.newValue);
      }
      this.dragStatus = 'start';
    },
    /**
     * 处理触摸移动事件，根据触摸位置更新滑块的值
     * @param {TouchEvent} touchEvent - 触摸事件
     */

    onTouchMove(touchEvent) {
      if (this.data.disabled) {
        return;
      }
      if (this.dragStatus === 'start') {
        this.triggerEvent('dragStart');
      }
      this.touchMove(touchEvent);
      this.dragStatus = 'draging';
      (0, _utils.getRect)(this, '.maui-slider').then(rect => {
        const {
          vertical
        } = this.data;
        const delta = vertical ? this.deltaY : this.deltaX;
        const total = vertical ? rect.height : rect.width;
        const diffVal = delta / total * this.getRange();
        if (this.isRange(this.startValue)) {
          this.newValue[this.buttonIndex] = this.startValue[this.buttonIndex] + diffVal;
        } else {
          this.newValue = this.startValue + diffVal;
        }
        this.updateValue(this.newValue, false, true);
      });
    },
    /**
     * 处理触摸结束事件，更新滑块的值并触发事件
     */

    onTouchEnd() {
      if (this.data.disabled) {
        return;
      }
      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.triggerEvent('dragEnd');
      }
    },
    /**
     * 处理点击事件，根据点击位置更新滑块的值
     * @param {TouchEvent} event - 触摸事件
     */

    onClick(event) {
      if (this.data.disabled) {
        return;
      }
      const {
        min
      } = this.data;
      (0, _utils.getRect)(this, '.maui-slider').then(rect => {
        const {
          vertical
        } = this.data;
        const touchObj = event.touches[0];
        const delta = vertical ? touchObj.clientY - rect.top : touchObj.clientX - rect.left;
        const total = vertical ? rect.height : rect.width;
        const newVal = Number(min) + delta / total * this.getRange();
        if (this.isRange(this.value)) {
          const [left, right] = this.value;
          const middle = (left + right) / 2;
          if (newVal <= middle) {
            this.updateValue([newVal, right], true);
          } else {
            this.updateValue([left, newVal], true);
          }
        } else {
          this.updateValue(newVal, true);
        }
      });
    },
    isRange(val) {
      const {
        range
      } = this.data;
      return range && Array.isArray(val);
    },
    /**
     * 处理值重叠的情况，确保左值小于右值
     * @param {number[]} value - 需要处理的值
     * @return {number[]} - 处理后的值
     */

    handleOverlap(value) {
      if (value[0] > value[1]) {
        return value.slice(0).reverse();
      }
      return value;
    },
    /**
     * 更新滑块的值并更新滑块的样式
     * @param {number|number[]} newVal - 新的滑块值
     * @param {boolean} end - 是否结束拖拽
     * @param {boolean} isDrag - 是否正在拖拽
     */

    updateValue(newVal, end, isDrag) {
      let value = newVal;
      if (this.isRange(value)) {
        value = this.handleOverlap(value).map(val => this.format(val));
      } else {
        value = this.format(value);
      }
      this.value = value;
      const {
        vertical
      } = this.data;
      const mainAxisStr = vertical ? 'height' : 'width';
      this.setData({
        wrapperStyle: `
          background: ${this.data.inactiveColor || ''};
          ${vertical ? 'width' : 'height'}: ${(0, _utils.addUnit)(this.data.barHeight) || ''};
        `,
        barStyle: `
          ${mainAxisStr}: ${this.calcMainAxis()};
          left: ${vertical ? 0 : this.calcOffset()};
          top: ${vertical ? this.calcOffset() : 0};
          ${isDrag ? 'transition: none;' : ''}
        `
      });
      if (isDrag) {
        this.triggerEvent('drag', {
          value
        });
      }
      if (end) {
        this.triggerEvent('change', value);
      }
      if (isDrag || end) {
        this.setData({
          value
        });
      }
    },
    /**
     * 获取值的范围
     * @return {number} - 值的范围
     */

    getScope() {
      return Number(this.data.max) - Number(this.data.min);
    },
    getRange() {
      const {
        max,
        min
      } = this.data;
      return max - min;
    },
    /**
     * 计算选中条的长度百分比
     * @return {string} - 选中条的长度百分比
     */

    calcMainAxis() {
      const {
        value
      } = this;
      const {
        min
      } = this.data;
      const scope = this.getScope();
      if (this.isRange(value)) {
        return `${(value[1] - value[0]) * 100 / scope}%`;
      }
      return `${(value - Number(min)) * 100 / scope}%`;
    },
    /**
     * 计算选中条的开始位置的偏移量
     * @return {string} - 选中条的开始位置的偏移量
     */

    calcOffset() {
      const {
        value
      } = this;
      const {
        min
      } = this.data;
      const scope = this.getScope();
      if (this.isRange(value)) {
        return `${(value[0] - Number(min)) * 100 / scope}%`;
      }
      return '0%';
    },
    /**
     * 格式化值，使其符合步长
     * @param {number} value - 需要格式化的值
     * @return {number} - 格式化后的值
     */

    format(value) {
      const {
        max,
        min,
        step
      } = this.data;
      return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
    }
  }
});