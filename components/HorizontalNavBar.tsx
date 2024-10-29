import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const navItems = ['Overview', 'Matches', 'Teams', 'Series Stats', 'Venues', 'News', 'Info'];

const HorizontalNavBar = ({ setActiveTab }) => {
  return (
    <FlatList
      data={navItems}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveTab(item)}
        >
          <Text style={styles.navText}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );
};

const styles = StyleSheet.create({
  navItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
    borderRadius: 20,
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HorizontalNavBar;
