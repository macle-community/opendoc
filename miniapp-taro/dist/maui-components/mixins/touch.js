"use strict";

exports.__esModule = true;
exports.touch = void 0;
const MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}
const touch = exports.touch = Behavior({
  methods: {
    resetTouchStatus() {
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.direction = '';
    },
    touchStart(event) {
      this.resetTouchStatus();
      const point = event.touches[0];
      const {
        clientX,
        clientY
      } = point;
      this.startX = clientX;
      this.startY = clientY;
    },
    touchMove(event) {
      const point = event.touches[0];
      const {
        clientX,
        clientY
      } = point;
      this.deltaX = clientX - this.startX;
      this.deltaY = clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    }
  }
});