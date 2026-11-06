import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiDivider } from '@macle-community/taro-plugin-macle/dist/components-react';
import './index.css';

export default function DividerPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Divider</Text>
        <MauiDivider />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Content Position</Text>
        <MauiDivider content-position="center">Center Text</MauiDivider>
        <MauiDivider content-position="left">Left Text</MauiDivider>
        <MauiDivider content-position="right">Right Text</MauiDivider>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Dashed & Custom Colors</Text>
        <MauiDivider dashed />
        <MauiDivider text-color="#1989fa" custom-style="color: #1989fa;">Blue Divider</MauiDivider>
      </View>
    </View>
  );
}
