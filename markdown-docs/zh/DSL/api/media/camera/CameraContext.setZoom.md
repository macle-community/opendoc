## CameraContext.setZoom(Object object)

> 设置缩放级别（最低版本：23.9.0）

### 参数

#### Object object

| 属性     | 类型     | 默认值 | 必填 | 说明                                                            |
| :------- | :------- | :----- | :--- |:--------------------------------------------------------------|
| zoom     | Number   |        | 是   | 缩放级别，范围[1, maxZoom]。zoom 取正整数。maxZoom 可在 bindinitdone 返回值中获取。 |
| success  | Function |        | 否   | 接口调用成功的回调函数                                                   |
| fail     | Function |        | 否   | 接口调用失败的回调函数                                                   |
| complete | Function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）                                      |

### object.success 回调函数

#### 参数

#### Object res

| 属性 | 类型   | 说明                                                         |
| :--- | :----- | :----------------------------------------------------------- |
| zoom | Number | 实际设置的缩放级别，如果设置的zoom值超过当前系统支持的最大值，将在[1, maxZoom]中选择最接近目标值的可设值 |

### 示例代码

```javascript
function  stopRecord(){
    const ctx = ma.createCameraContext();
    ctx.setZoom({
      zoom:zoom,
      success:(res)=>{
        console.log('success',res.zoom);
      },
      fail:(res)=>{
        console.log('fail');
      }
    })
  }
```

