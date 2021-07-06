import React from 'react';
import { Text as NativeText, TextProps } from 'react-native';
import styles from './styles';

export const Text: React.FC<TextProps> = (props) => {
  const { style, ...rest } = props;
  return (
    <NativeText style={[styles.base, props.style]} {...rest}>
      {props.children}
    </NativeText>
  );
};