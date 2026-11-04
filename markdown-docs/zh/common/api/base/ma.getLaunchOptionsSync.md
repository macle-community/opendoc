# ma.getLaunchOptionsSync

同步获取小程序的启动参数。

## 最低版本

23.12.0

## 返回值

Object - 包含启动参数的对象

### 返回参数

| 属性 | 类型 | 说明 |
|------|------|------|
| path | string | 启动路径 |
| query | Object | 启动参数 |
| scene | number | 场景值 |
| serviceConfig | Array\<Object\> | 服务器下发的启动参数 |

#### serviceConfig 数组项

| 属性 | 类型 | 说明 |
|------|------|------|
| configName | String | 配置项名称 |
| configValue | String | 配置项值 |

## 使用示例

```javascript
const { serviceConfig } = ma.getLaunchOptionsSync();
console.log('启动参数:', serviceConfig);

// 遍历配置
serviceConfig.forEach(item => {
  console.log(item.configName, item.configValue);
});
```

## 使用限制

- 最低支持版本：23.12.0
- 使用此接口需要对接小程序 saas 平台
