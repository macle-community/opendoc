import React, { useState } from 'react';
import { View, Text, Textarea } from '@tarojs/components';
import './index.css';

export default function TextareaPage() {
  const [len, setLen] = useState(0);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Multi-Line Textarea with Placeholder</Text>
        <View className="textarea-wrp">
          <Textarea className="std-textarea" placeholder="Enter comments or description..." onInput={(e: any) => setLen(e.detail.value?.length || 0)} maxLength={200} />
          <View className="char-count">{len} / 200</View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Auto-Height Textarea with Maxlength</Text>
        <View className="textarea-wrp">
          <Textarea autoHeight placeholder="Auto-height textarea expanding with lines" className="std-textarea" />
        </View>
      </View>
    </View>
  );
}