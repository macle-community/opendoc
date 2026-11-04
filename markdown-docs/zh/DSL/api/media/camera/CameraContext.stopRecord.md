## CameraContext.stopRecord(Object object)

> 结束录像（最低版本：23.9.0）

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### object.success回调函数

##### 参数

###### Object res

| 属性            | 类型     | 说明                 |
|:--------------|:-------|:-------------------|
| tempThumbPath | String | 封面图片文件的临时路径 (本地路径) |
| tempVideoPath | String | 视频的文件的临时路径 (本地路径)  |

### 示例代码

```javascript
function stopRecord(){
    const ctx = ma.createCameraContext();
    ctx.stopRecord({
      success:(res)=>{
        console.log('stopRecord',res);
        this.setData({
          src: res.tempImagePath
        })
        this.setData({
          videoSrc: res.tempVideoPath
        })
      }
    })
  }
```

