import React from 'react' 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import Initial from '../screens/App/Initial'
import Revenues from '../screens/App/Revenues'


import Replacement from '../screens/App/Replacement'
import Profile from '../screens/App/Profile'

const Tab = createBottomTabNavigator()

export function AppRoutes() {

  const theme = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary_strong,
        tabBarItemStyle: {},
        tabBarLabelStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.background_tab,
          height: 72,
          paddingHorizontal: 55,
        },
        tabBarInactiveTintColor: theme.colors.text,
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Início"
        component={Initial}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons 
              name="home" 
              size={focused ? 30 : 26} 
              color={focused ?  
                theme.colors.primary_strong 
                : theme.colors.text_super_light
              } 
            />
          )
        }}
      />

      <Tab.Screen 
        name="Receitas"
        component={Revenues}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons 
              name="local-dining" 
              size={focused ? 30 : 26} 
              color={focused ?  
                theme.colors.primary_strong 
                : theme.colors.text_super_light
              } 
            />
          )
        }}
      />

      <Tab.Screen 
        name="Substituição"
        component={Replacement}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons 
              name="menu-book" 
              size={focused ? 30 : 26} 
              color={focused ?  
                theme.colors.primary_strong 
                : theme.colors.text_super_light
              } 
            />
          )
        }}
      />

      <Tab.Screen 
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons 
              name="person" 
              size={focused ? 30 : 26} 
              color={focused ?  
                theme.colors.primary_strong 
                : theme.colors.text_super_light
              } 
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}