import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/actions/postActions'
import { PhotoPicker } from '../components/PhotoPicker'
import { StarRatings } from '../components/StarRatings'
import { Taste } from '../components/Taste'
import { SelectPiker } from '../components/SelectPiker'
import { THEME } from '../theme'

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const imgRef = useRef()

  const [nameWino, setNameWino] = useState('')
  const [vintage, setVintage] = useState('')

  const [country, setCountry] = useState('')
  const [grade, setGrade] = useState('')

  const [colorWine, setColorWine] = useState('')
  const [drynessWine, setDrynessWine] = useState('')

  const [star, setStar] = useState(1)

  const [taste1, setTaste1] = useState(5)
  const [taste2, setTaste2] = useState(5)
  const [taste3, setTaste3] = useState(5)

  const [text, setText] = useState('')

  const photoPickHandler = (uri) => {
    imgRef.current = uri
  }

  const handlerСountry = (value) => {
    setCountry(value)
  }

  const handlerGrade = (value) => {
    setGrade(value)
  }

  const savePostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      wino: nameWino,
      vintage,
      country,
      grade,
      color: colorWine,
      dryness: drynessWine,
      text: text,
      img: imgRef.current,
      stars: star,
      taste1,
      taste2,
      taste3,
      booked: false,
    }

    dispatch(addPost(post))
    navigation.navigate('MainScreen')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Твое новое приключение</Text>
          <View style={styles.keyboad}>
            <TextInput
              style={styles.textarea}
              placeholder="Введите назавание вина..."
              value={nameWino}
              onChangeText={(value) => setNameWino(value)}
              autoCorrect={false}
              autoCapitalize="characters"
            />
            <TextInput
              style={styles.textareaNumber}
              value={vintage}
              onChangeText={(value) => setVintage(value)}
              placeholder="Винтаж"
              keyboardType="number-pad"
            />
          </View>
          <View style={{ width: '100%' }}>
            <PhotoPicker onPick={photoPickHandler} />
          </View>

          <SelectPiker
            handlerСountry={handlerСountry}
            country={country}
            handlerGrade={handlerGrade}
            grade={grade}
          />

          <View style={styles.btnWine}>
            <TouchableOpacity
              style={
                colorWine === 'красное'
                  ? styles.appButtonActiv
                  : styles.appButtonContainer
              }
              disabled={colorWine === 'красное' ? true : false}
              onPress={() => {
                setColorWine('красное')
              }}
            >
              <Text
                style={
                  colorWine === 'красное'
                    ? styles.appButtonTextActive
                    : styles.appButtonText
                }
              >
                Красное
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                colorWine === 'белое'
                  ? styles.appButtonActiv
                  : styles.appButtonContainer
              }
              disabled={colorWine === 'белое' ? true : false}
              onPress={() => {
                setColorWine('белое')
              }}
            >
              <Text
                style={
                  colorWine === 'белое'
                    ? styles.appButtonTextActive
                    : styles.appButtonText
                }
              >
                Белое
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                colorWine === 'розовое'
                  ? styles.appButtonActiv
                  : styles.appButtonContainer
              }
              disabled={colorWine === 'розовое' ? true : false}
              onPress={() => {
                setColorWine('розовое')
              }}
            >
              <Text
                style={
                  colorWine === 'розовое'
                    ? styles.appButtonTextActive
                    : styles.appButtonText
                }
              >
                розовое
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnValue}>
            <TouchableOpacity
              style={
                drynessWine === 'сухое'
                  ? styles.appButtonActiv
                  : styles.appButtonContainer
              }
              disabled={drynessWine === 'сухое' ? true : false}
              onPress={() => {
                setDrynessWine('сухое')
              }}
            >
              <Text
                style={
                  drynessWine === 'сухое'
                    ? styles.appButtonTextActive
                    : styles.appButtonText
                }
              >
                сухое
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                drynessWine === 'п/сух'
                  ? styles.appButtonActiv
                  : styles.appButtonContainer
              }
              disabled={drynessWine === 'п/сух' ? true : false}
              onPress={() => {
                setDrynessWine('п/сух')
              }}
            >
              <Text
                style={
                  drynessWine === 'п/сух'
                    ? styles.appButtonTextActive
                    : styles.appButtonText
                }
              >
                п/сух
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                drynessWine === 'сладкое'
                  ? styles.appButtonActiv
                  : styles.appButtonContainer
              }
              disabled={drynessWine === 'сладкое' ? true : false}
              onPress={() => {
                setDrynessWine('сладкое')
              }}
            >
              <Text
                style={
                  drynessWine === 'сладкое'
                    ? styles.appButtonTextActive
                    : styles.appButtonText
                }
              >
                сладкое
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                drynessWine === 'п/слад'
                  ? styles.appButtonActiv
                  : styles.appButtonContainer
              }
              disabled={drynessWine === 'п/слад' ? true : false}
              onPress={() => {
                setDrynessWine('п/слад')
              }}
            >
              <Text
                style={
                  drynessWine === 'п/слад'
                    ? styles.appButtonTextActive
                    : styles.appButtonText
                }
              >
                п/слад
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: '100%' }}>
            <StarRatings setStar={setStar} star={star} />
            <Taste
              taste={[taste1, taste2, taste3]}
              setTaste1={setTaste1}
              setTaste2={setTaste2}
              setTaste3={setTaste3}
            />
          </View>

          <TextInput
            style={styles.text}
            placeholder="Поделись своим впечатлением...."
            value={text}
            onChangeText={setText}
            multiline
          />
          <View style={styles.savePostBox}>
            <TouchableOpacity
              style={styles.savePost}
              disabled={(!text, !imgRef.current)}
              onPress={savePostHandler}
            >
              <Text style={styles.savePostText}>Создать пост</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: THEME.COLOR_3,
    letterSpacing: 2,
  },
  textarea: {
    width: 200,
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomColor: THEME.COLOR_4,
    borderBottomWidth: 2,
  },
  textareaNumber: {
    width: 60,

    marginBottom: 10,
    borderBottomColor: THEME.COLOR_4,
    borderBottomWidth: 2,
  },
  text: {
    width: '100%',
    height: 100,
    backgroundColor: THEME.COLOR_2,
    borderRadius: 5,
  },
  btnWine: {
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnValue: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btnTaste: {
    marginVertical: 20,
  },
  appButtonContainer: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderColor: THEME.MAIN_COLOR,
    borderWidth: 1,
  },
  appButtonActiv: {
    elevation: 8,
    backgroundColor: '#e91e63',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  appButtonText: {
    fontSize: 16,
    color: THEME.MAIN_COLOR,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  appButtonTextActive: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  btnCountru: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderColor: '#e91e63',
    borderWidth: 1,
  },
  keyboad: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  savePostBox: {
    alignItems: 'center',
    marginTop: 25,
  },
  savePost: {
    backgroundColor: THEME.COLOR_4,
    width: 150,
    borderRadius: 20,
    marginVertical: 20,
  },
  savePostText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
    color: '#f5f5f5',
    letterSpacing: 1,
  },
})
