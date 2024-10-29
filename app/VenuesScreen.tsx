import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

type Venue = {
  name: string;
  location: string;
  matches: string;
};

const venues: Venue[] = [
  { name: 'M. Chinnaswamy Stadium', location: 'Bengaluru', matches: '1 Match' },
  { name: 'Maharashtra Cricket Association Stadium', location: 'Pune', matches: '1 Match' },
  { name: 'Wankhede Stadium', location: 'Mumbai', matches: '1 Match' },
];

const VenuesScreen = () => {
  const renderItem = ({ item }: { item: Venue }) => (
    <TouchableOpacity style={styles.venueItem}>
      <Text style={styles.venueName}>{item.name}</Text>
      <Text style={styles.venueDetails}>{`${item.location}, ${item.matches}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>India</Text>
      <FlatList
        data={venues}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  venueItem: {
    paddingVertical: 12,
  },
  venueName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  venueDetails: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
});

export default VenuesScreen;
