import React, { ReactNode } from 'react'
import { View } from 'react-native'

import styles from './styles'

interface CardHeaderProps {
  left?: ReactNode
  right?: ReactNode
}

interface CardHeaderLeftProps {
  children: ReactNode
}

interface CardHeaderRightProps {
  children: ReactNode
}

const CardHeaderLeft = (props: CardHeaderLeftProps) => {
  const { children } = props

  return <View>{ children }</View>
}

const CardHeaderRight = (props: CardHeaderRightProps) => {
  const { children } = props

  return <View>{ children }</View>
}

export const CardHeader = (props: CardHeaderProps) => {
  const { left, right } = props

  return (
    <View style={[styles.header]}>
      <CardHeaderLeft>
        { left }
      </CardHeaderLeft>
      <CardHeaderRight>
        { right }
      </CardHeaderRight>
    </View>
  )
}

