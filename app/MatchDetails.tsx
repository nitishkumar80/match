import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Define the match data
const matches = [
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
];

// MatchDetails Component
export default function MatchDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {matches.map((match) => (
        <View key={match.id} style={styles.matchContainer}>
          <Text style={styles.title}>Match: {match.teams}</Text>
          <Text style={styles.subtitle}>Date: {match.date}</Text>
          <Text style={styles.subtitle}>Venue: {match.venue}</Text>
          <Text style={styles.subtitle}>Status: {match.status}</Text>
          <Text style={styles.subtitle}>Score: {match.score}</Text>
          <Text style={styles.subtitle}>Time: {match.time}</Text>
          <Text style={styles.subtitle}>Toss: {match.toss}</Text>
          <Text style={styles.subtitle}>Umpires: {match.umpires.join(', ')}</Text>
          <Text style={styles.subtitle}>Weather: {match.weather}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  matchContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
});
