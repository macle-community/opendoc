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

export default function MauiPopupPage() {
  
  const [showBottom, setShowBottom] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      
      <View className="demo-block">
        <Text className="demo-title">1. Bottom & Top Popups</Text>
        <View className="btn-wrap">
  <MauiButton type="primary" onClick={() => setShowBottom(true)}>Bottom Popup</MauiButton>
  <MauiButton type="info" onClick={() => setShowTop(true)}>Top Popup</MauiButton>
  <MauiPopup show={showBottom} position="bottom" round customStyle={{ height: '35%' }} onClose={() => setShowBottom(false)}>
    <View style={{ padding: '20px', textAlign: 'center' }}>Bottom Sheet Content</View>
  </MauiPopup>
  <MauiPopup show={showTop} position="top" customStyle={{ height: '25%' }} onClose={() => setShowTop(false)}>
    <View style={{ padding: '20px', textAlign: 'center' }}>Top Sheet Content</View>
  </MauiPopup>
</View>
      </View>
    </View>
  );
}
