import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const MealsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Categories'
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#FFC074',
        },
        headerTitleStyle: {
          fontFamily: 'OceanSummer',
          fontSize: 30,
        },
      }}
    >
      <Stack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'Meals Category',
        }}
      />
      <Stack.Screen
        name='CategoryMeals'
        component={CategoryMealsScreen}
        options={({ route }) => ({ title: route.params.category.title })}
      />
      <Stack.Screen
        name='MealDetail'
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.meal.title })}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigation;
