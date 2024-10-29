import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import cardData from '../assets/data/cricket.json'; // Adjust path if necessary

const TopCardList = ({ setSelectedCard, setActiveTab }) => {
  return (
    <FlatList
      data={cardData}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.card}
          onPress={() => {
            setSelectedCard(item);
            setActiveTab('Overview'); // Change to your desired default tab
          }}
        >
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 150,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardDate: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default TopCardList;
