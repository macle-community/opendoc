import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { MauiButton } from '@macle-community/taro-plugin-macle/components-react';
import './index.css';

export default function ToastPage() {
  const showSuccess = () => {
    Taro.showToast({ title: 'Success!', icon: 'success' });
  };

  const showInfo = () => {
    Taro.showToast({ title: 'Information message', icon: 'none' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Toast Notifications</Text>
        <View className="demo-row">
          <MauiButton type="primary" onClick={showSuccess}>Success Toast</MauiButton>
          <MauiButton type="info" onClick={showInfo}>Info Toast</MauiButton>
        </View>
      </View>
    </View>
  );
}
