import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { Colors } from '../constants/Colors';

const Stack = createStackNavigator();
const BottomTab =
  Platform.OS == 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const stackNavigationDefualtScreenOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: Colors.header,
  },
  headerTitleStyle: {
    fontFamily: 'Ghasem',
    fontSize: 25,
  },
};

const MealsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='MealsCategories'
      screenOptions={stackNavigationDefualtScreenOptions}
    >
      <Stack.Screen
        name='MealsCategories'
        component={CategoriesScreen}
        options={{
          title: 'وعده هامون',
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

const FaveMealsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='FavoritesHome'
      screenOptions={stackNavigationDefualtScreenOptions}
    >
      <Stack.Screen
        name='FavoritesHome'
        component={FavoritesScreen}
        options={{ headerTitle: 'دوست داشته هام' }}
      />
      <Stack.Screen
        name='MealDetail'
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.meal.title })}
      />
    </Stack.Navigator>
  );
};

const FiltersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Filters'
      screenOptions={stackNavigationDefualtScreenOptions}
    >
      <Stack.Screen name='Filters' component={FiltersScreen} />
    </Stack.Navigator>
  );
};

const materialConfigs =
  Platform.OS == 'ios'
    ? {}
    : { shifting: true, barStyle: { backgroundColor: Colors.header } };

const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let Icon;
          let iconName;
          if (route.name == 'Categories') {
            Icon = MaterialCommunityIcons;
            iconName = focused ? 'package-variant' : 'package-variant-closed';
          } else if (route.name == 'Favorites') {
            Icon = MaterialIcons;
            iconName = focused ? 'favorite' : 'favorite-border';
          }
          return (
            <Icon
              name={iconName}
              color={color}
              size={Platform.OS == 'ios' ? size : 20}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.header,
      }}
      {...materialConfigs}
      initialRouteName='Categories'
    >
      <BottomTab.Screen
        name='Categories'
        component={MealsNavigation}
        options={{
          tabBarLabel: 'وعده ها',
        }}
      />
      <BottomTab.Screen
        name='Favorites'
        component={FaveMealsNavigation}
        options={{
          tabBarLabel: 'علاقه مندی ها',
        }}
      />
    </BottomTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName='TabNav'
      drawerType='slide'
      drawerStyle={{ width: '60%', backgroundColor: '#e6e6e6' }}
      edgeWidth={Dimensions.get('window').width / 5}
      minSwipeDistance={100}
    >
      <Drawer.Screen
        name='TabNav'
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='FiltersNav'
        component={FiltersNavigator}
        options={{ title: 'Filters' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
