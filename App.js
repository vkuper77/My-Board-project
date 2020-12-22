import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { AppNavigation } from './src/navigation/AppNavigation'
import { Provider } from 'react-redux'
import { dbReady } from './src/dbReady'
import store from './src/redux/index'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={dbReady}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
