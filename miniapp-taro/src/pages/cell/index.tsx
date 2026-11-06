import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiCell, MauiCellGroup } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function CellPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage</Text>
        <MauiCellGroup>
          <MauiCell title="Cell Title" value="Content" />
          <MauiCell title="Cell Title" value="Content" label="Description information" />
        </MauiCellGroup>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Navigation & Arrow</Text>
        <MauiCellGroup>
          <MauiCell title="URL Navigation" is-link onClick={() => Taro.showToast({ title: 'Navigated!', icon: 'none' })} />
          <MauiCell title="Arrow Direction" is-link arrow-direction="down" value="Detail" />
        </MauiCellGroup>
      </View>
    </View>
  );
}
