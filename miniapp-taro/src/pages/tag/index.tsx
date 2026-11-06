import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiTag } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function TagPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Tag Types</Text>
        <View className="demo-row">
          <MauiTag type="default">Default</MauiTag>
          <MauiTag type="primary">Primary</MauiTag>
          <MauiTag type="success">Success</MauiTag>
          <MauiTag type="danger">Danger</MauiTag>
          <MauiTag type="warning">Warning</MauiTag>
        </View>
      </View>
    </View>
  );
}
