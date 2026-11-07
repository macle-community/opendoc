Page({
  data: {},

  Page({
  data: { isEnabled: true },
  onSwitchToggle(e) {
    this.setData({ isEnabled: e.detail.value });
    ma.showToast({ title: e.detail.value ? 'Enabled' : 'Disabled', icon: 'none' });
  }
});
