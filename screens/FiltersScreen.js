import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FilterItem from '../components/FilterItem';

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
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
  }, [navigation]);

  const filterItemMargin = 15;
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <FilterItem
        label='Is Gluten Free'
        value={isGlutenFree}
        onSelect={(state) => setIsGlutenFree(state)}
        style={{ margin: filterItemMargin }}
      />
      <FilterItem
        label='Is Vegan'
        value={isVegan}
        onSelect={(state) => setIsVegan(state)}
        style={{ margin: filterItemMargin }}
      />
      <FilterItem
        label='Is Vegetarian'
        value={isVegetarian}
        onSelect={(state) => setIsVegetarian(state)}
        style={{ margin: filterItemMargin }}
      />
      <FilterItem
        label='Is Lactose Free'
        value={isLactoseFree}
        onSelect={(state) => setIsLactoseFree(state)}
        style={{ margin: filterItemMargin }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  screen: {
    justifyContent: 'center',
  },
});

export default FiltersScreen;
