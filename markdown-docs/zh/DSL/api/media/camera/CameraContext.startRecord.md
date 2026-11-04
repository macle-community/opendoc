## CameraContext.startRecord(Object object)

> 开始录像（最低版本：23.9.0）

### 参数

#### Object object

| 属性            | 类型     | 默认值 | 必填 | 说明                                |
| :-------------- | :------- | :----- | :--- |:----------------------------------|
| timeoutCallback | Function |        | 否   | 超过录制时长上限时会结束录像并触发此回调。             |
| timeout         | Number   | 30     | 否   | 录制时长上限，单位为秒，当前支持传入 1 - 180 之间的正整数 |
| success         | Function |        | 否   | 接口调用成功的回调函数                       |
| fail            | Function |        | 否   | 接口调用失败的回调函数                       |
| complete        | Function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）          |

#### object.timeoutCallback 回调函数

##### 参数

###### Object res

| 属性            | 类型     | 说明                 |
|:--------------|:-------|:-------------------|
| errMsg        | String | startRecord: ok    |
| tempThumbPath | String | 封面图片文件的临时路径 (本地路径) |
| tempVideoPath | String | 视频的文件的临时路径 (本地路径)  |

### 示例代码

```javascript
function startRecord(){
    const ctx = ma.createCameraContext();
    ctx.startRecord({
      timeoutCallback:(res)=>{
        this.setData({
          src: res.tempImagePath
        })
        this.setData({
          videoSrc: res.tempVideoPath
        })
      },
      success:(res)=>{
        console.log('startRecord');
      }
    })
  }
```
