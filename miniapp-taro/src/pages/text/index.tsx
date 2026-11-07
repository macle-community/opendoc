import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function TextPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Text & Selectable Text</Text>
        <View className="text-group">
          <Text className="text-headline">Standard Headline Text</Text>
          <Text className="text-sub">Regular secondary description text paragraph.</Text>
          <Text selectable className="text-selectable">This text is selectable (user-select / selectable=true)</Text>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Continuous Space Display (ensp, emsp, nbsp)</Text>
        <View className="text-group">
          <Text space="ensp">Half-width   space   (ensp)</Text>
          <Text space="emsp">Full-width   space   (emsp)</Text>
          <Text space="nbsp">Non-breaking   space   (nbsp)</Text>
        </View>
      </View>
    </View>
  );
}