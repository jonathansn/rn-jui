import React, { ReactNode } from 'react'
import { View } from 'react-native'

import styles from './styles'

interface CardFooterProps {
  children: ReactNode
}

export const CardFooter = (props: CardFooterProps) => {
  const { children } = props

  return (
    <View style={[styles.footer]}>
        { children }
    </View>
  )
}