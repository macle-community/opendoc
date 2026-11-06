import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiLoading } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function LoadingPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Loading Types</Text>
        <View className="demo-row">
          <MauiLoading />
          <MauiLoading type="spinner" />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Custom Color & Vertical Text</Text>
        <View className="demo-row">
          <MauiLoading color="#1989fa" />
          <MauiLoading size="24px" vertical>Loading...</MauiLoading>
        </View>
      </View>
    </View>
  );
}
