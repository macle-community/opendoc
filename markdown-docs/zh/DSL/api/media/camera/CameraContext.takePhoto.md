## CameraContext.takePhoto(Object object)

> 拍摄照片

### 参数

#### Object object

| 属性       | 类型       | 默认值    | 必填 | 说明                       |
|:---------|:---------|:-------|:---|:-------------------------|
| quality  | String   | normal | 否  | 成像质量                     |
| success  | Function |        | 否  | 接口调用成功的回调函数              |
| fail     | Function |        | 否  | 接口调用失败的回调函数              |
| complete | Function |        | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### quality 合法值

| 合法值    | 说明   |
|:-------|:-----|
| high   | 高质量  |
| normal | 普通质量 |
| low    | 低质量  |

#### object.success 回调函数

#### 参数

##### Object res

| 属性            | 类型     | 说明                                      |
|:--------------|:-------|:----------------------------------------|
| tempImagePath | String | 照片文件的临时路径 (本地路径)，安卓是 jpg 图片格式，ios 是 png |


### 示例代码
```js
const ctx = ma.createCameraContext('camera');

ctx.takePhoto({
  quality: 'high',
  success (res) {
    console.log (res);
  },
  fail (err) {
    console.log (err);
  }
});
```
