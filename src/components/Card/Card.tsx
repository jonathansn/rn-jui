import React, { ReactNode } from 'react';
import { View, TouchableOpacity } from "react-native"

import { CardHeader as CardHeaderComponent } from './CardHeader'
import { CardFooter as CardFooterComponent } from './CardFooter'
import { CardContent as CardContentComponent } from './CardContent'
import styles from './styles'

interface CardProps {
  children: ReactNode
  onPress?: Function
}

export const Card = (props: CardProps) => {
  const { children, onPress } = props

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => onPress ? onPress() : null}>
      <View style={styles.divider} />
      <View style={[styles.container]}>
        { children }     
      </View>
      <View style={styles.divider} />
      </TouchableOpacity>
    </View>
  )
}

Card.CardHeader = CardHeaderComponent
Card.CardFooter = CardFooterComponent
Card.CardContent = CardContentComponent
