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

export default function MauiIconPage() {
  
  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      
      <View className="demo-block">
        <Text className="demo-title">1. Basic Icons & Sizes</Text>
        <View className="icon-row">
  <MauiIcon name="success" size="32px" color="#07c160" />
  <MauiIcon name="cross" size="32px" color="#ee0a24" />
  <MauiIcon name="star" size="32px" color="#ff976a" />
  <MauiIcon name="like" size="32px" color="#1989fa" />
</View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Badge & Dot Information</Text>
        <View className="icon-row">
  <MauiIcon name="chat-o" size="32px" dot />
  <MauiIcon name="chat-o" size="32px" info="9" />
  <MauiIcon name="chat-o" size="32px" info="99+" />
</View>
      </View>
    </View>
  );
}
