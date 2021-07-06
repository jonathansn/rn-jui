import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Button, SelectInput, TextInput, ListItem, Text, Card, colors } from '../../src'

const { CardHeader, CardFooter, CardContent } = Card

const HeaderLeft = () => <Text style={{ color: colors.textSecondary }}>000001</Text>
const HeaderRight = () => <Text style={{ color: colors.textSecondary }}>25/01/2020</Text>

export default function App () {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button>DEFAULT</Button>
      <View style={{ height: 15 }} />
      <Button type="primary">PRIMARY</Button>
      <View style={{ height: 15 }} />
      <Button type="primary" disabled={true}>DISABLED</Button>
      <View style={{ height: 30 }} />
      <TextInput label="TEXT INPUT" />
      <View style={{ height: 30 }} />
      <SelectInput label="SELECT INPUT" onPress={() => console.log(111)} value="123" />
      <View style={{ height: 30 }} />
      <ListItem label="LIST ITEM">
        <Text>123</Text>
      </ListItem>
      <View style={{ height: 30 }} />
      <Card
        onPress={() => console.log(123)}
      >
        <CardHeader
          left={<HeaderLeft />}
          right={<HeaderRight />}
        />
        <CardContent>
          <Text>SALGADINHO DE TRIGO 500G</Text>
        </CardContent>
        <CardFooter>
          <View>
              <Text style={{ color: colors.secondary }}>R$ 10,00</Text>
          </View>
        </CardFooter>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
