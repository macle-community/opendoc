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

export default function MauiCheckboxPage() {
  
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [groupVal, setGroupVal] = useState(['apple', 'banana']);

  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage & Custom Shape</Text>
        <View className="item-col">
  <MauiCheckbox value={checked1} onChange={setChecked1}>Basic Checkbox</MauiCheckbox>
  <MauiCheckbox value={checked2} shape="square" onChange={setChecked2}>Square Checkbox</MauiCheckbox>
  <MauiCheckbox value={false} disabled>Disabled Checkbox</MauiCheckbox>
</View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Custom Color & Checkbox Group</Text>
        <View className="item-col">
  <MauiCheckbox value={true} checkedColor="#07c160">Custom Color (#07c160)</MauiCheckbox>
  <MauiCheckboxGroup value={groupVal}>
    <MauiCheckbox name="apple">Apple</MauiCheckbox>
    <MauiCheckbox name="banana">Banana</MauiCheckbox>
    <MauiCheckbox name="orange">Orange</MauiCheckbox>
  </MauiCheckboxGroup>
</View>
      </View>
    </View>
  );
}
