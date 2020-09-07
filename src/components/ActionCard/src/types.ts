import { ViewStyle } from 'react-native';

export interface ActionCardProps {
  /**
   * 标题
   */
  title?: string;
  /**
   * 左侧描述文字
   */
  desc?: string;
  /**
   * 右侧的说明文字
   */
  rightLabel?: string;
  /**
   * 自定义View
   */
  right?: Element;
  /**
   * 点击事件
   */
  action?: () => void;
  /**
   * 是否可以点击
   * true: 将隐藏右侧的箭头
   */
  disabled?: boolean;
  /**
   * 是否展示底部分隔符
   */
  showDivider?: boolean;
  /**
   * 是否展示阴影
   */
  shadow?: boolean;
  style?: ViewStyle;
}
