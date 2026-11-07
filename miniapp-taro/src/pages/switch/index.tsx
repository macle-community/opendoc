import React, { useState } from 'react';
import { View, Text, Switch } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.css';

export default function SwitchPage() {
  const [isEnabled, setIsEnabled] = useState(true);
  const onToggle = (e: any) => {
    setIsEnabled(e.detail.value);
    Taro.showToast({ title: e.detail.value ? 'Enabled' : 'Disabled', icon: 'none' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Switch Selector with Change Event</Text>
        <View className="switch-row">
          <Text className="sw-title">Notification Enabled:</Text>
          <Switch checked={isEnabled} onChange={onToggle} color="#2563eb" />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Checkbox Style Switch & Custom Color</Text>
        <View className="switch-row">
          <Text className="sw-title">Checkbox Style Switch:</Text>
          <Switch type="checkbox" checked color="#10b981" />
        </View>
      </View>
    </View>
  );
}