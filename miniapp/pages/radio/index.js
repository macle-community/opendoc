Page({
  data: {
    currentRadio: '1'
  },
  onRadioChange(e) {
    this.setData({ currentRadio: e.detail });
  }
});