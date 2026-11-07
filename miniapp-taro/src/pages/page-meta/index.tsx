import React from 'react';
import { View, Text, PageMeta } from '@tarojs/components';
import './index.css';

export default function PageMetaPage() {
  return (
    <View className="page-body">
      <PageMeta backgroundColor="#f8fafc" pageStyle="padding: 12px;" />
      <View className="demo-block">
        <Text className="demo-title">1. Dynamic Page Meta Configuration</Text>
        <View className="meta-content">
          <Text className="meta-title">Page Meta Defined</Text>
          <Text className="meta-desc">Configures root page styling dynamically.</Text>
        </View>
      </View>
    </View>
  );
}