import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import useStore from '../store/useStore';
import FilterItem from '../components/FilterItem';

const FiltersScreen = ({ navigation, route }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const saveFiltersAndUpdateFilteredMeals = useStore(
    (state) => state.saveFiltersAndUpdateFilteredMeals
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={styles.headerRight}
            onPress={() => {
              const filters = {
                glutenFree: isGlutenFree,
                vegan: isVegan,
                vegetarian: isVegetarian,
                lactoseFree: isLactoseFree,
              };
              navigation.setParams(filters);
              saveFiltersAndUpdateFilteredMeals(filters);
            }}
          >
            <MaterialCommunityIcons
              name='content-save'
              size={25}
              color='#000'
            />
          </TouchableOpacity>
        );
      },
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
          >
            <MaterialCommunityIcons name='menu' color='#000' size={25} />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  const filterItemMargin = 15;
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <FilterItem
        label='Is Gluten Free'
        value={isGlutenFree}
        onSelect={(state) => {
          setIsGlutenFree(state);
        }}
        style={{ margin: filterItemMargin }}
      />
      <FilterItem
        label='Is Vegan'
        value={isVegan}
        onSelect={(state) => {
          setIsVegan(state);
        }}
        style={{ margin: filterItemMargin }}
      />
      <FilterItem
        label='Is Vegetarian'
        value={isVegetarian}
        onSelect={(state) => {
          setIsVegetarian(state);
        }}
        style={{ margin: filterItemMargin }}
      />
      <FilterItem
        label='Is Lactose Free'
        value={isLactoseFree}
        onSelect={(state) => {
          setIsLactoseFree(state);
        }}
        style={{ margin: filterItemMargin }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    justifyContent: 'center',
    marginRight: 20,
  },
  headerLeft: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  screen: {
    justifyContent: 'center',
  },
});

export default FiltersScreen;
