## ma.setTabBarItem(Object object)

> 动态设置 tabBar 某一项的内容

### 参数

#### Object object

| 属性               | 类型       | 默认值 | 必填 | 说明                                          |
|:-----------------|:---------|:----|:---|:--------------------------------------------|
| index            | Number   |     | 是  | tabBar 的哪一项，从左边算起，起始值为0                     |
| text             | String   |     | 否  | tab 上的按钮文字                                  |
| iconPath         | String   |     | 否  | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px     |
| selectedIconPath | String   |     | 否  | 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px |
| success          | Function |     | 否  | 接口调用成功的回调函数                                 |
| fail             | Function |     | 否  | 接口调用失败的回调函数                                 |
| complete         | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                    |

### 示例代码

```js
ma.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/path/to/iconPath',
  selectedIconPath: '/path/to/selectedIconPath'
});
```
