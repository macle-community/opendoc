## web-view

> 承载网页的容器。会自动铺满整个小程序页面。

| 属性           | 类型     | 默认值       | 必填 | 说明                                                                                            |
|:-------------|:-------|:----------|:---|:----------------------------------------------------------------------------------------------|
| src          | String |           | 否  | webview 指向网页的链接                                                                               |
| header       | String |           | 否  | 访问页面需要的额外header信息，key和value均为String                                                           |
| loadingStyle | String | 'default' | 否  | 访问页面加载过程中的loading样式类型，有 `default`，`loadingWithLogo` 两种样式，其余非法输入均展示 `default` 效果(最低版本：25.12.0) |

### 示例代码

```html
<web-view src="https://example.com/" header="{ 'key': 'value' }" loadingStyle="loadingWithLogo"></web-view>
```
