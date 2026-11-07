import React, { useState } from 'react';
import { View, Text, Label, Radio, RadioGroup } from '@tarojs/components';
import './index.css';

export default function RadioGroupPage() {
  const [plan, setPlan] = useState('pro');
  const plans = [
    { id: 'free', name: 'Free Tier', price: '$0' },
    { id: 'pro', name: 'Pro Plan', price: '$19/mo' },
    { id: 'team', name: 'Team Enterprise', price: '$49/mo' }
  ];

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Radio Group with Exclusive Selection</Text>
        <RadioGroup onChange={(e: any) => setPlan(e.detail.value)}>
          <View className="radio-list">
            {plans.map(p => (
              <Label key={p.id} className="radio-item">
                <Radio value={p.id} checked={p.id === plan} color="#2563eb" />
                <Text className="radio-label">{p.name} ({p.price})</Text>
              </Label>
            ))}
          </View>
        </RadioGroup>
        <View className="selected-plan">Selected: {plan}</View>
      </View>
    </View>
  );
}