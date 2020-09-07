import React from 'react';
import { View, Text } from 'react-native';
import { RNButton, RNCard } from '@/components';
import globalStyles from '@/public/styles';

export const ButtonExp = () => {
  return (
    <View>
      <Text style={globalStyles.header}>Button</Text>
      <RNCard withPadding={true} title={'Default Button'}>
        <RNButton>Default</RNButton>
        <RNButton primary style={globalStyles.margin16}>
          Primary
        </RNButton>
        <RNButton type="outline" style={globalStyles.margin16}>
          Outline
        </RNButton>
        <RNButton type="text" style={globalStyles.margin16}>
          Text
        </RNButton>
      </RNCard>

      <RNCard
        withPadding={true}
        title={'All Types'}
        style={globalStyles.margin16}
      >
        <RNButton type="outline">Outline</RNButton>
        <RNButton type="outline" primary style={globalStyles.margin16}>
          Primary Outline
        </RNButton>
        <RNButton type="text" style={globalStyles.margin16}>
          Text
        </RNButton>
        <RNButton type="text" primary style={globalStyles.margin16}>
          Primary Text
        </RNButton>
      </RNCard>

      <RNCard
        withPadding={true}
        title={'All Size'}
        style={globalStyles.margin16}
      >
        <RNButton primary size="small">
          small
        </RNButton>
        <RNButton primary style={globalStyles.margin16}>
          Default
        </RNButton>
        <RNButton primary size="large" style={globalStyles.margin16}>
          Large
        </RNButton>
      </RNCard>

      <RNCard
        withPadding={true}
        title={'Full Width'}
        style={globalStyles.margin16}
      >
        <RNButton type="outline" fullWidth style={globalStyles.margin16}>
          Outline
        </RNButton>
        <RNButton
          type="outline"
          primary
          fullWidth
          style={globalStyles.margin16}
        >
          Primary Outline
        </RNButton>
        <RNButton fullWidth style={globalStyles.margin16}>
          Default
        </RNButton>
        <RNButton fullWidth primary style={globalStyles.margin16}>
          Primary
        </RNButton>
      </RNCard>

      <RNCard
        withPadding={true}
        title={'Disabled'}
        style={globalStyles.margin16}
      >
        <RNButton type="outline" disabled style={globalStyles.margin16}>
          Outline
        </RNButton>
        <RNButton type="outline" primary disabled style={globalStyles.margin16}>
          Primary Outline
        </RNButton>
        <RNButton disabled style={globalStyles.margin16}>
          Default
        </RNButton>
        <RNButton disabled primary style={globalStyles.margin16}>
          Primary
        </RNButton>
        <RNButton type="text" disabled style={globalStyles.margin16}>
          Text
        </RNButton>
      </RNCard>
    </View>
  );
};
