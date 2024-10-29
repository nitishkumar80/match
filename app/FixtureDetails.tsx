import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define a static fixture with more details
const fixture = {
  id: '1',
  teams: ['India', 'Bangladesh'],
  date: 'October 1, 2024',
  time: '15:30',
  venue: 'Sher-e-Bangla National Stadium, Dhaka',
  toss: 'India won the toss and elected to bat',
  umpires: ['Aleem Dar', 'Rod Tucker'],
  status: 'Live',
  weather: 'Sunny, 32°C',
  matchFormat: 'ODI',
  manOfTheMatch: 'Virat Kohli',
  matchResult: 'India won by 5 wickets',
  
  teamCoaches: {
    india: 'Rahul Dravid',
    bangladesh: 'Russell Domingo',
  },

  captains: {
    india: 'Rohit Sharma',
    bangladesh: 'Shakib Al Hasan',
  },
  viceCaptains: {
    india: 'KL Rahul',
    bangladesh: 'Tamim Iqbal',
  },

  playingXI: {
    india: ['Rohit Sharma', 'Shubman Gill', 'Virat Kohli', 'KL Rahul', 'Hardik Pandya'],
    bangladesh: ['Tamim Iqbal', 'Shakib Al Hasan', 'Mushfiqur Rahim', 'Mahmudullah', 'Taskin Ahmed'],
  },

  additionalPlayers: {
    india: ['Ishan Kishan', 'Deepak Chahar', 'Prithvi Shaw'],
    bangladesh: ['Soumya Sarkar', 'Nasum Ahmed', 'Mohammad Naim'],
  },
};

// FixtureDetails Component
export default function FixtureDetails() {
  const navigation = useNavigation(); // Hook to navigate back

  return (

    <ImageBackground
    source={{ uri: 'https://wallpapers.com/images/featured/iphone-wltnz5o1xymafqmo.jpg' }} // Replace with your background image URL
    style={styles.backgroundImage}
  >
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        {/* Display teams */}
        <Text style={styles.header}>Fixture Details</Text>
        <View style={styles.teamContainer}>
          <Text style={styles.teamText}>{fixture.teams[0]}</Text>
          <Text style={styles.vsText}>vs</Text>
          <Text style={styles.teamText}>{fixture.teams[1]}</Text>
        </View>

        {/* Display other details */}
        <View style={styles.detailContainer}>
          <Text style={styles.detailText}>Date: {fixture.date}</Text>
          <Text style={styles.detailText}>Time: {fixture.time}</Text>
          <Text style={styles.detailText}>Venue: {fixture.venue}</Text>
          <Text style={styles.detailText}>Toss: {fixture.toss}</Text>
          <Text style={styles.detailText}>Umpires: {fixture.umpires.join(', ')}</Text>
          <Text style={styles.detailText}>Status: {fixture.status}</Text>
          <Text style={styles.detailText}>Weather: {fixture.weather}</Text>
          <Text style={styles.detailText}>Format: {fixture.matchFormat}</Text>
          <Text style={styles.detailText}>Result: {fixture.matchResult}</Text>
          <Text style={styles.detailText}>Man of the Match: {fixture.manOfTheMatch}</Text>
        </View>

        {/* Display captains, vice captains, and coaches */}
        <Text style={styles.sectionHeader}>Team Information</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.teamHeader}>India</Text>
          <Text style={styles.detailText}>Captain: {fixture.captains.india}</Text>
          <Text style={styles.detailText}>Vice-Captain: {fixture.viceCaptains.india}</Text>
          <Text style={styles.detailText}>Coach: {fixture.teamCoaches.india}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.teamHeader}>Bangladesh</Text>
          <Text style={styles.detailText}>Captain: {fixture.captains.bangladesh}</Text>
          <Text style={styles.detailText}>Vice-Captain: {fixture.viceCaptains.bangladesh}</Text>
          <Text style={styles.detailText}>Coach: {fixture.teamCoaches.bangladesh}</Text>
        </View>

        {/* Display playing XI for both teams */}
        <Text style={styles.sectionHeader}>Playing XI</Text>
        <Text style={styles.teamHeader}>India</Text>
        {fixture.playingXI.india.map((player, index) => (
          <Text key={index} style={styles.playerText}>
            {player}
          </Text>
        ))}

        <Text style={styles.teamHeader}>Bangladesh</Text>
        {fixture.playingXI.bangladesh.map((player, index) => (
          <Text key={index} style={styles.playerText}>
            {player}
          </Text>
        ))}

        {/* Display additional players */}
        <Text style={styles.sectionHeader}>Additional Players</Text>
        <Text style={styles.teamHeader}>India</Text>
        {fixture.additionalPlayers.india.map((player, index) => (
          <Text key={index} style={styles.playerText}>
            {player}
          </Text>
        ))}

        <Text style={styles.teamHeader}>Bangladesh</Text>
        {fixture.additionalPlayers.bangladesh.map((player, index) => (
          <Text key={index} style={styles.playerText}>
            {player}
          </Text>
        ))}
      </View>

      {/* Back button at the center bottom */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure the image covers the entire background
  },
  card: {
    marginTop:90,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  teamText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vsText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#666',
    marginHorizontal: 10,
  },
  detailContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  teamHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  playerText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 2,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  backButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
