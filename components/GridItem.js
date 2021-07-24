import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GridItem = ({ color, title, onSelect }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.gridItem, backgroundColor: color }}
      onPress={onSelect}
    >
      <View>
        <Text style={styles.gridItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
    padding: 15,
    borderRadius: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  gridItemText: {
    fontSize: 18,
    textAlign: 'right',
    fontFamily: 'HeyBenito',
  },
});

export default GridItem;
