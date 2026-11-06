import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiRadio, MauiRadioGroup } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function RadioPage() {
  const [radioValue, setRadioValue] = useState('1');

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Radio Group (Selected: {radioValue})</Text>
        <MauiRadioGroup value={radioValue} onChange={(e: any) => setRadioValue(e.detail || e.target?.value || '1')}>
          <MauiRadio name="1">Option 1</MauiRadio>
          <View style={{ height: '8px' }} />
          <MauiRadio name="2">Option 2</MauiRadio>
        </MauiRadioGroup>
      </View>
    </View>
  );
}
