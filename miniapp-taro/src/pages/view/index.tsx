import React from 'react';
import { View, Text } from '@tarojs/components';

export default function ViewPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Flex Container</Text>
        <View style={{ display: 'flex', gap: '8px' }}>
          <View style={{ flex: 1, background: '#e0f2fe', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
            <Text style={{ color: '#0369a1', fontWeight: 600 }}>Box 1</Text>
          </View>
          <View style={{ flex: 1, background: '#fef3c7', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
            <Text style={{ color: '#b45309', fontWeight: 600 }}>Box 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
