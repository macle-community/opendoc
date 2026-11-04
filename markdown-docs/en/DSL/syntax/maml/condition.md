## Conditional rendering

### ma:if

In the framework, use ma:if="" to determine whether to render this code block:

```
<view ma:if="{{condition}}"> True </view>
```

You can also use ma:elif and ma:else to add an else block:

```
<view ma:if="{{length > 5}}"> 1 </view>
<view ma:elif="{{length > 2}}"> 2 </view>
<view ma:else> 3 </view>
```

### block ma:if

Because ma:if is a control attribute, it needs to be added to a tag. If you want to conditionally render multiple component tags at once, you can use a <block/> tag to wrap multiple components together and use the ma:if control attribute on it.

```
<block ma:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

> Note: <block> is not a component. It is merely a wrapping element that does not render anything in the page and only accepts control attributes.

### ma:if vs hidden

Because the template inside ma:if may also contain data binding, when the condition value of ma:if switches, the framework has a local rendering process, because it ensures that the conditional block is destroyed or re-rendered when switched.

At the same time, ma:if is also lazy. If the initial rendering condition is false, the framework does nothing, and only starts local rendering when the condition becomes true for the first time.

In contrast, hidden is much simpler. The component is always rendered, and it simply controls showing and hiding.

Generally, ma:if has a higher switching cost while hidden has a higher initial rendering cost. Therefore, in situations where frequent switching is needed, hidden is better; if the condition is unlikely to change at runtime, ma:if is better.
