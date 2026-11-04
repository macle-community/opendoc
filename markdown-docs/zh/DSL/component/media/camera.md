## camera

> 系统相机。扫码二维码功能。相关 api：[ma.createCameraContext](MACLE_API_CREATE_CAMERA_CONTEXT)

| 属性              | 类型          | 默认值    | 必填 | 说明                                | 备注           |
|:----------------|:------------|:-------|:---|:----------------------------------|--------------|
| device-position | String      | back   | 否  | 摄像头朝向                             |              |
| resolution      | String      | medium | 否  | 分辨率，不支持动态修改                       | Android 暂不支持 |
| flash           | String      | auto   | 否  | 闪光灯，值为 auto, on, off              |              |
| bindstop        | Eventhandle |        | 否  | 摄像头在非正常终止时触发，如退出后台等情况             |              |
| binderror       | Eventhandle |        | 否  | 用户不允许使用摄像头时触发                     |              |
| bindinitdone    | Eventhandle |        | 否  | 相机初始化完成时触发，e.detail = { maxZoom } |              |
| bindrecorderror | Eventhandle |        | 否  | 录像异常退出时触发，返回错误信息以及被停止的录像的存储路径     |              |

### resolution

| resolution 合法值 | 说明 | 备注           |
|:---------------|:---|--------------|
| low            | 低  | Android 暂不支持 |
| medium         | 中  | Android 暂不支持 |
| high           | 高  | Android 暂不支持 |

### device-position 合法值

| 合法值   | 说明 |
|:------|:---|
| front | 前置 |
| back  | 后置 |

### flash 合法值

| 合法值   | 说明 | 备注           |
|:------|:---|--------------|
| auto  | 自动 |              |
| on    | 打开 |              |
| off   | 关闭 |              |
| torch | 常亮 | Android 暂不支持 |

### bindrecorderror回调函数

#### 参数

#### Object res

| 属性            | 类型     | 说明            |
|:--------------|:-------|---------------|
| errMsg        | String | 录像异常停止的报错信息   |
| tempVideoPath | String | 异常停止的录像视频存储路径 |
| tempThumbPath | String | 异常停止的录像封面存储路径 |

### 示例代码

```html

<camera device-position='{{position}}' flash='{{flash}}' style='width: 100%; height: 300px;' binderror='error'
        bindstop='stop' bindinitdone='initdone' bindrecorderror='recorderror'></camera>
<slider id='slider2' value='1' bindchange='slider2change' max='{{sliderMax}}' show-value step='1'
        style='margin-top:50px ;' />

<view class='button-group'>
  <button class='takephoto' type='primary' bindtap='takePhoto'>拍照</button>
  <button class='takephoto' type='primary' bindtap='startRecord'>录像</button>
  <button class='takephoto' type='primary' bindtap='stopRecord'>停止录像</button>
</view>

<view class='button-group'>
  <button class='takephoto' type='primary' bindtap='takePosition'>切换摄像头</button>
  <button class='takephoto' type='primary' bindtap='takeFlash'>打开闪光灯</button>
</view>
```

```js
const format = (res) => JSON.stringify(res, null, 4);
Page({
  data: {
    src: '',
    showText: '',
    position: 'back',
    flash: 'off',
    videoSrc: '',
    sliderMax: 100,
    info: ''
  },
  slider2change(res) {
    const ctx = ma.createCameraContext();
    let zoom = parseInt(res.detail.value);
    ctx.setZoom({
      zoom: zoom,
      success: (res) => {
        console.log('设置zoom', res.zoom);
        this.setData({
          info: format(res)
        });
        ma.showToast({
          title: '设置zoom成功',
          icon: 'success'
        });
      },
      fail: (res) => {
        console.log('设置zoom fail');
        this.setData({
          info: format(res)
        });
        ma.showToast({
          title: '设置zoom失败',
          icon: 'error'
        });
      },
      complete: (res) => {
        console.log('设置zoom完成');
      }
    });
  },
  initdone(res) {
    this.setData({
      sliderMax: res.detail.maxZoom
    });
  },
  takePhoto() {
    const ctx = ma.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath,
          info: format(res)
        });
      },
      fail: (res) => {
        this.setData({
          info: format(res)
        });
      }
    });
  },
  takePosition() {
    if (this.data.position === 'front') {
      this.setData({
        position: 'back'
      });
    } else {
      this.setData({
        position: 'front'
      });
    }
  },
  startRecord() {
    const ctx = ma.createCameraContext();
    ctx.startRecord({
      timeoutCallback: (res) => {
        ma.showToast({
          title: '录像定时结束',
          icon: 'success'
        });
        this.setData({
          src: res.tempThumbPath,
          info: format(res)
        });
        this.setData({
          videoSrc: res.tempVideoPath
        });
      },
      success: (res) => {
        console.log(res);
        this.setData({
          info: format(res)
        });
        console.log('录像启动成功');
        ma.showToast({
          title: '录像启动成功',
          icon: 'success'
        });
      },
      fail(res) {
        console.log(res);
        this.setData({
          info: format(res)
        });
        console.log('录像启动失败');
        ma.showToast({
          title: '录像启动失败',
          icon: 'error'
        });
      },
      complete(res) {
        console.log('录像启动完成');
        console.log(res);
      }
    });
  },
  stopRecord() {
    const ctx = ma.createCameraContext();
    ctx.stopRecord({
      success: (res) => {
        console.log(res);
        this.setData({
          info: format(res)
        });
        console.log('录像结束成功');
        ma.showToast({
          title: res.tempVideoPath,
          icon: 'success'
        }),
          this.setData({
            src: res.tempThumbPath,
            info: format(res)
          });
        this.setData({
          videoSrc: res.tempVideoPath
        });
      },
      fail(res) {
        console.log(res);
        this.setData({
          info: format(res)
        });
        console.log('录像结束失败');
        ma.showToast({
          title: '录像结束失败',
          icon: 'error'
        });
      },
      complete(res) {
        console.log(res);
        console.log('录像结束完成');
      }
    });
  },
  takeFlash() {
    this.setData({
      flash: 'on'
    });
  },
  error: function(e) {
    console.log(e.detail.errMsg);
    this.setData({
      info: format(e)
    });
  },
  stop: function(e) {
    console.log('camera stop:stopstop');
    this.setData({
      info: format(res)
    });
    console.log(e.detail.errMsg);
  },
  recorderror: function(e) {
    ma.showToast({
      title: 'camera recorderror',
      icon: 'error'
    });
    console.log(e.detail.errMsg);
    console.log(e.detail.tempThumbPath);
    console.log(e.detail.tempVideoPath);
    this.setData({
      src: e.detail.tempThumbPath
    });
    this.setData({
      videoSrc: e.detail.tempVideoPath
    });
    this.setData({
      info: format(e.detail)
    });
  }
});

```

### Bug & Tip

1. 同一页面只能插入一个 `camera` 组件
2. 请注意原生组件使用限制
