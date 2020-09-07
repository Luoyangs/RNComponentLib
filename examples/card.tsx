import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { RNCard, RNActionCard, ActionCardProps } from '@/components';
import globalStyles from '@/public/styles';
const SWITCH = require('@/public/switch/switch-disabled-on.png');

const actions: ActionCardProps[] = [
  {
    title: '语言',
    desc: '设置个性语言',
    rightLabel: '中文',
    disabled: false,
    showDivider: true,
  },
  {
    title: '姓名',
    desc: '请设置你的姓名',
    rightLabel: '哈哈',
    disabled: true,
  },
];

const actionList: ActionCardProps[] = [
  {
    title: '语言',
    rightLabel: '中文',
    disabled: false,
    showDivider: true,
  },
  {
    title: '兴趣',
    rightLabel: '篮球',
    disabled: true,
    showDivider: true,
  },
  {
    title: '姓名',
    rightLabel: '哈哈',
    disabled: true,
  },
];

export const CardExp = () => {
  return (
    <View>
      <Text style={globalStyles.header}>Card</Text>
      <RNCard withPadding={true} title={'这是标题'}>
        <Text style={styles.desc}>这是描述</Text>
      </RNCard>

      <RNCard style={globalStyles.margin16} title={'卡片标题'}>
        {actions.map((action, key) => (
          <RNActionCard {...action} key={key} />
        ))}
      </RNCard>

      <RNCard style={globalStyles.margin16}>
        {actionList.map((action, key) => (
          <RNActionCard {...action} key={key} />
        ))}
      </RNCard>
      <RNCard style={globalStyles.margin16}>
        <RNActionCard
          title={'自定义'}
          disabled={true}
          right={<Image source={SWITCH} style={styles.icon} />}
        />
      </RNCard>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
  desc: {
    fontSize: 12,
    color: '#666',
    lineHeight: 14,
  },
});
