import { StyleSheet } from 'react-native';
import { Color } from '@/constants/color';
import { card } from '@/constants/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.white,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    paddingLeft: 12,
    paddingBottom: 6,
    marginTop: 16,
    color: Color.black333,
    borderBottomColor: Color.black333,
    borderBottomWidth: 1,
  },
  withPadding: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  shadow: card.shadow,
});
