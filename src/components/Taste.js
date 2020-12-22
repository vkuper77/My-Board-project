import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'
import { THEME } from '../theme'

export const Taste = ({ disabled, taste, setTaste1, setTaste2, setTaste3 }) => {
  return (
    <View style={styles.sliderContainer}>
      <View style={styles.sliderText}>
        <View style={styles.column1}>
          <Text style={styles.columnText}>Мягкое</Text>
          <Text style={styles.columnText}>Сухое</Text>
          <Text style={styles.columnText}>Мягкое</Text>
        </View>
        <View style={styles.column2}>
          <Slider
            disabled={disabled}
            style={styles.slider}
            step={1}
            value={taste[0]}
            onValueChange={(value) => {
              setTaste1(value)
            }}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#F9B8CE"
            maximumTrackTintColor="#e91e63"
          />
          <Slider
            disabled={disabled}
            style={styles.slider}
            step={1}
            value={taste[1]}
            onValueChange={(value) => {
              setTaste2(value)
            }}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#F9B8CE"
            maximumTrackTintColor="#e91e63"
          />
          <Slider
            disabled={disabled}
            style={styles.slider}
            step={1}
            value={taste[2]}
            onValueChange={(value) => {
              setTaste3(value)
            }}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#F9B8CE"
            maximumTrackTintColor="#e91e63"
          />
        </View>
        <View style={styles.column3}>
          <Text style={styles.columnText}>Насыщеное</Text>
          <Text style={styles.columnText}>Сладкое</Text>
          <Text style={styles.columnText}>Кислое</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sliderText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 190,
    height: 30,
    marginHorizontal: 5,
    marginVertical: 11,
  },
  column1: {
    alignItems: 'center',
  },
  column3: {
    alignItems: 'center',
  },
  columnText: {
    marginVertical: 18,
    letterSpacing: 1,
    fontSize: 14,
    color: THEME.COLOR_3,
  },
})
