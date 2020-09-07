import React from 'react';
import { View, Text } from 'react-native';
import { RNCheckBox, RNCard } from '@/components';
import globalStyles from '@/public/styles';

export const CheckBoxExp = () => {
  return (
    <View>
      <Text style={globalStyles.header}>CheckBox</Text>
      <RNCard withPadding={true} title={'Basic'}>
        <RNCheckBox>Default</RNCheckBox>
      </RNCard>
    </View>
  );
};
