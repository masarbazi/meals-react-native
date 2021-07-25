import React from 'react';
import { meals } from '../data/dummy-data';
import MealsList from '../components/MealsList';

const CategoryMealsScreen = ({ navigation, route }) => {
  const { category } = route.params;
  const displayedMeals = meals.filter((meal) =>
    meal.categoryIds.includes(category.id)
  );

  return <MealsList navigation={navigation} data={displayedMeals} />;
};

export default CategoryMealsScreen;
