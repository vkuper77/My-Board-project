import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TextInput,
} from 'react-native'
import { CustomHeader } from '../components/CustomHeader'
import { Post } from '../components/Post'
import { loadPosts } from '../redux/actions/postActions'

export const MainScreen = ({ navigation }) => {
  const [saerch, setSearch] = useState('')

  const openDrawer = () => {
    navigation.toggleDrawer()
  }

  const createPost = () => {
    navigation.push('CreateScreen')
  }

  const openPostHandler = (post) => {
    navigation.navigate('PostScreen', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const allPosts = useSelector((state) => state.post.allPosts)
  const loading = useSelector((state) => state.post.loading)

  const postList = allPosts.filter((item) => {
    return item.wino.toLowerCase().includes(saerch.toLowerCase()) ? item : null
  })

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        createPost={createPost}
        openDrawer={openDrawer}
        title="my board"
        isHome={true}
      />
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

      {allPosts.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.text}>Открой именно ту бутылку...</Text>
          <Image
            style={styles.image}
            source={require('../../assets/icon/corkscrew.png')}
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
  text: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 10,
    color: 'grey',
  },
  image: {
    width: 100,
    height: 100,
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
