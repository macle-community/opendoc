## cover-view

> A text view covering native components.

If all native components already support same-layer rendering, it is recommended to use [view](MACLE_COMPONENT_VIEW)
instead. The native components that can be covered include [video](MACLE_COMPONENT_VIDEO) and [camera](MACLE_COMPONENT_CAMERA).

Only nesting of cover-view is supported.

### Sample Code

```html

<camera device-position='back' flash='off' style='width: 100%; height: 360px;'>
  <cover-view class='cover-view'>
    <cover-view class='c-cover-view red'>red</cover-view>
    <cover-view class='c-cover-view green'>green</cover-view>
    <cover-view class='c-cover-view yellow'>yellow</cover-view>
  </cover-view>
</camera>
```

### Bug & Tip

1. The event model follows the bubbling model, but does not bubble to native components.
2. It is recommended to wrap all text with cover-view tags to avoid layout errors.
3. Only basic positioning, layout, and text styles are supported. Setting `single-side border`, `background-image`, `shadow`, `overflow: visible`, etc. is not supported.
4. It is recommended that child nodes do not overflow the parent node`.
5. The default styles set are: `white-space: nowrap;line-height: 1.2;display: block`.
