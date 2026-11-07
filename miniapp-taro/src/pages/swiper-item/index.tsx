import React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import './index.css';

export default function SwiperItemPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Custom Swiper Item Card</Text>
        <Swiper indicatorDots style={{ height: '140px' }}>
          <SwiperItem className="swiper-custom-item">
            <View className="card-content">
              <Text className="card-title">Custom Item Container</Text>
              <Text className="card-sub">swiper-item wraps individual slides</Text>
            </View>
          </SwiperItem>
        </Swiper>
      </View>
    </View>
  );
}