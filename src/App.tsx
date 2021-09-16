import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_700Bold
} from '@expo-google-fonts/raleway'
import theme from './global/styles/theme';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AppRoutes } from './routes/app.routes';

export default function App() {
  const [fontLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold      
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
        <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD"/>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
  );
}