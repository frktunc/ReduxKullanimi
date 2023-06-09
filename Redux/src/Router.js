import { Text, View } from 'react-native'
import React from  'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Primary from './pages/Primary'
import Secondary from './pages/Secondary';
import UserProvider from './context/provider'

const Tab = createBottomTabNavigator();

const Router = () => {
  return(
    <UserProvider>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='primary' component={Primary} />
        <Tab.Screen name='Secondary' component={Secondary} />
      </Tab.Navigator>
    </NavigationContainer>
    </UserProvider>
    
  )
}
export default Router;