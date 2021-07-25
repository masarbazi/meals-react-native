import React, { useLayoutEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { categories } from '../data/dummy-data';
import GridItem from '../components/GridItem';
import { meals } from '../data/dummy-data';

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

  const getImageUrl = (id) => {
    let imageUrl;
    for (let i = 0; i < meals.length; i++) {
      if (meals[i].categoryIds.includes(id)) {
        imageUrl = meals[i].imageUrl;
        break;
      }
    }
    return imageUrl;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <GridItem
            title={item.title}
            imageUrl={getImageUrl(item.id)}
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
