import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Mock data for matches
const matchesData = [
  {
    id: '1',
    teams: 'BAN vs IND',
    date: 'October 1, 2024',
    venue: 'Sher-e-Bangla National Stadium, Dhaka',
    status: 'Live',
    toss: 'India won the toss and elected to bat',
    score: 'India 200/3 (30 overs)',
    time: 'Start time: 15:30',
    umpires: ['Aleem Dar', 'Rod Tucker'],
    weather: 'Sunny, 32°C',
  },
  {
    id: '2',
    teams: 'AUS vs ENG',
    date: 'October 2, 2024',
    venue: 'Melbourne Cricket Ground, Melbourne',
    status: 'Upcoming',
    toss: 'Toss not yet decided',
    score: 'N/A',
    time: 'Start time: 16:00',
    umpires: ['Kumar Dharmasena', 'Paul Reiffel'],
    weather: 'Partly cloudy, 25°C',
  },
  {
    id: '3',
    teams: 'PAK vs SA',
    date: 'October 3, 2024',
    venue: 'Gaddafi Stadium, Lahore',
    status: 'Upcoming',
    toss: 'Toss not yet decided',
    score: 'N/A',
    time: 'Start time: 17:30',
    umpires: ['Richard Illingworth', 'Bruce Oxenford'],
    weather: 'Humid, 29°C',
  },
  {
    id: '4',
    teams: 'NZ vs WI',
    date: 'October 4, 2024',
    venue: 'Eden Park, Auckland',
    status: 'Completed',
    toss: 'New Zealand won the toss and elected to bowl',
    score: 'New Zealand 150/4 (20 overs), West Indies 145/9 (20 overs)',
    time: 'Start time: 13:00',
    umpires: ['Michael Gough', 'Chris Gaffaney'],
    weather: 'Cool, 18°C',
  },
  {
    id: '5',
    teams: 'AFG vs SL',
    date: 'October 5, 2024',
    venue: 'Kandahar International Stadium, Kandahar',
    status: 'Upcoming',
    toss: 'Toss not yet decided',
    score: 'N/A',
    time: 'Start time: 14:00',
    umpires: ['Ruchira Palliyaguruge', 'Adrian Holdstock'],
    weather: 'Sunny, 35°C',
  },
  {
    id: '6',
    teams: 'ZIM vs IRE',
    date: 'October 6, 2024',
    venue: 'Harare Sports Club, Harare',
    status: 'Upcoming',
    toss: 'Toss not yet decided',
    score: 'N/A',
    time: 'Start time: 11:00',
    umpires: ['Joel Wilson', 'Marais Erasmus'],
    weather: 'Sunny, 28°C',
  },
  {
    id: '7',
    teams: 'SA vs ENG',
    date: 'October 7, 2024',
    venue: 'Newlands, Cape Town',
    status: 'Upcoming',
    toss: 'Toss not yet decided',
    score: 'N/A',
    time: 'Start time: 12:00',
    umpires: ['Simon Taufel', 'Billy Bowden'],
    weather: 'Windy, 23°C',
  },
];


export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Simulate API call with useEffect and setTimeout
  useEffect(() => {
    // Simulating an API call to fetch matches data
    setTimeout(() => {
      setMatches(matchesData); // Set the mock matches data
      setLoading(false); // Turn off loading spinner after data is fetched
    }, 1000);
  }, []);

  // Function to render each match item
  const renderMatch = ({ item }) => (
<TouchableOpacity
  style={styles.matchItem}
  onPress={() => navigation.navigate('MatchDetails', { match: item })}  // Ensure { match: item } is being passed
>
      <Text style={styles.matchTitle}>{item.teams}</Text>
      <Text style={styles.matchSubtitle}>Date: {item.date}</Text>
      <Text style={styles.matchSubtitle}>Venue: {item.venue}</Text>
      <Text style={[styles.matchStatus, getStatusStyle(item.status)]}>
        Status: {item.status}
      </Text>
    </TouchableOpacity>
  );

  // Get status style based on the match status
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Live':
        return { color: 'green' };
      case 'Upcoming':
        return { color: 'blue' };
      case 'Completed':
        return { color: 'gray' };
      default:
        return {};
    }
  };

  return (
    <ImageBackground
    source={{ uri: 'https://wallpapers.com/images/featured/iphone-wltnz5o1xymafqmo.jpg' }} // Replace with your background image URL
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={matches}
          keyExtractor={(item) => item.id}
          renderItem={renderMatch}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    marginTop:90,
  },
  matchItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  matchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  matchSubtitle: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  matchStatus: {
    fontSize: 14,
    fontWeight: '600',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure the image covers the entire background
  },
});
