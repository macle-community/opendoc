import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { MauiList, MauiListItem } from '@macle-community/taro-plugin-macle/dist/components-react';
import './index.css';

export default function ListPage() {
  const handleClick = () => {
    Taro.showToast({ title: 'Item Clicked', icon: 'none' });
  };

  return (
    <View className="page-container">
      <View className="demo-section">
        <Text className="demo-section-title">1. Basic Usage (基础用法)</Text>
        <MauiList header="Basic Usage" radius footer="Top Description">
          <MauiListItem>Item 1 (列表项 1)</MauiListItem>
          <MauiListItem>Item 2 (列表项 2)</MauiListItem>
          <MauiListItem>Item 3 (列表项 3)</MauiListItem>
        </MauiList>
      </View>

      <View className="demo-section">
        <Text className="demo-section-title">2. List Item Properties (属性演示)</Text>
        <MauiList radius>
          <MauiListItem arrow="right">Arrow Right (右箭头)</MauiListItem>
          <MauiListItem arrow="up">Arrow Up (上箭头)</MauiListItem>
          <MauiListItem arrow="down">Arrow Down (下箭头)</MauiListItem>
          <MauiListItem brief="Second line auxiliary description">Brief Information (简述)</MauiListItem>
          <MauiListItem disabled>Disabled Item (禁用状态)</MauiListItem>
        </MauiList>
      </View>

      <View className="demo-section">
        <Text className="demo-section-title">3. Extended Usage (扩展属性)</Text>
        <MauiList header="Additional Information" radius footer="Synced with DevToolkit 26.6.0">
          <MauiListItem extra="Extra Text" extraBrief="Auxiliary on Right">
            Information Display
          </MauiListItem>
          <MauiListItem showDivider={false}>
            No Divider Underscore (无底部分割线)
          </MauiListItem>
          <MauiListItem title="Title Property">
            Body Slot Content
          </MauiListItem>
          <MauiListItem title="Interactive Item" arrow="right" onClick={handleClick}>
            Click to Test Toast
          </MauiListItem>
        </MauiList>
      </View>
    </View>
  );
}

