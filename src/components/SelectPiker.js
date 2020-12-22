import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { Picker } from '@react-native-picker/picker'
import { useSelector } from 'react-redux'

export const SelectPiker = ({
  handlerСountry,
  country,
  handlerGrade,
  grade,
}) => {
  const btnCountry = useSelector((state) => state.post.country)
  const btngrade = useSelector((state) => state.post.grade)
  const platform = Platform.OS === 'android'

  return (
    <View>
      {platform ? (
        <View style={styles.country}>
          <Picker
            selectedValue={country}
            style={{ height: 50, width: 150 }}
            onValueChange={(value) => {
              handlerСountry(value)
            }}
          >
            {btnCountry.map((country, i) => {
              return <Picker.Item label={country} value={country} key={i + 1} />
            })}
          </Picker>
          <Picker
            selectedValue={grade}
            style={{ height: 50, width: 120 }}
            onValueChange={(value) => {
              handlerGrade(value)
            }}
          >
            {btngrade.map((grade, i) => {
              return <Picker.Item label={grade} value={grade} key={i + 1} />
            })}
          </Picker>
        </View>
      ) : (
        <View style={styles.country}>
          <RNPickerSelect
            placeholder={{
              label: 'Страна Производителя',
              value: 'Страна',
            }}
            value={country}
            onValueChange={(value) => handlerСountry(value)}
            items={btnCountry.map((country) => {
              return { label: country, value: country }
            })}
          />
          <RNPickerSelect
            placeholder={{
              label: 'Сорт Винограда',
              value: 'Сорт',
            }}
            value={grade}
            onValueChange={(value) => handlerGrade(value)}
            items={btngrade.map((grade) => {
              return { label: grade, value: grade }
            })}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  country: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 8,
  },
})
