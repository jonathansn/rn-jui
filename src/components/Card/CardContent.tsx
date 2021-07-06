import React, { ReactNode } from 'react'
import { View } from 'react-native'

import styles from './styles'

interface CardContentProps {
  children: ReactNode
}

export const CardContent = (props: CardContentProps) => {
  const { children } = props

  return (
    <View style={[styles.content]}>
      { children }
    </View>
  )
}