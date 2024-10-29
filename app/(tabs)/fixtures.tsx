import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the type for the fixture data
type Fixture = {
  id: string;
  teams: string[];
  date: string;
  time: string;
  venue: string;
};

// Define the type for the navigation stack
type RootStackParamList = {
  Fixtures: undefined;
  FixtureDetails: { fixture: Fixture };
};

// Define the navigation prop type
type FixturesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Fixtures'
>;

// Mock data for fixtures
const fixturesData: Fixture[] = [
  {
    id: '1',
    teams: ['India', 'Bangladesh'],
    date: '2024-10-01',
    time: '15:30',
    venue: 'Sher-e-Bangla National Stadium, Dhaka',
  },
  {
    id: '2',
    teams: ['Australia', 'England'],
    date: '2024-10-05',
    time: '18:00',
    venue: 'Melbourne Cricket Ground, Australia',
  },
  {
    id: '3',
    teams: ['South Africa', 'New Zealand'],
    date: '2024-09-30',
    time: '13:00',
    venue: 'Newlands, Cape Town',
  },
  {
    id: '4',
    teams: ['Pakistan', 'Sri Lanka'],
    date: '2024-10-08',
    time: '19:00',
    venue: 'Gaddafi Stadium, Lahore',
  },
];

// Fixture Component
export default function Fixtures() {
  const navigation = useNavigation<FixturesScreenNavigationProp>();

  // Function to render a fixture item
  const renderFixtureItem = ({ item }: { item: Fixture }) => (
    <TouchableOpacity
      style={styles.fixtureCard}
      onPress={() => navigation.navigate('FixtureDetails', { fixture: item })} // Pass the fixture object
    >
      {/* Display teams */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamText}>{item.teams[0]}</Text>
        <Text style={styles.vsText}>vs</Text>
        <Text style={styles.teamText}>{item.teams[1]}</Text>
      </View>
      {/* Display match info */}
      <Text style={styles.dateText}>Date: {item.date}</Text>
      <Text style={styles.timeText}>Time: {item.time}</Text>
      <Text style={styles.venueText}>Venue: {item.venue}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/featured/iphone-wltnz5o1xymafqmo.jpg' }} // Replace with your background image URL
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Upcoming Fixtures</Text>
        <FlatList
          data={fixturesData}
          keyExtractor={(item) => item.id}
          renderItem={renderFixtureItem}
        />
      </View>
    </ImageBackground>
  );
}

// Styles
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure the image covers the entire background
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add a slight white overlay for readability
    padding: 16,
    marginTop: 90,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  fixtureCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  teamText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  vsText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#666',
  },
  dateText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  venueText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});
