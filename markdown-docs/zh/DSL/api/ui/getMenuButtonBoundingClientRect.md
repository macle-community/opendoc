## ma.getMenuButtonBoundingClientRect(Object object)

> 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|----------|----------|-----|----|--------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数说明            |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### 返回值

#### Object

菜单按钮的布局位置信息

| 属性     | 类型     | 说明          |
|:-------|:-------|:------------|
| width  | Number | 宽度，单位：px    |
| height | Number | 高度，单位：px    |
| top    | Number | 上边界坐标，单位：px |
| right  | Number | 右边界坐标，单位：px |
| bottom | Number | 下边界坐标，单位：px |
| left   | Number | 左边界坐标，单位：px |

### 示例代码

```js
ma.getMenuButtonBoundingClientRect({
  success(res) {
    console.log(res.width);
    console.log(res.height);
    console.log(res.top);
    console.log(res.right);
    console.log(res.bottom);
    console.log(res.left);
  }
});
```
