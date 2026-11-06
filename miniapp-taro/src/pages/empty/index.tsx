import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiEmpty } from '@macle-community/taro-plugin-macle/dist/components-react';
import './index.css';

export default function EmptyPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage</Text>
        <MauiEmpty description="No Data" />
      </View>
    </View>
  );
}
