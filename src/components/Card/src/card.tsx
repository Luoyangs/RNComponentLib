import React from 'react';
import { View, Text } from 'react-native';
import { CardProps } from './types';
import styles from './styles';

export default class Card extends React.Component<CardProps> {
  static defaultProps = {
    shadow: true,
    showDivider: true,
  };

  get containerStyle() {
    const result = { ...styles.container };
    const { borderRadius, shadow, style, withPadding } = this.props;
    if (typeof borderRadius === 'number') {
      Object.assign(result, { borderRadius });
    }
    if (shadow) {
      Object.assign(result, styles.shadow);
    }
    if (withPadding) {
      Object.assign(result, styles.withPadding);
    }
    if (style && typeof style === 'object') {
      Object.assign(result, style);
    }

    return result;
  }

  get titleStyle() {
    const { withPadding } = this.props;
    return withPadding
      ? { ...styles.title, ...{ paddingLeft: 0, marginTop: 0 } }
      : styles.title;
  }

  render() {
    const { title, children } = this.props;
    return (
      <View style={this.containerStyle}>
        {title && <Text style={this.titleStyle}>{title}</Text>}
        {children}
      </View>
    );
  }
}
