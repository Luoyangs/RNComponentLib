import { StyleSheet } from 'react-native';
import { Color } from './color';

export const card = StyleSheet.create({
  shadow: {
    shadowColor: Color.black,
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    zIndex: 2,
    elevation: 5,
  },
});
