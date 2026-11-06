import React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import './index.css';

export default function SwiperPage() {
  return (
    <View className="page-body">
      <View className="demo-block" style={{ padding: 0, overflow: 'hidden' }}>
        <Swiper indicatorDots autoplay interval={3000} duration={500} style={{ height: '160px' }}>
          <SwiperItem>
            <View className="swiper-slide slide-1"><Text>Slide 1</Text></View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper-slide slide-2"><Text>Slide 2</Text></View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper-slide slide-3"><Text>Slide 3</Text></View>
          </SwiperItem>
        </Swiper>
      </View>
    </View>
  );
}
