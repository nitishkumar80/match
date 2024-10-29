import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OverviewScreen = ({ cardData }) => {
  return (
    <View style={styles.container}>
      {cardData ? (
        <>
          <Text style={styles.title}>{cardData.title}</Text>
          <Text style={styles.date}>Date: {cardData.date}</Text>
          {/* Add more overview details here */}
        </>
      ) : (
        <Text style={styles.placeholder}>Select a match to see the overview.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  placeholder: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default OverviewScreen;
