import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { RNActionCard } from '@/components';
import globalStyles from '@/public/styles';
const SWITCH = require('@/public/switch/switch-disabled-on.png');

const onAction = () => {
  console.log('onAction');
};

export const ActionCardExp = () => {
  return (
    <View>
      <Text style={globalStyles.header}>Action Card</Text>
      <RNActionCard
        title={'语言'}
        desc={'设置你习惯的语言'}
        rightLabel={'中文'}
        disabled={true}
      />
      <RNActionCard
        title={'语言'}
        desc={'设置你习惯的语言'}
        rightLabel={'中文'}
        action={onAction}
        style={globalStyles.margin16}
      />
      <RNActionCard
        title={'用户名'}
        disabled={true}
        rightLabel={'毛毛'}
        style={globalStyles.margin16}
      />
      <RNActionCard
        title={'用户名'}
        rightLabel={'毛毛'}
        style={globalStyles.margin16}
        action={onAction}
      />
      <RNActionCard
        title={'用户名'}
        style={globalStyles.margin16}
        action={onAction}
      />
      <RNActionCard
        title={'自定义'}
        disabled={true}
        right={<Image source={SWITCH} style={styles.icon} />}
        style={globalStyles.margin16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});
