import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import {
  MauiButton,
  MauiCell,
  MauiCellGroup,
  MauiCheckbox,
  MauiCheckboxGroup,
  MauiCol,
  MauiRow,
  MauiDialog,
  MauiDivider,
  MauiEmpty,
  MauiField,
  MauiIcon,
  MauiImage,
  MauiLoading,
  MauiOverlay,
  MauiPopup,
  MauiProgress,
  MauiRadio,
  MauiRadioGroup,
  MauiSidebar,
  MauiSidebarItem,
  MauiSlider,
  MauiStepper,
  MauiSteps,
  MauiSticky,
  MauiSwitch,
  MauiTab,
  MauiTabs,
  MauiTag,
  MauiTitleBar,
  MauiToast,
  MauiModal,
  MauiList,
  MauiListItem
} from '@macle-community/taro-plugin-macle/components-react';
import './index.css';

export default function MauiDividerPage() {
  
  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage & Text Position</Text>
        <View>
  <MauiDivider />
  <MauiDivider contentPosition="center">Centered Text</MauiDivider>
  <MauiDivider contentPosition="left">Left Text</MauiDivider>
  <MauiDivider contentPosition="right">Right Text</MauiDivider>
</View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Dashed & Custom Color</Text>
        <View>
  <MauiDivider dashed>Dashed Line</MauiDivider>
  <MauiDivider customStyle={{ color: '#1989fa', borderColor: '#1989fa' }}>Custom Color</MauiDivider>
</View>
      </View>
    </View>
  );
}
