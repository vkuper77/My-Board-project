import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from '../theme'

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Личный дневник о вине</Text>
      <Text style={styles.text}>
        Версия приложения <Text style={styles.version}>1.0.0</Text>
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Text style={styles.textBtn}>Назад</Text>
        </TouchableOpacity>
      </View>
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
    color: THEME.COLOR_3,
  },
  btnContainer: {
    marginTop: 30,
  },
  textBtn: {
    color: THEME.COLOR_6,
    letterSpacing: 2,
    fontSize: 15,
  },
})
