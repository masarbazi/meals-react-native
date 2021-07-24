import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigation from './navigation/MealsNavigation';

const fetchFonts = () => {
  return Font.loadAsync({
    HeyBenito: require('./assets/fonts/HeyBenito.ttf'),
    OceanSummer: require('./assets/fonts/OceanSummer.ttf'),
    Blox2: require('./assets/fonts/Blox2.ttf'),
    FatTats: require('./assets/fonts/FatTats.ttf'),
  });
};

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAppLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <MealsNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
