Page({
  data: {},
  showSuccess() {
    ma.showToast({ title: 'Success!', icon: 'success' });
  },
  showInfo() {
    ma.showToast({ title: 'Information message', icon: 'none' });
  }
});