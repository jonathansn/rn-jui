import React from 'react'
import { TextInput as NativeTextInput, TextInputProps as NativeTextInputProps, View, Text } from 'react-native';
import { colors } from '../../theme';
import styles from './styles';

interface TextInputProps extends NativeTextInputProps {
  label?: string
}

const defaultProps: TextInputProps & Partial<NativeTextInputProps> = {
}

export const TextInput = (props: TextInputProps) => {
  const { label } = props

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{ label }</Text>}
      <NativeTextInput
        autoCapitalize="characters"
        selectionColor={colors.secondary}
        {...props}
      />
    </View>
  );
};


TextInput.defaultProps = defaultProps