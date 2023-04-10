import React from 'react';
import MealsList from '../components/MealsList';
import useStore from '../store/useStore';
import { View } from 'react-native';

const FavoritesScreen = ({ navigation }) => {
  let favoriteMeals = useStore((state) => state.favoriteMeals);

  return (
    <View>
      <MealsList
        data={favoriteMeals}
        navigation={navigation}
        noMealsMessage='هیچی دوست نداشتی تا حالا!! 😟'
      />
    </View>
  );
};

export default FavoritesScreen;
