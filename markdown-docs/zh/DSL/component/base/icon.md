## icon

> 图标。组件属性的长度单位默认为 px

| 属性    | 类型            | 默认值 | 必填 | 说明                                                                                                        |
|:------|:--------------|:----|:---|:----------------------------------------------------------------------------------------------------------|
| type  | String        |     | 是  | icon 的类型，有效值：success, success_no_circle, info, info_circle,warn, waiting, cancel, download, search,circle |
| size  | Number/String | 23  | 否  | icon 的大小，单位默认为 px。                                                                                        |
| color | String        |     | 否  | icon 的颜色，同 css 的 color                                                                                    |

### 示例代码

```html

<view>
  <icon type='success' size='93'></icon>
</view>
```
