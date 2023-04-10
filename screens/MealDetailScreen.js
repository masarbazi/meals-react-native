import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useStore from '../store/useStore';

import { Colors } from '../constants/Colors';

const MealDetailsScreen = ({ route, navigation }) => {
  const { meal } = route.params;
  const { favoriteMeals, toggleFavoriteMeal } = useStore((state) => ({
    favoriteMeals: state.favoriteMeals,
    toggleFavoriteMeal: state.toggleFavoriteMeal,
  }));
  const favIndex = favoriteMeals.findIndex((favMeal) => favMeal.id == meal.id);
  const [faved, setFaved] = useState(favIndex >= 0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              setFaved(!faved);
              toggleFavoriteMeal(meal);
            }}
          >
            <View style={{ padding: 10 }}>
              {faved ? (
                <AntDesign name='star' size={20} color='#000' />
              ) : (
                <AntDesign name='staro' size={20} color='#000' />
              )}
            </View>
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, faved]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.detailsContent}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.sectionLabel}>مواد لازم:</Text>
        <View style={styles.ingredients}>
          {meal.ingredients.map((ingredient, index) => (
            <Text style={styles.ingredient} key={index}>
              📍 {ingredient}
            </Text>
          ))}
        </View>
        <Text style={styles.sectionLabel}>مراحل پخت:</Text>
        <View style={styles.ingredients}>
          {meal.steps.map((step, index) => (
            <Text style={styles.ingredient} key={index}>
              <Text style={{ fontFamily: 'VazirMedium' }}>{index + 1}.</Text>{' '}
              {step}
            </Text>
          ))}
        </View>
        <View style={styles.features}>
          <Text style={styles.feature}>
            {meal.isGluten ? 'حاوی گلوتن ✅' : 'حاوی گلوتن ❌'}
          </Text>
          <Text style={styles.feature}>
            {meal.isVegan ? 'حاوی وگان ✅' : 'حاوی وگان ❌'}
          </Text>
          <Text style={styles.feature}>
            {meal.isVegetarian ? 'گیاهی ✅' : 'گیاهی ❌'}
          </Text>
          <Text style={styles.feature}>
            {meal.isLactoseFree ? 'حاوی لاکتوز ✅' : 'حاوی لاکتوز ❌'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffefdb',
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  detailsContent: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 23,
    width: '100%',
    fontFamily: 'VazirMedium',
    textAlign: 'right',
  },
  sectionLabel: {
    marginTop: 10,
    textAlign: 'right',
    fontFamily: 'VazirMedium',
    fontSize: 17,
    width: '100%',
  },
  ingredients: {
    paddingRight: 8,
    paddingVertical: 10,
    width: '100%',
  },
  ingredient: {
    textAlign: 'right',
    fontFamily: 'VazirLight',
    fontSize: 14,
  },
  features: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    gap: 12,
    width: '100%',
    marginTop: 15,
  },
  feature: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: Colors.header,
    borderRadius: 5,
    fontFamily: 'VazirMedium',
    fontSize: 13,
  },
});

export default MealDetailsScreen;
