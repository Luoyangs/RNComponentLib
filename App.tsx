import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
// <% combination temp start %>
import { ActionCardExp } from '@/examples/action-card';
import { ButtonExp } from '@/examples/button';
import { CardExp } from '@/examples/card';
// <% combination temp end %>

const App = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
    >
      <ButtonExp />
      <ActionCardExp />
      <CardExp />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f5f5f5',
  },
});

export default App;
