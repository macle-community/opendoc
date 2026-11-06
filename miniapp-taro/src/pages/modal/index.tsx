import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { MauiModal, MauiCellGroup, MauiCell } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function ModalPage() {
  const [currentModal, setCurrentModal] = useState<string>('');

  const showModal = (val: string) => {
    setCurrentModal(val);
  };

  const handleClose = () => {
    setCurrentModal('');
  };

  const handlePrimary = () => {
    Taro.showToast({ title: 'Primary Clicked', icon: 'none' });
    setCurrentModal('');
  };

  const handleSecondary = () => {
    Taro.showToast({ title: 'Secondary Clicked', icon: 'none' });
    setCurrentModal('');
  };

  const handleCancel = () => {
    Taro.showToast({ title: 'Cancel Clicked', icon: 'none' });
    setCurrentModal('');
  };

  return (
    <View className="page-container">
      {/* Modals */}
      <MauiModal
        title="Basic Modal"
        content="This is a basic MAUI modal dialog."
        visible={currentModal === 'modal1'}
        primaryButtonText="Confirm"
        onClose={handleClose}
        onPrimaryButtonTap={handlePrimary}
      />

      <MauiModal
        content="Alert content without title."
        visible={currentModal === 'modal2'}
        primaryButtonText="Confirm"
        onClose={handleClose}
        onPrimaryButtonTap={handlePrimary}
      />

      <MauiModal
        title="Two-Button Modal"
        content="Horizontal layout with primary and secondary buttons."
        visible={currentModal === 'modal3'}
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
        onClose={handleClose}
        onPrimaryButtonTap={handlePrimary}
        onSecondaryButtonTap={handleSecondary}
      />

      <MauiModal
        title="Three-Button Modal"
        content="Modal with primary, secondary, and cancel actions."
        visible={currentModal === 'modal4'}
        primaryButtonText="Primary"
        secondaryButtonText="Secondary"
        cancelButtonText="Cancel"
        onClose={handleClose}
        onPrimaryButtonTap={handlePrimary}
        onSecondaryButtonTap={handleSecondary}
        onCancelButtonTap={handleCancel}
      />

      <MauiModal
        title="Focus Mode"
        content="Prominent single action button in focus style."
        visible={currentModal === 'modal5'}
        type="focus"
        primaryButtonText="I Understand"
        onClose={handleClose}
        onPrimaryButtonTap={handlePrimary}
      />

      <MauiModal
        title="Closable Modal"
        content="Focus mode modal featuring an explicit close (X) icon."
        visible={currentModal === 'modal6'}
        type="focus"
        closable
        primaryButtonText="Got It"
        onClose={handleClose}
        onPrimaryButtonTap={handlePrimary}
      />

      {/* Trigger Cells */}
      <View className="demo-section">
        <Text className="demo-section-title">1. Standard Modals (常规弹窗)</Text>
        <MauiCellGroup>
          <MauiCell title="Basic Modal (基础弹窗)" value="Open" onClick={() => showModal('modal1')} />
          <MauiCell title="Alert (无标题弹窗)" value="Open" onClick={() => showModal('modal2')} />
          <MauiCell title="Two Buttons (双按钮)" value="Open" onClick={() => showModal('modal3')} />
          <MauiCell title="Three Buttons (三按钮)" value="Open" onClick={() => showModal('modal4')} />
        </MauiCellGroup>
      </View>

      <View className="demo-section">
        <Text className="demo-section-title">2. Focus Mode (强调模式)</Text>
        <MauiCellGroup>
          <MauiCell title="Focus Action (强调主按钮)" value="Open" onClick={() => showModal('modal5')} />
          <MauiCell title="Closable (含右上角关闭图标)" value="Open" onClick={() => showModal('modal6')} />
        </MauiCellGroup>
      </View>
    </View>
  );
}

