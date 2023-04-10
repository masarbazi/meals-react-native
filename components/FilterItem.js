import React from 'react';
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';

const FitlerItem = ({ label, value, onSelect, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onSelect}
        trackColor={{ false: '#c9c9c9', true: Colors.header }}
        thumbColor={value ? Colors.switchThumb : '#696969'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderColor: '#333',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});

export default FitlerItem;
