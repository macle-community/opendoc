import React from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.css';

export default function ButtonPage() {
  const handlePrimaryTap = () => {
    Taro.showToast({ title: 'Tapped Primary', icon: 'success' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Default Button (Normal & Disabled)</Text>
        <View className="btn-group">
          <Button type="default" hoverStartTime={200} hoverStayTime={500}>Normal Default</Button>
          <Button type="default" disabled>Default Disabled</Button>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Warn Button (Normal & Disabled)</Text>
        <View className="btn-group">
          <Button type="warn">Warn Action</Button>
          <Button type="warn" disabled>Warn Disabled</Button>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Primary Button & Form Actions</Text>
        <View className="btn-group">
          <Button type="primary" onClick={handlePrimaryTap}>Primary Button</Button>
          <Button type="primary" size="mini" style={{ alignSelf: 'flex-start' }}>Mini Primary</Button>
        </View>
      </View>
    </View>
  );
}