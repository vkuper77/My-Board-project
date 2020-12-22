import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
} from 'react-native'
import { CustomHeaderBooked } from '../components/CustomHeaderBooked'

import { Post } from '../components/Post'

export const BookedScreen = ({ navigation }) => {
  const [saerch, setSearch] = useState('')

  const openDrawer = () => {
    navigation.toggleDrawer()
  }

  const openPostHandler = (post) => {
    navigation.navigate('PostScreen', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  }

  const bookedPosts = useSelector((state) => state.post.bookedPosts)
  const postList = bookedPosts.filter((item) => {
    return item.wino.toLowerCase().includes(saerch.toLowerCase()) ? item : null
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeaderBooked openDrawer={openDrawer} title="Избранное" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textSearch}
          placeholder="Поиск"
          value={saerch}
          onChangeText={(value) => {
            setSearch(value)
          }}
        />
      </View>
      {bookedPosts.length === 0 ? (
        <View style={styles.center}>
          <Image
            style={styles.image}
            source={require('../../assets/icon/heart.png')}
          />
        </View>
      ) : (
        <FlatList
          data={postList}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item }) => (
            <Post post={item} onOpen={openPostHandler} />
          )}
        />
      )}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  searchContainer: {
    alignItems: 'center',
  },
  textSearch: {
    width: 150,
    paddingVertical: 4,
    marginVertical: 5,
    textAlign: 'center',
    backgroundColor: '#ffd5cd',
    borderRadius: 6,
  },
})
