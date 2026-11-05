Page({
  data: {
    snippetTitle: 'Macle MiniProgram Live Execution'
  },
  onLoad(options) {
    if (options.title) {
      this.setData({ snippetTitle: decodeURIComponent(options.title) });
    }
  },
  handleRunClick() {
    ma.showToast({ title: 'Code executed in DevSuite!', icon: 'success' });
  }
});