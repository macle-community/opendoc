import React from 'react';
import { View, Text, Map } from '@tarojs/components';
import './index.css';

export default function MapPage() {
  const markers = [{
    id: 1,
    latitude: 31.2304,
    longitude: 121.4737,
    name: 'Macle Headquarters'
  }];

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Interactive Map with Markers & Coordinates</Text>
        <Map latitude={31.2304} longitude={121.4737} markers={markers as any} scale={14} style={{ width: '100%', height: '220px', borderRadius: '8px', overflow: 'hidden' }} />
      </View>
    </View>
  );
}