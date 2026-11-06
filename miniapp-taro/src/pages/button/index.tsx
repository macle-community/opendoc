import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function ButtonPage() {
  const handleClick = (type: string) => {
    Taro.showToast({ title: `Clicked ${type} button!`, icon: 'none' });
  };

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="taro-badge-banner">
        <Text>⚛️ Taro React: MauiButton</Text>
      </View>

      <View className="demo-block">
        <Text className="demo-title">1. Button Types</Text>
        <View className="demo-row">
          <MauiButton type="default" onClick={() => handleClick('default')}>default</MauiButton>
          <MauiButton type="primary" onClick={() => handleClick('primary')}>primary</MauiButton>
          <MauiButton type="info" onClick={() => handleClick('info')}>info</MauiButton>
          <MauiButton type="warning" onClick={() => handleClick('warning')}>warning</MauiButton>
          <MauiButton type="danger" onClick={() => handleClick('danger')}>danger</MauiButton>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Plain & Hairline</Text>
        <View className="demo-row">
          <MauiButton plain type="primary">plain primary</MauiButton>
          <MauiButton plain type="info">plain info</MauiButton>
          <MauiButton plain hairline type="primary">hairline primary</MauiButton>
          <MauiButton plain hairline type="info">hairline info</MauiButton>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Disabled & Loading</Text>
        <View className="demo-row">
          <MauiButton disabled type="primary">disabled</MauiButton>
          <MauiButton disabled type="info">disabled</MauiButton>
          <MauiButton loading type="primary" />
          <MauiButton loading type="primary" loading-type="spinner" />
          <MauiButton loading type="info" loading-text="Loading..." />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">4. Button Shapes & Sizes</Text>
        <View className="demo-row">
          <MauiButton square type="primary">square</MauiButton>
          <MauiButton round type="info">round</MauiButton>
          <MauiButton type="primary" size="large">large</MauiButton>
          <MauiButton type="primary" size="normal">normal</MauiButton>
          <MauiButton type="primary" size="small">small</MauiButton>
          <MauiButton type="primary" size="mini">mini</MauiButton>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">5. Block-Level & Custom Colors</Text>
        <View className="demo-col">
          <MauiButton type="primary" block>block-level element</MauiButton>
        </View>
        <View className="demo-row" style={{ marginTop: '10px' }}>
          <MauiButton color="#7232dd">single-color</MauiButton>
          <MauiButton color="#7232dd" plain>single-color plain</MauiButton>
          <MauiButton color="linear-gradient(to right, #4bb0ff, #6149f6)">Gradient color</MauiButton>
        </View>
      </View>
    </View>
  );
}
