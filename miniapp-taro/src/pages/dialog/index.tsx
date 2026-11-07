import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { MauiButton } from '@macle-community/taro-plugin-macle/components-react';
import './index.css';

export default function DialogPage() {
  const showAlert = () => {
    Taro.showToast({ title: 'Dialog Verified!', icon: 'success' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Native Dialog Trigger</Text>
        <MauiButton type="primary" block onClick={showAlert}>Trigger Alert Dialog</MauiButton>
      </View>
    </View>
  );
}
