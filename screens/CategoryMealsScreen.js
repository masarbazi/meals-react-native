import React from 'react';
import MealsList from '../components/MealsList';
import useStore from '../store/useStore';

const CategoryMealsScreen = ({ navigation, route }) => {
  const meals = useStore((state) => state.filteredMeals);
  const { category } = route.params;
  const displayedMeals = meals.filter((meal) =>
    meal.categoryIds.includes(category.id)
  );

  return (
    <MealsList
      navigation={navigation}
      data={displayedMeals}
      noMealsMessage='There are no meals on this category. Chnage filters for more results.'
    />
  );
};

export default CategoryMealsScreen;
