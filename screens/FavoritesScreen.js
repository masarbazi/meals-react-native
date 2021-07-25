import React from 'react';
import { meals } from '../data/dummy-data';
import MealsList from '../components/MealsList';

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = meals.filter(
    (meal) => meal.id == 'm3' || meal.id == 'm1' || meal.id == 'm5'
  );

  return <MealsList data={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;
