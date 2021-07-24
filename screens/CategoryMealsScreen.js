import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryMealsScreen = ({ navigation, route }) => {
  const { category } = route.params;

  return (
    <View>
      <Text>{category.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
