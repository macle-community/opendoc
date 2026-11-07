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

#### 1. 系统相机取景器与前后置闪光灯

```html
<view class="camera-wrapper">
  <camera device-position="back" flash="off" style="width: 100%; height: 220px; border-radius: 8px; overflow: hidden;">
    <cover-view style="position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.6); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px;">
      Device: Back | Flash: Off
    </cover-view>
  </camera>
</view>
```

```js
Page({ data: {} });
```

```css
.camera-wrapper { width: 100%; border-radius: 8px; overflow: hidden; }
```


### Bug & Tip

1. 同一页面只能插入一个 `camera` 组件
2. 请注意原生组件使用限制
