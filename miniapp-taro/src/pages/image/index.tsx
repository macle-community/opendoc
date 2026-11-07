import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import './index.css';

export default function ImagePage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Image Scaling Modes (scaleToFill, aspectFit, aspectFill)</Text>
        <View className="img-grid">
          <View className="img-card">
            <Image className="demo-img" mode="aspectFit" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&q=80" />
            <Text className="img-label">mode="aspectFit"</Text>
          </View>
          <View className="img-card">
            <Image className="demo-img" mode="aspectFill" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&q=80" />
            <Text className="img-label">mode="aspectFill"</Text>
          </View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Local & Remote Image Source</Text>
        <View className="img-box">
          <Image className="wide-img" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" mode="widthFix" />
        </View>
      </View>
    </View>
  );
}