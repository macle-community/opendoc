import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';

export default function ScrollViewPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Horizontal ScrollView</Text>
        <ScrollView scrollX style={{ whiteSpace: 'nowrap', width: '100%' }}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <View
              key={num}
              style={{
                display: 'inline-block',
                width: '100px',
                height: '70px',
                background: '#e2e8f0',
                marginRight: '8px',
                borderRadius: '8px',
                lineHeight: '70px',
                textAlign: 'center',
                color: '#475569',
                fontWeight: 600
              }}
            >
              Item {num}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
