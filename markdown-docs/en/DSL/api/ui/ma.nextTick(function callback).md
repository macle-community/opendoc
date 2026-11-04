## ma.nextTick(function callback)

> Delays part of the operations to the next time slice for execution. (Similar to setTimeout)

### Parameters

#### function callback

#### Description

Because interfaces such as setData and triggerEvent in custom components are themselves synchronous operations, when these interfaces are called consecutively, they all execute within a single synchronous flow, so improper logic may cause errors.

An extreme case: when a parent component's setData triggers a child component's triggerEvent, which in turn causes the parent component to perform another setData, during which the child component is unmounted via a ma:if statement, a strange error may occur. Therefore, for logic that does not need to be completed within a single synchronous flow, you can use this interface to delay it to the next time slice for execution.

### Sample code

```js
Component({
  doSth() {
    this.setData({ number: 1 }) // Executes directly in the current synchronous flow

    ma.nextTick(() => {
      this.setData({ number: 3 }) // Executes in the next time slice after the current synchronous flow ends
    })

    this.setData({ number: 2 }) // Executes directly in the current synchronous flow
  }
})
```