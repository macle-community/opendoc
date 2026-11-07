import React from 'react';
import { View, Text, Form, Input, Switch, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.css';

export default function FormPage() {
  const onSubmit = (e: any) => {
    Taro.showModal({ title: 'Form Submitted', content: JSON.stringify(e.detail.value), showCancel: false });
  };
  const onReset = () => {
    Taro.showToast({ title: 'Form Reset', icon: 'none' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Form Container with Submit & Reset Handlers</Text>
        <Form onSubmit={onSubmit} onReset={onReset}>
          <View className="form-field">
            <Text className="form-label">Username:</Text>
            <Input name="username" className="form-input" placeholder="Enter username" />
          </View>
          <View className="form-field">
            <Text className="form-label">Notifications:</Text>
            <Switch name="notify" checked color="#2563eb" />
          </View>
          <View className="form-actions">
            <Button formType="submit" type="primary" size="mini">Submit</Button>
            <Button formType="reset" type="default" size="mini">Reset</Button>
          </View>
        </Form>
      </View>
    </View>
  );
}