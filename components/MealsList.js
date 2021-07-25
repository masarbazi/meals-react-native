import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({ data, navigation }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MealItem meal={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealsList;
