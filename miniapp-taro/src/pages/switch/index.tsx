import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSwitch } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function SwitchPage() {
  const [checked, setChecked] = useState(true);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (State: {checked ? 'ON' : 'OFF'})</Text>
        <MauiSwitch checked={checked} onChange={(e: any) => setChecked(e.detail)} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Disabled & Loading</Text>
        <View className="demo-row">
          <MauiSwitch disabled checked={true} />
          <MauiSwitch disabled checked={false} />
          <MauiSwitch loading checked={true} />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Custom Size & Colors</Text>
        <View className="demo-row">
          <MauiSwitch size="24px" checked={checked} onChange={(e: any) => setChecked(e.detail)} />
          <MauiSwitch active-color="#07c160" inactive-color="#ee0a24" checked={checked} onChange={(e: any) => setChecked(e.detail)} />
        </View>
      </View>
    </View>
  );
}
