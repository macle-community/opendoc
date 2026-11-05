Page({
  data: {
    count: 3
  },
  onChange(e) {
    this.setData({ count: e.detail });
  }
});