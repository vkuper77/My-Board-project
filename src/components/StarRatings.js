import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export const StarRatings = ({ setStar, star, disabled }) => {
  const stars = [1, 2, 3, 4, 5]
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {stars.map((i) => (
          <View key={i.toString()}>
            <FontAwesome
              name={star >= i ? 'star' : 'star-o'}
              color="purple"
              size={32}
              style={{ marginHorizontal: 6 }}
              onPress={() => {
                if (!disabled) {
                  setStar(i)
                }
              }}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
})
