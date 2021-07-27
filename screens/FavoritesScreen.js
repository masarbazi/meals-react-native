import React, { useState, useCallback } from 'react';
import MealsList from '../components/MealsList';
import useStore from '../store/useStore';

const FavoritesScreen = ({ navigation }) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  let favoriteMeals = useStore((state) => state.favoriteMeals);

  navigation.addListener('focus', () => {
    forceUpdate();
  });

  return <MealsList data={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;
