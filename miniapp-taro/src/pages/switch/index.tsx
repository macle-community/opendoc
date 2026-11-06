import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSwitch } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function SwitchPage() {
  const [checked, setChecked] = useState(true);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Switch</Text>
        <View className="demo-row">
          <MauiSwitch checked={checked} onChange={() => setChecked(!checked)} />
          <Text style={{ fontSize: '13px' }}>State: {checked ? 'ON' : 'OFF'}</Text>
        </View>
      </View>
    </View>
  );
}
