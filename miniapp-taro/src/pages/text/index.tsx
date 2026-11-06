import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function TextPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Text Component</Text>
        <View style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Text style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }}>Headline Bold Text</Text>
          <Text style={{ fontSize: '13px', color: '#64748b' }}>Subtitle or description text style.</Text>
          <Text selectable style={{ fontSize: '13px', color: '#2563eb' }}>This text is selectable (selectable=true)</Text>
        </View>
      </View>
    </View>
  );
}
