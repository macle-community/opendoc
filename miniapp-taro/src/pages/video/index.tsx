import React from 'react';
import { View, Text, Video } from '@tarojs/components';
import './index.css';

export default function VideoPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Video Player with Controls & Poster</Text>
        <View className="video-container">
          <Video id="myVideo" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80" controls style={{ width: '100%', height: '200px', borderRadius: '8px' }} />
        </View>
      </View>
    </View>
  );
}