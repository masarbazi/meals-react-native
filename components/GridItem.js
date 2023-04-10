import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { images } from '../constants/images';

const GridItem = ({ color, title, onSelect, imageName }) => {
  return (
    <TouchableOpacity style={{ ...styles.gridItem }} onPress={onSelect}>
      <ImageBackground style={styles.image} source={images[imageName]}>
        <View style={styles.overlay}>
          <Text style={styles.gridItemText}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  gridItemText: {
    padding: 10,
    textAlign: 'right',
    color: '#fff',
    fontFamily: 'VazirMedium',
    fontSize: 17,
  },
});

export default GridItem;
