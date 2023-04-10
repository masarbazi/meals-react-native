import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { categories } from '../data/dummy-data';
import GridItem from '../components/GridItem';
import useStore from '../store/useStore';

const CategoriesScreen = ({ navigation }) => {
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

  const meals = useStore((state) => state.meals);

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <GridItem
            title={item.title}
            imageName={item.image}
            color={item.color}
            onSelect={() =>
              navigation.navigate('CategoryMeals', { category: item })
            }
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerLeft: {
    justifyContent: 'center',
    marginLeft: 20,
  },
});

export default CategoriesScreen;
