import { StyleSheet } from 'react-native';
import { Color } from '@/constants/color';
const SMALL_PADDING = 4;
const NORMAL_PADDING = 8;
const LARGE_PADDING = 11;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: NORMAL_PADDING,
    backgroundColor: Color.grayD8,
    borderRadius: 3,
  },
  small: {
    paddingVertical: SMALL_PADDING,
  },
  large: {
    paddingVertical: LARGE_PADDING,
  },
  normal: {
    paddingVertical: NORMAL_PADDING,
  },
  primary: {
    backgroundColor: Color.primary,
  },
  outline: {
    borderWidth: 0.5,
    borderColor: Color.black54,
    backgroundColor: Color.transparent,
  },
  primaryOutline: {
    borderWidth: 0.5,
    borderColor: Color.primary,
    backgroundColor: Color.primaryLight,
  },
  text: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: Color.transparent,
    borderWidth: 0,
  },
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  icon: {},
  prefixIcon: {},
  suffixIcon: {},
  innerText: {
    fontSize: 12,
    color: Color.black333,
    lineHeight: 16,
  },
  whiteText: {
    color: Color.white,
  },
  primaryText: {
    color: Color.primary,
  },
  smallText: {
    fontSize: 11,
    lineHeight: 14,
  },
  largeText: {
    fontSize: 16,
    lineHeight: 20,
  },
});
