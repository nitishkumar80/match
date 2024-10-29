import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define types for series information
interface SeriesInfo {
  seriesName: string;
  duration: string;
  format: string;
}

// Example series information data
const seriesData: SeriesInfo = {
  seriesName: 'India vs New Zealand 2024',
  duration: '16 Oct 2024 - 05 Nov 2024',
  format: 'Test Series',
};

const InfoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Series Information</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Series:</Text>
        <Text style={styles.infoValue}>{seriesData.seriesName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Duration:</Text>
        <Text style={styles.infoValue}>{seriesData.duration}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Format:</Text>
        <Text style={styles.infoValue}>{seriesData.format}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    width: 80,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
});

export default InfoScreen;
