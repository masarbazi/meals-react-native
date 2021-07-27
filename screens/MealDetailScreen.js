import React, { useLayoutEffect, useState, useEffect } from 'react';
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

const MealDetailsScreen = ({ route, navigation }) => {
  const { meal } = route.params;
  const favoriteMeals = useStore((state) => state.favoriteMeals);
  const favIndex = favoriteMeals.findIndex((favMeal) => favMeal.id == meal.id);
  const [backupData, setBackupData] = useState([]);
  const [faved, setFaved] = useState(favIndex >= 0);

  useEffect(() => {
    if (faved && favIndex < 0) {
      setBackupData([...backupData, meal]);
      favoriteMeals.push(meal);
    } else if (!faved && favIndex >= 0) favoriteMeals.splice(favIndex, 1);
  }, [faved, favoriteMeals]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              setFaved(!faved);
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
    fontFamily: 'FatTats',
  },
});

export default MealDetailsScreen;
