import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FiltersScreen = ({ navigation }) => {
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

  return (
    <View>
      <Text>Filters Screen!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    justifyContent: 'center',
    marginLeft: 20,
  },
});

export default FiltersScreen;
