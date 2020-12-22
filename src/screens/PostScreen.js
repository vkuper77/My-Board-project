import React, { useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removePost, toogleBooked } from '../redux/actions/postActions'
import { CustomHeader } from '../components/CustomHeader'
import { StarRatings } from '../components/StarRatings'
import { Taste } from '../components/Taste'
import { THEME } from '../theme'

export const PostScreen = ({ route, navigation }) => {
  const postId = route.params.postId
  const post = useSelector((state) =>
    state.post.allPosts.find((p) => p.id === postId)
  )

  const postBoked = useSelector((state) =>
    state.post.bookedPosts.some((post) => post.id === postId)
  )

  const dispatch = useDispatch()
  const toggleHandler = useCallback(() => {
    dispatch(toogleBooked(post))
  }, [dispatch, post])

  const goBack = () => {
    navigation.goBack()
  }

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост',
      [
        {
          text: 'Отменить',

          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            navigation.navigate('MainScreen')
            dispatch(removePost(postId))
          },
        },
      ],
      { cancelable: false }
    )
  }

  if (!post) {
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title={post.wino}
        goBack={goBack}
        postBoked={postBoked}
        toggleHandler={toggleHandler}
      />
      <ScrollView>
        <View style={styles.textHeader}>
          <Text style={styles.headerTitle}>{`Вино открыто ${new Date(
            post.date
          ).toLocaleDateString()}`}</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imgBox}>
            <Image source={{ uri: post.img }} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            {post.country ? (
              <View style={styles.box1}>
                <Text style={styles.textBox}>{post.country}</Text>
              </View>
            ) : null}
            {post.grade ? (
              <View style={styles.box2}>
                <Text style={styles.textBox}>{post.grade.toLowerCase()}</Text>
              </View>
            ) : null}
            {post.color ? (
              <View style={styles.box3}>
                <Text style={styles.textBox}>{post.color}</Text>
              </View>
            ) : null}
            {post.dryness ? (
              <View style={styles.box4}>
                <Text style={styles.textBox}>{post.dryness}</Text>
              </View>
            ) : null}
          </View>
        </View>

        <View>
          <StarRatings star={post.stars} disabled={true} />
          <View>
            <Text style={styles.textTaste}>Вкусовые свойства</Text>
          </View>
          <Taste
            disabled={true}
            taste={[post.taste1, post.taste2, post.taste3]}
          />
        </View>
        <View>
          <Text style={styles.textTaste}>Обзор</Text>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{post.text}</Text>
        </View>
        <View style={styles.deleteBox}>
          <TouchableOpacity style={styles.delete} onPress={removeHandler}>
            <Text style={styles.deleteText}>Удалить</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 17,
    letterSpacing: 2,
    color: THEME.MAIN_COLOR,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 30,
  },
  imgBox: {
    width: '60%',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  textWrap: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f4f3f3',
  },
  textHeader: {
    alignItems: 'center',
    marginVertical: 10,
  },
  textContainer: {
    flexDirection: 'column',
    width: '40%',
    height: 370,
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 18,
    textAlign: 'center',
    color: THEME.COLOR_3,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box1: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: THEME.COLOR_3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: THEME.COLOR_4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: THEME.COLOR_5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: THEME.COLOR_6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    letterSpacing: 1,
    textAlign: 'center',
    color: THEME.COLOR_1,
    fontSize: 14,
  },
  textTaste: {
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 16,
    color: THEME.COLOR_1,
    textAlign: 'center',
  },
  deleteBox: {
    alignItems: 'center',
    marginTop: 25,
  },
  delete: {
    backgroundColor: '#ff6363',
    width: 110,
    borderRadius: 20,
    marginVertical: 20,
  },
  deleteText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
    color: '#543864',
    letterSpacing: 1,
  },
})
