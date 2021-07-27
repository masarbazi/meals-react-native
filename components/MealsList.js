import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import MealItem from './MealItem';
import { Colors } from '../constants/Colors';

const MealsList = ({ data, navigation, noMealsMessage }) => {
  if (data.length == 0) {
    return (
      <View style={styles.noItemScreen}>
        <Text style={styles.noItemText}>{noMealsMessage}</Text>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  noItemScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  noItemText: {
    fontFamily: 'Blox2',
    fontSize: 22,
    color: Colors.header,
    padding: 20,
    textAlign: 'center',
    lineHeight: 28,
  },
});

export default MealsList;
