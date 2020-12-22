import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MainScreen } from '../screens/MainScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { PostScreen } from '../screens/PostScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { APIscreen } from '../screens/APIscreen'
import { Ionicons } from '@expo/vector-icons'
import { THEME } from '../theme'

// const AuthStack = createStackNavigator()
const MainStack = createStackNavigator()
const BookedStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="MainScreen">
    <MainStack.Screen
      name="MainScreen"
      component={MainScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="PostScreen"
      component={PostScreen}
      options={({ route }) => ({ title: route.params.name })}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="CreateScreen"
      component={CreateScreen}
      options={({ route }) => ({ title: route.params.name })}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="APIscreen"
      component={APIscreen}
      options={({ route }) => ({ title: route.params.name })}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
)

const BookedStackScreen = () => (
  <BookedStack.Navigator initialRouteName="BookedScreen">
    <BookedStack.Screen
      name="BookedScreen"
      component={BookedScreen}
      options={{ headerShown: false }}
    />
    <BookedStack.Screen
      name="PostScreen"
      component={PostScreen}
      options={({ route }) => ({ title: route.params.name })}
      options={{ headerShown: false }}
    />
  </BookedStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: THEME.COLOR_6,
    }}
  >
    <Tabs.Screen
      name="MainScreen"
      component={MainStackScreen}
      options={{
        tabBarLabel: 'Все',
        tabBarIcon: (info) => (
          <Ionicons name="ios-albums" size={25} color={info.color} />
        ),
      }}
    />
    <Tabs.Screen
      name="BookedScreen"
      component={BookedStackScreen}
      options={{
        tabBarLabel: 'Избранное',
        tabBarIcon: (info) => (
          <Ionicons name="ios-star" size={25} color={info.color} />
        ),
      }}
    />
  </Tabs.Navigator>
)

export const AppNavigation = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: THEME.COLOR_6,
      }}
    >
      <Drawer.Screen name="Home" component={TabsScreen} />
      <Drawer.Screen name="О приложении" component={AboutScreen} />
    </Drawer.Navigator>
    {/* <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'Sign In' }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ title: 'Create Account' }}
      />
    </AuthStack.Navigator> */}
  </NavigationContainer>
)
