define("maui-components/toast/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    loadingType: {
      type: String,
      value: 'circular'
    },
    type: {
      type: String,
      value: 'text'
    },
    duration: {
      type: Number,
      value: 2000
    },
    zIndex: {
      type: Number,
      value: 1000
    },
    mask: {
      type: Boolean,
      value: false
    },
    forbidClick: {
      type: Boolean,
      value: false
    },
    message: {
      type: String,
      value: ''
    }
  },
  data: {
    timeID: null,
    showToast: true,
    successUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMDE4NzgxNjc1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzNTIxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPjxwYXRoIGQ9Ik01MTIgMTEzLjc1NzA5MWM2MS44NTg5MDkgMCAxMjAuMzY2NTQ1IDE0LjEwMzI3MyAxNzIuNTkwNTQ1IDM5LjI4NDM2NGEyOC40MzkyNzMgMjguNDM5MjczIDAgMSAxLTI0LjU3NiA1MS4yaC0wLjA5MzA5YTM0MS4zMTc4MTggMzQxLjMxNzgxOCAwIDEgMCAxOTAuODgyOTA5IDI2NS44Njc2MzYgMjguNDM5MjczIDI4LjQzOTI3MyAwIDAgMSA1NS42NjgzNjMtMTEuMTcwOTA5aDAuMjMyNzI4QTM5OC4yNDI5MDkgMzk4LjI0MjkwOSAwIDEgMSA1MTIgMTEzLjc1NzA5MXogbTM4NC45MzA5MDkgMTE5LjA2MzI3M2w4LjE5MiA4LjIzODU0NWM3LjE2OCA3LjE2OCA2LjY1NiAxOC41MjUwOTEtMC44Mzc4MTggMjYuMDY1NDU1bC0zNTkuMjM3ODE4IDM1OC42NzkyNzJhMjkuMDQ0MzY0IDI5LjA0NDM2NCAwIDAgMS00MS4wNTMwOTEtMC43OTEyNzJsLTE1Ni41Nzg5MDktMTU2LjM5MjcyOGExOS40NTYgMTkuNDU2IDAgMCAxLTIuMDAxNDU1LTI1Ljk3MjM2M2wxNC42MTUyNzMtMTguNDc4NTQ2YTE5LjA4MzYzNiAxOS4wODM2MzYgMCAwIDEgMjUuMTM0NTQ1LTQuMTg5MDkxbDEyNi42OTY3MjggODQuNTczMDkxYzYuNzAyNTQ1IDQuNDY4MzY0IDE4LjE1MjcyNyAzLjg2MzI3MyAyNC40MzYzNjMtMS4xNjM2MzZsMzM0LjY2MTgxOC0yNzEuNTQ2MTgyYTIwLjAxNDU0NSAyMC4wMTQ1NDUgMCAwIDEgMjUuOTI1ODE5IDAuOTc3NDU1eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTM1MjIiPjwvcGF0aD48L3N2Zz4=',
    failUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYyMDE4ODYyNDc1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjczNDIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTU0MS42MDI5MDkgMTAxLjAwMzYzNmMxMC45MzgxODIgNS45MTEyNzMgMTkuOTIxNDU1IDE0Ljg5NDU0NSAyNS44NzkyNzMgMjUuODc5MjczbDM4NS4zOTYzNjMgNzA4LjM3NTI3M0E2NC42OTgxODIgNjQuNjk4MTgyIDAgMCAxIDg5Ni4xMzk2MzYgOTMwLjkwOTA5MUgxMjUuMjA3MjczYTY0LjY5ODE4MiA2NC42OTgxODIgMCAwIDEtNTYuODc4NTQ2LTk1LjY1MDkwOUw0NTMuODE4MTgyIDEyNi44ODI5MDlhNjQuNjk4MTgyIDY0LjY5ODE4MiAwIDAgMSA4Ny44MzEyNzMtMjUuOTI1ODE4eiBtLTMwLjk1MjcyNyA1Ni43ODU0NTVMMTI1LjIwNzI3MyA4NjYuMjEwOTA5aDc3MC43OTI3MjdsLTM4NS4zOTYzNjQtNzA4LjQyMTgxOHogbTMuMjU4MTgyIDU1NC41NDI1NDVhMzIuMzQ5MDkxIDMyLjM0OTA5MSAwIDEgMSAwIDY0LjY5ODE4MiAzMi4zNDkwOTEgMzIuMzQ5MDkxIDAgMCAxIDAtNjQuNjk4MTgyeiBtMjQuMDY0LTM1NS45Nzk2MzZjNC42NTQ1NDUgMCA4LjM3ODE4MiAzLjYzMDU0NSA4LjI4NTA5MSA4LjY1NzQ1NWwtNi44NDIxODIgMzA2LjI2OTA5YTguODkwMTgyIDguODkwMTgyIDAgMCAxLTguNTY0MzY0IDguNzA0aC0zMy44ODUwOTFhOC42MTA5MDkgOC42MTA5MDkgMCAwIDEtOC41NjQzNjMtOC42NTc0NTRsLTYuODQyMTgyLTMwNi4zMTU2MzZhOC4xOTIgOC4xOTIgMCAwIDEgOC4zMzE2MzYtOC42NTc0NTVoNDguMDgxNDU1eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNzM0MyI+PC9wYXRoPjwvc3ZnPg=='
  },
  ready() {
    if (this.properties.duration > 0) {
      this.data.timeID = setTimeout(() => {
        this.setData({
          showToast: false
        });
      }, this.properties.duration * 0.98);
    }
  },
  detached() {
    if (this.data.timeID) {
      clearTimeout(this.data.timeID);
      this.data.timeID = null;
    }
  }
});
}));