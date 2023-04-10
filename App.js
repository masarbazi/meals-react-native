import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigation from './navigation/MealsNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const fetchFonts = useCallback(async () => {
    await Font.loadAsync({
      VazirLight: require('./assets/fonts/Vazir-Light-FD-WOL.ttf'),
      VazirMedium: require('./assets/fonts/Vazir-Medium-FD-WOL.ttf'),
      Ghasem: require('./assets/fonts/AGhasem.ttf'),
    });
    setAppIsReady(true);
  }, [setAppIsReady]);

  useEffect(() => {
    try {
      fetchFonts();
    } catch (error) {
      throw new Error('App loading failed.');
    }
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady)
    return (
      <View>
        <Text>Loading app...</Text>
      </View>
    );

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <MealsNavigation />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
