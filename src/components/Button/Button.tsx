import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  children: string;
  type: 'default' | 'primary'
  onPress?: Function;
  disabled?: boolean;
}

const defaultProps: Omit<Props, 'children'> = {
  type: 'default',
  disabled: false
}

export const Button = (props: Props) => {
  const { children, type, onPress, disabled, ...rest } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress ? onPress() : null}
      style={[
        type === 'default' && styles.defaultContainer,
        !disabled && type === 'primary' && styles.primaryContainer,
        disabled && styles.disabledContainer,
      ]}
      {...rest}>
      <Text
      style={[
        type === 'default' && styles.defaultChildren,
        !disabled && type === 'primary' && styles.primaryChildren,
        disabled && styles.disabledChildren,
      ]}
      >
        {children.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};


Button.defaultProps = defaultProps