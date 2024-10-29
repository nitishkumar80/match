import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Define the types for match data
interface Match {
  id: string;
  team1: string;
  team2: string;
  result: string;
  details: string;
}

// Define the props for the MatchesScreen component
interface MatchesScreenProps {
  cardData?: {
    title: string;
    date: string;
  };
}

const MatchesScreen: React.FC<MatchesScreenProps> = ({ cardData }) => {
  const [matchData, setMatchData] = useState<Match[]>([]);

  useEffect(() => {
    if (cardData?.title) {
      // Dynamically load match data from cricket.json based on the selected title
      import('../assets/data/cricket.json')
        .then((data) => {
          // Filter matches for the selected series
          const selectedMatches = data.matches.filter(
            (match: Match) => match.series === cardData.title
          );
          setMatchData(selectedMatches);
        })
        .catch((error) => console.error('Error loading match data:', error));
    }
  }, [cardData]);

  return (
    <View style={styles.container}>
      {cardData ? (
        <>
          <Text style={styles.title}>Matches for {cardData.title}</Text>
          <Text style={styles.date}>Date: {cardData.date}</Text>
        </>
      ) : (
        <Text style={styles.placeholder}>Select a match to see details.</Text>
      )}

      {/* FlatList for displaying match details */}
      <FlatList
        data={matchData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.matchCard}>
            <Text style={styles.matchTitle}>{item.team1} vs {item.team2}</Text>
            <Text style={styles.matchResult}>
              {item.result ? item.result : 'Upcoming'}
            </Text>
            <Text style={styles.matchDetails}>{item.details}</Text>
          </View>
        )}
      />
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
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  matchCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  matchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  matchResult: {
    fontSize: 14,
    color: '#4CAF50', // Green for 'Won', orange for 'Upcoming'
    fontWeight: '600',
    marginBottom: 5,
  },
  matchDetails: {
    fontSize: 14,
    color: '#888',
  },
  placeholder: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default MatchesScreen;
