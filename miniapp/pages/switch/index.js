Page({
  data: {
    checked: true
  },
  onSwitchChange(e) {
    this.setData({ checked: e.detail });
  }
});