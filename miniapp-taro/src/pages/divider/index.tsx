import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiDivider } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function DividerPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Dividers</Text>
        <MauiDivider contentPosition="center">Text Center</MauiDivider>
        <MauiDivider contentPosition="left">Text Left</MauiDivider>
        <MauiDivider dashed>Dashed Divider</MauiDivider>
      </View>
    </View>
  );
}
