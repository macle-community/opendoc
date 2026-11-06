import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiProgress } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function ProgressPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Progress Bars</Text>
        <View style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <MauiProgress percentage={50} />
          <MauiProgress percentage={75} stroke-width="8" />
          <MauiProgress percentage={100} color="#07c160" />
        </View>
      </View>
    </View>
  );
}
