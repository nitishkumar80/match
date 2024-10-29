import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import cricketData from '../assets/data/cricket.json'; // Ensure this path is correct

const TeamScreen = ({ route }) => {
  const { seriesId } = route.params; // Assuming you're passing the series ID as a parameter
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const series = cricketData.find((item) => item.id === seriesId);
    if (series) {
      setTeams(series.Teams);
    }
  }, [seriesId]);

  if (!teams.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.placeholder}>No team data available</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {teams.map((team) => (
        <View key={team.teamName} style={styles.teamCard}>
          <Text style={styles.teamName}>{team.teamName}</Text>
          <Text style={styles.info}>Captain: {team.captain}</Text>
          <Text style={styles.info}>Coach: {team.coach}</Text>
          <Text style={styles.info}>Key Players: {team.keyPlayers.join(', ')}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  teamCard: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    elevation: 2,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: '#333',
  },
  placeholder: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default TeamScreen;
