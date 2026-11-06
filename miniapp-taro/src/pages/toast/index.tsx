import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function ToastPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Taro Toast Prompts</Text>
        <View className="demo-row">
          <MauiButton type="primary" onClick={() => Taro.showToast({ title: 'Success!', icon: 'success' })}>
            Success Toast
          </MauiButton>
          <MauiButton type="info" onClick={() => Taro.showToast({ title: 'Info prompt', icon: 'none' })}>
            Info Toast
          </MauiButton>
        </View>
      </View>
    </View>
  );
}
