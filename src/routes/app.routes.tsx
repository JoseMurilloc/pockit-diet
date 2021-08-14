import React from 'react' 

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Initial from '../screens/App/Initial'
import Revenues from '../screens/App/Revenues'
import { useTheme } from 'styled-components'
import { Image } from 'react-native'

import homeIcon from  '../global/assets/icons/tabBar/home.png'
import homeIconActive from  '../global/assets/icons/tabBar/home_active.png'
import bookIcon from  '../global/assets/icons/tabBar/book.png'
import bookIconActive from  '../global/assets/icons/tabBar/book_active.png'
import profileIcon from  '../global/assets/icons/tabBar/profile.png'
import profileIconActive from  '../global/assets/icons/tabBar/profile_active.png'
import replacementIcon from  '../global/assets/icons/tabBar/replacement.png'
// import replacementIconActive from  '../global/assets/icons/tabBar/replacement_active.png'


import Replacement from '../screens/App/Replacement'
import Profile from '../screens/App/Profile'


const Tab = createBottomTabNavigator()

export function AppRoutes() {

  const theme = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary_strong,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.background_tab,
          height: 72,
        },
        tabBarInactiveTintColor: theme.colors.text,
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Início"
        component={Initial}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              return <Image source={homeIconActive}/>
            }
            return <Image source={homeIcon} />
          }
        }}
      />
      
      <Tab.Screen 
        name="Receitas"
        component={Revenues}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              return <Image source={bookIconActive}/>
            }
            return <Image source={bookIcon} />
          }
        }}
      />

      <Tab.Screen 
        name="Substituição"
        component={Replacement}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              return <Image source={bookIconActive}/>
            }
            return <Image source={replacementIcon} />
          }
        }}
      />

      <Tab.Screen 
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              return <Image source={profileIconActive}/>
            }
            return <Image source={profileIcon} />
          }
        }}
      />
    </Tab.Navigator>
  )
}