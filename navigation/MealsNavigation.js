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
const Tab =
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
    fontFamily: 'OceanSummer',
    fontSize: 30,
  },
};

const MealsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Categories'
      screenOptions={stackNavigationDefualtScreenOptions}
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

const FaveMealsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Favorites'
      screenOptions={stackNavigationDefualtScreenOptions}
    >
      <Stack.Screen name='Favorites' component={FavoritesScreen} />
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
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
    >
      <Tab.Screen name='Categories' component={MealsNavigation} />
      <Tab.Screen name='Favorites' component={FaveMealsNavigation} />
    </Tab.Navigator>
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
        options={{ title: 'Meals Category' }}
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
