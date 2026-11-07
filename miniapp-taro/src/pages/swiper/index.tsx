import React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import './index.css';

export default function SwiperPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Interactive Swiper with Indicators & Autoplay</Text>
        <Swiper indicatorDots autoplay interval={2500} duration={500} circular style={{ height: '160px', borderRadius: '10px', overflow: 'hidden' }}>
          <SwiperItem>
            <View className="swiper-slide slide-blue"><Text className="slide-text">Slide A - Macle</Text></View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper-slide slide-green"><Text className="slide-text">Slide B - Simulator</Text></View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper-slide slide-orange"><Text className="slide-text">Slide C - OpenDoc</Text></View>
          </SwiperItem>
        </Swiper>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Circular & Vertical Swiping</Text>
        <Swiper vertical indicatorDots autoplay={false} style={{ height: '120px', borderRadius: '10px', overflow: 'hidden' }}>
          <SwiperItem><View className="swiper-slide slide-purple"><Text className="slide-text">Vertical Panel 1</Text></View></SwiperItem>
          <SwiperItem><View className="swiper-slide slide-teal"><Text className="slide-text">Vertical Panel 2</Text></View></SwiperItem>
        </Swiper>
      </View>
    </View>
  );
}