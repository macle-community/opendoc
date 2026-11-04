## Simple two-way binding

#### Two-way binding syntax

In MAML, the binding of ordinary properties is one-way. For example:

```maml
<input value="{{value}}" />
```

If you use `this.setData({ value: 'leaf' })` to update `value`, both `this.data.value` and the value displayed in the input box will be updated to `leaf`; but if the user modifies the value in the input box, it will not simultaneously change `this.data.value`.

If you need to change `this.data.value` simultaneously while the user inputs, you need to use the simple two-way binding mechanism. At this point, you can add the `model:` prefix before the corresponding property:

```maml
<input model:value="{{value}}" />
```

This way, if the value of the input box is changed, `this.data.value` will also be changed at the same time. At the same time, all positions in MAML that bind `value` will be updated together, and data listeners will be triggered normally.

The expressions used for two-way binding have the following restrictions:

1. It can only be a single field binding, for example

```js
<input model:value="value is {{value}}" />
<input model:value="{{ a + b }}" />
```

are both invalid;

1. Currently, data paths are not supported, for example

```js
<input model:value="{{ a.b }}" />
```

such an expression is not yet supported.
