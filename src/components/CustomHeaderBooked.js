import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
} from 'react-native'

import { THEME } from '../theme'

export const CustomHeaderBooked = ({ openDrawer, title }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require('../../assets/icon/menu.png')}
            resizeMethod="auto"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 3,
        }}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginHorizontal: 10,
        }}
      ></View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height:
      Platform.OS === 'android'
        ? Math.floor((410 * 100) / Dimensions.get('window').height)
        : 43,
    borderBottomColor: '#e91e63',
    borderBottomWidth: 1,
    paddingBottom: Math.floor((70 * 100) / Dimensions.get('window').height),
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginHorizontal: 15,
  },
  text: {
    color: THEME.COLOR_3,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
})
