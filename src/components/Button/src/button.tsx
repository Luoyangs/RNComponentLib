import React from 'react';
import { TouchableOpacity, Image, Text, TextStyle } from 'react-native';
import { ButtonProps, SIZE } from './types';
import styles from './styles';

export default class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    size: 'normal',
  };

  get buttonStyle() {
    const { type, primary, disabled, fullWidth, size } = this.props;
    const sizeStyle = styles[size as SIZE];
    const baseStyle = { ...styles.container, ...sizeStyle };

    // outline
    if (type === 'outline') {
      const outlineStyle = { ...baseStyle };
      if (primary) {
        Object.assign(outlineStyle, styles.primaryOutline);
      } else {
        Object.assign(outlineStyle, styles.outline);
      }
      if (disabled) {
        Object.assign(outlineStyle, styles.disabled);
      }
      if (fullWidth) {
        Object.assign(outlineStyle, styles.fullWidth);
      }

      return outlineStyle;
    }

    if (type === 'text') {
      const textStyle = { ...baseStyle, ...styles.text };
      if (disabled) {
        Object.assign(textStyle, styles.disabled);
      }
      return textStyle;
    }

    // solid
    const solidStyle = { ...baseStyle };
    if (fullWidth) {
      Object.assign(solidStyle, styles.fullWidth);
    }
    if (disabled) {
      Object.assign(solidStyle, styles.disabled);
    }
    if (primary) {
      Object.assign(solidStyle, styles.primary);
    }

    return solidStyle;
  }

  get innerTextStyle() {
    const { primary, type } = this.props;

    if (primary) {
      if (type) {
        return styles.primaryText;
      }
      return styles.whiteText;
    }
  }

  onClick = () => {
    const { onPress } = this.props;
    if (typeof onPress === 'function') {
      onPress();
    }
  };

  renderPrefix = () => {
    const { prefix, prefixIcon } = this.props;
    return prefixIcon ? (
      <Image style={[styles.icon, styles.prefixIcon]} source={prefixIcon} />
    ) : (
      prefix
    );
  };

  renderSuffix = () => {
    const { suffix, suffixIcon } = this.props;
    return suffixIcon ? (
      <Image style={[styles.icon, styles.suffixIcon]} source={suffixIcon} />
    ) : (
      suffix
    );
  };

  renderText = () => {
    const { children, size } = this.props;
    const sizeMap: Record<string, TextStyle> = {
      small: styles.smallText,
      large: styles.largeText,
    };
    if (children) {
      return (
        <Text
          style={[styles.innerText, this.innerTextStyle, sizeMap[size as SIZE]]}
        >
          {children}
        </Text>
      );
    }

    return null;
  };

  render() {
    const { disabled, style } = this.props;

    return (
      <TouchableOpacity
        style={[this.buttonStyle, style]}
        activeOpacity={disabled ? 0.5 : 0.68}
        onPress={this.onClick}
      >
        {this.renderPrefix()}
        {this.renderText()}
        {this.renderSuffix()}
      </TouchableOpacity>
    );
  }
}
