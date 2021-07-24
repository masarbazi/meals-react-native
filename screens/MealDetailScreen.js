import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const MealDetailsScreen = ({ route, navigation }) => {
  const { meal } = route.params;
  console.log(meal);

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
