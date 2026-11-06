import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiField } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function FieldPage() {
  const [text, setText] = useState('');

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Field</Text>
        <MauiField
          value={text}
          label="Username"
          placeholder="Please enter username"
          onChange={(e: any) => setText(e.detail || '')}
        />
        <Text style={{ fontSize: '12px', color: '#64748b', marginTop: '8px', display: 'block' }}>
          Current input: {text}
        </Text>
      </View>
    </View>
  );
}
