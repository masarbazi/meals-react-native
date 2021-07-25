import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

const GridItem = ({ color, title, onSelect, imageUrl }) => {
  return (
    <TouchableOpacity style={{ ...styles.gridItem }} onPress={onSelect}>
      <ImageBackground style={styles.image} source={{ uri: imageUrl }}>
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
    fontSize: 20,
    textAlign: 'right',
    fontFamily: 'HeyBenito',
    color: '#fff',
  },
});

export default GridItem;
