import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigation from './navigation/MealsNavigation';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  Font.loadAsync({
    HeyBenito: require('./assets/fonts/HeyBenito.ttf'),
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
