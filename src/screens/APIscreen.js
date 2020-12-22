import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const APIscreen = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>APIscreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  version: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    margin: 5,
  },
})
