## ma.loadFontFace(Object object)

> 动态加载网络字体，文件地址需为下载类型  （最低版本：23.6.0）

### 参数

#### Object object

| 属性       | 类型       | 默认值   | 必填 | 说明                                            |
|:---------|:---------|:------|:---|:----------------------------------------------|
| global   | Boolean  | false | 否  | 是否全局生效                                        |
| family   | String   |       | 是  | 定义的字体名称                                       |
| source   | String   |       | 是  | 字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。 |
| desc     | Object   |       | 否  | 可选的字体描述符                                      |
| success  | Function |       | 否  | 接口调用成功的回调函数                                   |
| fail     | Function |       | 否  | 接口调用失败的回调函数                                   |
| complete | Function |       | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                      |



##### desc 属性

| 结构属性    | 类型     | 默认值      | 必填 | 说明                                                 |
|:--------|:-------|:---------|:---|----------------------------------------------------|
| style   | String | 'normal' | 否  | 字体样式，可选值为 normal / italic / oblique                |
| weight  | String | 'normal' | 否  | 字体粗细，可选值为 normal / bold / 100 / 200../ 900         |
| variant | String | 'normal' | 否  | 设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit |



##### object.success 回调函数

###### 参数

###### Object res

| 属性     | 类型     | 说明     |
|:-------|:-------|:-------|
| status | String | 加载字体结果 |

##### object.fail 回调函数

###### 参数

###### Object res

| 属性     | 类型     | 说明     |
|:-------|:-------|:-------|
| status | String | 加载字体结果 |

##### object.complete 回调函数

###### 参数

###### Object res

| 属性     | 类型     | 说明     |
|:-------|:-------|:-------|
| status | String | 加载字体结果 |

### 示例代码

```js
ma.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://testExample/fontName.ttf")', //仅为示例，非真实资源链接
  success: function (res) {
      console.log(res)
  }
})
```
