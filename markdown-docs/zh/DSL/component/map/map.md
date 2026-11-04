## Map

> map组件提供了地图展示、交互等功能。相关api:  [ma.createMapContext](CREATE_MAP_CONTEXT)

## 地图基础属性

### 属性说明

| 属性           | 类型             | 默认值 | 必填 | 说明                                                   |
| -------------- | ---------------- | ------ | ---- | ------------------------------------------------------ |
| longitude      | Number           | 116.46 | 否   | 中心经度                                               |
| latitude       | Number           | 39.92  | 否   | 中心纬度                                               |
| scale          | Number           | 16     | 否   | 缩放级别，取值范围3-20                                 |
| markers        | Array  |        | 否   | 标记点                                                 |
| polyline       | Array |        | 否   | 路线                                                   |
| circles        | Array  |        | 否   | 圆                                                     |
| include-points | Array    |        | 否   | 缩放视野以包含所有给定的坐标点                         |
| show-location  | Boolean          | false  | 否   | 显示带有方向的当前定位点（模拟器获取的定位点不带方向） |
| bindtap        | Eventhandle      |        | 否   | 点击地图时触发，e.detail={longitude,latitude}          |
| bindmarkertap  | Eventhandle      |        | 否   | 点击地图标记点触发，e.detail={markerId}                |

#### marker

标记点用于在地图上显示标记的位置

| 属性        | 说明                 | 类型     | 必填 | 备注                                                        |
|-----------|--------------------|--------|----|-----------------------------------------------------------|
| id        | 标记点id              | Number | 否  | marker点击事件会返回此id                                          |
| latitude  | 纬度                 | Number | 是  | 浮点数，范围-90~90                                              |
| longitude | 经度                 | Number | 是  | 浮点数，范围-180~180                                            |
| title     | 标注点名               | String | 否  | 点击时显示                                                     |
| iconPath  | 显示的图标              | String | 否  | 项目路径下的图片路径，仅支持本地路径                                        |
| width     | 标记图标宽度             | Number | 否  | 默认为图片实际宽度                                                 |
| height    | 标记图标高度             | Number | 否  | 默认为图片实际高度                                                 |
| anchor    | 经纬度在标注图标的锚点，默认底边中点 | Object | 否  | {x,y}， x表示横向（0-1），y表示竖向（0-1）。{x:0.5,y:1}表示底边中点（模拟器不支持该属性） |

#### polyline

指定一系列坐标点，从数组第一项连线至最后一项。绘制彩虹线时，需指定不同分段的颜色，如 points 包含 5 个点，则 colorList 应传入
4 个颜色值；若 colorList 长度小于 points.length - 1，则剩下的分段颜色与最后一项保持一致。

| 属性        | 说明    | 类型     | 必填 | 备注                                                                                      |
|-----------|-------|--------|----|-----------------------------------------------------------------------------------------|
| points    | 经纬度数组 | Array  | 是  | [{latitude:0,longitude:0}]                                                              |
| color     | 线的颜色  | String | 否  | 十六进制，如 #FFFFFF，默认值为'#000000'                                                            |
| colorList | 彩虹线   | Array  | 否  | **存在时忽略color**，如['#FF0000', '#00FF00', '#0000FF', '#112233', '#223344']，默认值为['#000000'] |
| width     | 线的宽度  | Number | 否  |                                                                                         |

#### circle

在地图上显示圆

| 属性        | 说明    | 类型     | 必填 | 备注                 |
|-----------|-------|--------|----|--------------------|
| latitude  | 纬度    | Number | 是  | 浮点数，范围-90~90       |
| longitude | 经度    | Number | 是  | 浮点数，范围-180~180     |
| color     | 描边的颜色 | String | 否  | 十六进制，默认值为'#000000' |
| fillColor | 填充颜色  | String | 否  | 十六进制               |
| radius    | 半径    | Number | 是  |                    |

示例代码

```html
// index.maml

<map id="myMap" show-location="{{showLocation}}" scale="{{scale}}" markers="{{markers}}" polyline="{{polyline}}" longitude="{{longitude}}" latitude="{{latitude}}" include-points="{{includePoints}}" circles="{{circles}}" bindmarkertap="markerTap" bindtap="mapTap"></map>
 
```
```js
// index.js 
Page({
  data: {
    markers: [],
    latitude: 31.97934,
    longitude: 118.7673113,
    circles: [
      {
        latitude: 31.9782417,
        longitude: 118.7661415,
        radius: 20,
        color: '#87CEEB',
      },
    ],
    includePoints: [
      {
        latitude: 31.9751427,
        longitude: 118.7672672,
      },
      {
        latitude: 31.9782417,
        longitude: 118.7661415,
      },
      {
        latitude: 31.97934,
        longitude: 118.7673113,
      },
    ],
    polyline: [
      {
        points: [
          {
            latitude: 31.9751427,
            longitude: 118.7672672,
          },
          {
            latitude: 31.9782417,
            longitude: 118.7661415,
          }
        ],
        color: '#FFFFFF'
      }
    ],
    showLocation: false,
    scale: 18,
  },
   markerTap(e) {
    ma.showModal({
      content: `markerTap${e}`,
    });
  },
  mapTap(e) {
    ma.showModal({
      content: `mapTap${e}`,
    });
  },
  })
  
```

#### Tips

1. 地图中的color/fillColor/colorList等需使用6位十六进制表示，如：#87CEEB
2. 地图组件的经纬度不填默认是北京的经纬度
3. 模拟器需要自行导入谷歌的APIkey，配置APIKey要开发者自行申请，如下图所示：
   ![image](GOOGLEMAP_APIKEY) 
