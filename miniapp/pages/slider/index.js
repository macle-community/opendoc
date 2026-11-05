Page({
  data: {
    value: 50
  },
  onChange(e) {
    this.setData({ value: e.detail });
  }
});