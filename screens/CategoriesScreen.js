import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { categories } from '../data/dummy-data';
import GridItem from '../components/GridItem';

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
  headerLeft: {
    justifyContent: 'center',
    marginLeft: 20,
  },
});

export default CategoriesScreen;
