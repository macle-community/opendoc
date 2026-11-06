import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiLoading } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function LoadingPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Loading Types</Text>
        <View className="demo-row">
          <MauiLoading />
          <MauiLoading type="spinner" />
          <MauiLoading color="#1989fa">Loading...</MauiLoading>
        </View>
      </View>
    </View>
  );
}
