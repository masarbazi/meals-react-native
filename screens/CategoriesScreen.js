import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { categories } from '../data/dummy-data';
import GridItem from '../components/GridItem';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <GridItem
            title={item.title}
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
});

export default CategoriesScreen;
