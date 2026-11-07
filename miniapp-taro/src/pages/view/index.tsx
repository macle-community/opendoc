import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function ViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Flex Direction (Row & Column Layout)</Text>
        <View className="page-section">
          <View className="page-section-title">flex-direction: row</View>
          <View className="flex-row">
            <View className="flex-item demo-bg-red">A</View>
            <View className="flex-item demo-bg-green">B</View>
            <View className="flex-item demo-bg-blue">C</View>
          </View>
          <View className="page-section-title" style={{ marginTop: '16px' }}>flex-direction: column</View>
          <View className="flex-col">
            <View className="flex-item demo-bg-red">Row 1</View>
            <View className="flex-item demo-bg-green">Row 2</View>
            <View className="flex-item demo-bg-blue">Row 3</View>
          </View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Stream Post Feed with Hover State</Text>
        <View className="stream">
          <View className="post" hoverClass="post-hover" hoverStartTime={50} hoverStayTime={400}>
            <View className="post-user">
              <View className="post-avatar">Z</View>
              <Text className="post-name">Zoe</Text>
            </View>
            <View className="post-body">
              <View className="post-content">Welcome to Macle Mini Program development!</View>
              <View className="post-date">June 12</View>
            </View>
          </View>
          <View className="post" hoverClass="post-hover">
            <View className="post-user">
              <View className="post-avatar">J</View>
              <Text className="post-name">Jim</Text>
            </View>
            <View className="post-body">
              <View className="post-content">Great! How can I preview on the Web Simulator?</View>
              <View className="post-date">June 13</View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}