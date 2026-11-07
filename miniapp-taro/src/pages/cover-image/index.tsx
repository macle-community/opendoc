import React from 'react';
import { View, Text, CoverImage } from '@tarojs/components';
import './index.css';

export default function CoverImagePage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Cover Image Overlay on Media Component</Text>
        <View className="media-container" style={{ position: 'relative', height: '160px', background: '#1e293b', borderRadius: '10px' }}>
          <CoverImage className="cover-logo" src="https://img.icons8.com/color/96/play--v1.png" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '48px', height: '48px' }} />
        </View>
      </View>
    </View>
  );
}