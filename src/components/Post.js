import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { THEME } from '../theme'

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{post.wino}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    overflow: 'hidden',
    marginHorizontal: 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    backgroundColor: 'rgba(0,0,0, 0.6)',
    height: 200,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    color: THEME.COLOR_5,
    fontSize: 25,
    textTransform: 'uppercase',
    letterSpacing: 6,
  },
})
