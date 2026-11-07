Page({
  data: {},

  Page({
  data: { isAgree: true },
  onAgreeChange(e) {
    this.setData({ isAgree: !this.data.isAgree });
  }
});
