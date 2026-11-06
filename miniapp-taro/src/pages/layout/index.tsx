import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiRow, MauiCol } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function LayoutPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="taro-badge-banner">
        <Text>⚛️ Taro React: MauiRow & MauiCol</Text>
      </View>

      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (span: 8, 8, 8)</Text>
        <MauiRow>
          <MauiCol span={8}><View className="demo-layout-col">span: 8</View></MauiCol>
          <MauiCol span={8}><View className="demo-layout-col-alt">span: 8</View></MauiCol>
          <MauiCol span={8}><View className="demo-layout-col">span: 8</View></MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Column Offset (span: 4 + offset: 4, span: 10)</Text>
        <MauiRow>
          <MauiCol span={4}><View className="demo-layout-col">span: 4</View></MauiCol>
          <MauiCol span={10} offset={4}><View className="demo-layout-col-alt">offset: 4, span: 10</View></MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Column Offset (offset: 12, span: 12)</Text>
        <MauiRow>
          <MauiCol offset={12} span={12}><View className="demo-layout-col">offset: 12, span: 12</View></MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">4. Column Gutter (gutter: 20)</Text>
        <MauiRow gutter="20">
          <MauiCol span={8}><View className="demo-layout-col">span: 8</View></MauiCol>
          <MauiCol span={8}><View className="demo-layout-col-alt">span: 8</View></MauiCol>
          <MauiCol span={8}><View className="demo-layout-col">span: 8</View></MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">5. Flex Layout (justify: center / end)</Text>
        <MauiRow type="flex" justify="center">
          <MauiCol span={6}><View className="demo-layout-col">span: 6</View></MauiCol>
          <MauiCol span={6}><View className="demo-layout-col-alt">span: 6</View></MauiCol>
        </MauiRow>
        <View style={{ height: '10px' }} />
        <MauiRow type="flex" justify="end">
          <MauiCol span={6}><View className="demo-layout-col">span: 6</View></MauiCol>
          <MauiCol span={6}><View className="demo-layout-col-alt">span: 6</View></MauiCol>
        </MauiRow>
      </View>
    </View>
  );
}
