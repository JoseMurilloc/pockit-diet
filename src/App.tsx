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
import { SignIn } from './screens/SignIn';

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
      <SignIn />
    </ThemeProvider>
  );
}