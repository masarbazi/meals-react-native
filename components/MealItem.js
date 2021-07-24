import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const MealItem = ({ meal, navigation }) => {
  console.log('meal url', meal.imageUrl);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MealDetail', { meal })}
    >
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: meal.imageUrl }}
          style={{
            width: Dimensions.get('window').width / 1.1,
            height: Dimensions.get('window').height / 3,
            borderRadius: 10,
            width: '100%',
            justifyContent: 'space-between',
          }}
          resizeMode='cover'
        >
          <Text style={styles.mealTitle}>{meal.title}</Text>
          <View style={styles.footerWrapper}>
            <Text style={styles.footer}>{meal.duration}m</Text>
            <Text style={styles.footer}>{meal.complexity.toUpperCase()}</Text>
            <Text style={styles.footer}>
              {meal.affordibility.toUpperCase()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 20,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealTitle: {
    fontSize: 20,
    color: '#fff',
    padding: 7,
    fontFamily: 'HeyBenito',
    backgroundColor: 'rgba(81, 18, 129, 0.4)',
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(76, 161, 163, 0.8)',
  },
  footer: {
    padding: 5,
    fontFamily: 'HeyBenito',
    fontSize: 15,
    color: 'rgb(255, 205, 104)',
  },
});

export default MealItem;
