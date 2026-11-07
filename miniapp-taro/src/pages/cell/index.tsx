import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiCell, MauiCellGroup } from '@macle-community/taro-plugin-macle/components-react';
import './index.css';

export default function CellPage() {
  return (
    <View className="page-body">
      <View className="demo-block" style={{ padding: 0, overflow: 'hidden' }}>
        <Text className="demo-title" style={{ padding: '16px 16px 8px 16px' }}>1. Basic Usage</Text>
        <MauiCellGroup>
          <MauiCell title="Cell title" value="Content" />
          <MauiCell title="Cell title" value="Content" label="Description" />
        </MauiCellGroup>
      </View>

      <View className="demo-block" style={{ padding: 0, overflow: 'hidden' }}>
        <Text className="demo-title" style={{ padding: '16px 16px 8px 16px' }}>2. Cell Size & Links</Text>
        <MauiCellGroup>
          <MauiCell title="Large Cell" value="Content" size="large" label="Description" />
          <MauiCell title="Navigation Link" is-link />
          <MauiCell title="Value Link" is-link value="Detail" />
        </MauiCellGroup>
      </View>
    </View>
  );
}
