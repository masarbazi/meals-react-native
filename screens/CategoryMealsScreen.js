import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { meals } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ navigation, route }) => {
  const { category } = route.params;
  const displayedMeals = meals.filter((meal) =>
    meal.categoryIds.includes(category.id)
  );

  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => (
          <MealItem meal={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
