import React from 'react';
import { View, Text } from '@tarojs/components';

export default function TextPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Selectable Text</Text>
        <Text selectable style={{ fontSize: '14px', color: '#334155' }}>
          This text is selectable by long press in the mini program!
        </Text>
      </View>
    </View>
  );
}
