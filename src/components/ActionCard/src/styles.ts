import { StyleSheet } from 'react-native';
import { Color } from '@/constants/color';

export default StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.white,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  left: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
    color: Color.black333,
  },
  desc: {
    fontSize: 12,
    lineHeight: 14,
    color: Color.black999,
  },
  right: {
    textAlign: 'right',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightLabel: {
    fontSize: 14,
    lineHeight: 16,
    color: Color.black40,
  },
  arrowRight: {
    height: 12,
    width: 12,
  },
  divider: {
    position: 'absolute',
    left: 12,
    bottom: 0,
    right: 0,
    height: 0.5,
    backgroundColor: Color.grayE4,
  },
});
