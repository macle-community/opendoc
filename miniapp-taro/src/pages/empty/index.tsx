import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiEmpty, MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function EmptyPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Empty State</Text>
        <MauiEmpty description="No Data Available">
          <MauiButton round type="danger" size="small" onClick={() => Taro.showToast({ title: 'Refreshing...', icon: 'loading' })}>
            Refresh
          </MauiButton>
        </MauiEmpty>
      </View>
    </View>
  );
}
