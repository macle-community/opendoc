import React from 'react';
import { View, Text, Icon } from '@tarojs/components';
import './index.css';

export default function IconPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Standard System Icons</Text>
        <View className="icon-grid">
          <View className="icon-item"><Icon type="success" size="32" /><Text>success</Text></View>
          <View className="icon-item"><Icon type="info" size="32" /><Text>info</Text></View>
          <View className="icon-item"><Icon type="warn" size="32" /><Text>warn</Text></View>
          <View className="icon-item"><Icon type="waiting" size="32" /><Text>waiting</Text></View>
          <View className="icon-item"><Icon type="cancel" size="32" /><Text>cancel</Text></View>
          <View className="icon-item"><Icon type="search" size="32" /><Text>search</Text></View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Custom Icon Sizes and Colors</Text>
        <View className="demo-row" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Icon type="success" size="24" color="#10b981" />
          <Icon type="success" size="36" color="#3b82f6" />
          <Icon type="success" size="48" color="#f59e0b" />
          <Icon type="success" size="60" color="#ef4444" />
        </View>
      </View>
    </View>
  );
}