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

#### 1. 基础文本与长按可选文本

```html
<view class="text-group">
  <text class="text-headline">Standard Headline Text</text>
  <text class="text-sub">Regular secondary description text paragraph.</text>
  <text selectable="true" class="text-selectable">This text is selectable (user-select / selectable=true)</text>
</view>
```

```js
Page({ data: {} });
```

```css
.text-group { display: flex; flex-direction: column; gap: 8px; }
.text-headline { font-size: 17px; font-weight: 700; color: #0f172a; }
.text-sub { font-size: 13px; color: #64748b; }
.text-selectable { font-size: 13px; color: #2563eb; background: #eff6ff; padding: 6px 10px; border-radius: 6px; border: 1px dashed #bfdbfe; }
```

#### 2. 空格排版格式

```html
<view class="text-group">
  <text space="ensp">Half-width   space   (ensp)</text>
  <text space="emsp">Full-width   space   (emsp)</text>
  <text space="nbsp">Non-breaking   space   (nbsp)</text>
</view>
```

```js
Page({ data: {} });
```

```css
.text-group text { font-size: 14px; color: #334155; }
```


### Bug & Tip

1. decode 可以解析的有 `&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;`
2. 各个操作系统的空格标准并不一致。
3. text 组件内只支持 text 嵌套。
4. 除了文本节点以外的其他节点都无法长按选中。
