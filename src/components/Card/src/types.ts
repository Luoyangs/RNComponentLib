import { ViewStyle } from 'react-native';

export interface CardProps {
  /**
   * 标题
   */
  title?: string;
  /**
   * 圆角
   */
  borderRadius?: number;
  /**
   * 是否展示阴影
   * 默认：true
   */
  shadow?: boolean;
  /**
   * 是否自带内边距16/12px
   */
  withPadding?: boolean;
  /**
   * 是否在标题下展示分割线
   * 默认：true
   */
  showDivider?: boolean;
  style?: ViewStyle;
}
