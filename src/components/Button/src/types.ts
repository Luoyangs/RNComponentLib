import { ImageSourcePropType, ViewStyle } from 'react-native';
export type SIZE = 'normal' | 'small' | 'large';
export interface ButtonProps {
  /**
   * 后缀图片
   */
  suffixIcon?: ImageSourcePropType;
  /**
   * 前缀图片
   */
  prefixIcon?: ImageSourcePropType;
  /**
   * 后缀
   */
  suffix?: Element;
  /**
   * 前缀
   */
  prefix?: Element;
  /**
   * 是否可用
   */
  disabled?: boolean;
  /**
   * 主色调
   */
  primary?: boolean;
  /**
   * 占满整个宽度
   */
  fullWidth?: boolean;
  /**
   * 类型
   */
  type?: 'outline' | 'text';
  /**
   * 按钮的尺寸
   * 默认: normal
   */
  size?: SIZE;
  /**
   * 点击后出现loading的动效
   */
  async?: boolean;
  style?: ViewStyle;

  onPress?: () => void;
}
