import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import MatchApp from '../matchApp'; // Adjust the import path based on your project structure

export default function Matches() {
  return (
    // <ImageBackground
    //   source={{ uri: 'https://wallpapers.com/images/featured/iphone-wltnz5o1xymafqmo.jpg' }} // Background image URL
    //   style={styles.backgroundImage}
    // >
      <View style={styles.container}>
        <MatchApp />
      </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background for contrast
    padding: 10,
    marginTop: 90,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures the background image covers the entire view
  },
});
