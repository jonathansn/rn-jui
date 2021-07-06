import React from 'react'
import { View, ViewProps, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Text } from '../Text'

interface SelectInputProps {
  label?: string
  onPress?: Function
  value?: string
}

const defaultProps: SelectInputProps & Partial<ViewProps> = {}

export const SelectInput = (props: SelectInputProps) => {
  const { label, onPress, value } = props

  return (    
    <TouchableOpacity
      onPress={() => onPress ? onPress() : null}
      style={styles.container}
    >
      {label && <Text style={styles.label}>{ label }</Text>}
      {value && <Text style={styles.value}>{ value }</Text>}
    </TouchableOpacity>
  );
};


SelectInput.defaultProps = defaultProps