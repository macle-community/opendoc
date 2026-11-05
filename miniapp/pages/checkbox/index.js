Page({
  data: {
    checked: true,
    checkedSquare: true,
    groupVal: ['a', 'b']
  },
  onChange(e) {
    this.setData({ checked: e.detail });
  },
  onSquareChange(e) {
    this.setData({ checkedSquare: e.detail });
  },
  onGroupChange(e) {
    this.setData({ groupVal: e.detail });
  }
});