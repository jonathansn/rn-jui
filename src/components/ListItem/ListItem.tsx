import React from 'react';
import { View, ViewProps } from 'react-native';
import { Text } from '../Text';
import styles from './styles';

interface Props extends ViewProps {
  label: string;
  children: React.ReactNode;
  divider?: boolean;
}

export const ListItem = (props: Props) => {
  const { label, divider, children } = props

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View>{children}</View>
      </View>
      {divider && <View style={styles.divider} />}
    </View>
  );
};