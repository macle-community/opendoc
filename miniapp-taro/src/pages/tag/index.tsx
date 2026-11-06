import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiTag } from '@macle-community/taro-plugin-macle/dist/components-react';
import './index.css';

export default function TagPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Tag Types</Text>
        <View className="demo-row">
          <MauiTag type="primary">Primary</MauiTag>
          <MauiTag type="success">Success</MauiTag>
          <MauiTag type="danger">Danger</MauiTag>
          <MauiTag type="warning">Warning</MauiTag>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Plain & Shapes</Text>
        <View className="demo-row">
          <MauiTag plain type="primary">Plain</MauiTag>
          <MauiTag round type="primary">Round</MauiTag>
          <MauiTag mark type="primary">Mark</MauiTag>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Custom Colors & Sizes</Text>
        <View className="demo-row">
          <MauiTag color="#7232dd">Custom #7232dd</MauiTag>
          <MauiTag size="large" type="primary">Large</MauiTag>
          <MauiTag size="medium" type="primary">Medium</MauiTag>
        </View>
      </View>
    </View>
  );
}
