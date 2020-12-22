import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null)

  const getPermissiono = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      Alert.alert('Разрешите доступ к камере')
    }
  }

  useEffect(() => {
    getPermissiono()
  }, [])

  const takePhoto = async () => {
    const photo = await ImagePicker.launchCameraAsync({
      quality: 0.5,
      aspect: [9, 16],
      allowsEditing: false,
    })
    setImage(photo.uri)
    onPick(photo.uri)
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={takePhoto}>
        <Image
          style={{ width: 35, height: 35 }}
          source={require('../../assets/icon/camera.png')}
          resizeMethod="auto"
        />
      </TouchableOpacity>
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: 350,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
})
