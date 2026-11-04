## text

> 文本。

| 属性          | 类型      | 默认值   | 必填 | 说明                               |
|:------------|:--------|:------|:---|:---------------------------------|
| user-select | Boolean | false | 否  | 文本是否可选，该属性会使文本节点显示为 inline-block |
| space       | String  |       | 否  | 显示连续空格                           |
| decode      | Boolean | false | 否  | 是否解码                             |

### space 的合法值

| 值    | 说明          |
|:-----|:------------|
| ensp | 中文字符空格一半大小  |
| emsp | 中文字符空格大小    |
| nbsp | 根据字体设置的空格大小 |

### 示例代码

```html

<view>
  <text userSelect=false space="nbsp">中文字符 空格nbsp</text>
</view>
```

### Bug & Tip

1. decode 可以解析的有 `&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;`
2. 各个操作系统的空格标准并不一致。
3. text 组件内只支持 text 嵌套。
4. 除了文本节点以外的其他节点都无法长按选中。
