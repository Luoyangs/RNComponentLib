import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ActionCardProps } from './types';
import styles from './styles';
const ARROW_RIGHT = require('../assets/right.png');

export default class Card extends React.Component<ActionCardProps> {
  private onAction = () => {
    const { action, disabled } = this.props;
    return action && !disabled ? action() : null;
  };

  private renderLeft = () => {
    const { title, desc } = this.props;
    if (title) {
      return (
        <View style={styles.left}>
          <Text style={styles.title}>{title}</Text>
          {desc && <Text style={styles.desc}>{desc}</Text>}
        </View>
      );
    }

    return null;
  };

  private renderRight = () => {
    const { rightLabel, disabled, right } = this.props;
    return (
      <TouchableOpacity
        style={styles.right}
        activeOpacity={disabled ? 1 : undefined}
        onPress={this.onAction}
      >
        {(rightLabel && <Text style={styles.rightLabel}>{rightLabel}</Text>) ||
          right}
        {!disabled && <Image source={ARROW_RIGHT} style={styles.arrowRight} />}
      </TouchableOpacity>
    );
  };

  render() {
    const { showDivider, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.renderLeft()}
        {this.renderRight()}
        {showDivider && <View style={styles.divider} />}
      </View>
    );
  }
}
