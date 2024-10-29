import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// Define types for match data and team stats
interface TeamStats {
  id: string;
  team: string;
  series: string;
  played: number;
  won: number;
  lost: number;
  drawn: number;
  points: number;
  pct: string;
}

// Example data for series score and points table
const seriesScore = {
  team1: { name: 'IND', flag: 'https://via.placeholder.com/40' },
  team2: { name: 'NZ', flag: 'https://via.placeholder.com/40' },
  score1: 0,
  score2: 2,
  matchesPlayed: '2 / 3',
  status: 'NZ lead by 2 matches.',
};

const pointsTableData: TeamStats[] = [
  { id: '1', team: 'IND', series: '5*', played: 13, won: 8, lost: 4, drawn: 1, points: 98, pct: '62.82' },
  { id: '2', team: 'AUS', series: '4', played: 12, won: 8, lost: 3, drawn: 1, points: 90, pct: '62.50' },
  { id: '3', team: 'SL', series: '4', played: 9, won: 5, lost: 4, drawn: 0, points: 60, pct: '55.56' },
  { id: '4', team: 'NZ', series: '5*', played: 10, won: 5, lost: 5, drawn: 0, points: 60, pct: '50.00' },
  { id: '5', team: 'SA', series: '4*', played: 7, won: 3, lost: 3, drawn: 1, points: 40, pct: '47.62' },
];

const SeriesStatsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Series Overview */}
      <View style={styles.seriesContainer}>
        <Text style={styles.sectionTitle}>Test</Text>
        <View style={styles.scoreContainer}>
          <View style={styles.teamContainer}>
            <Image source={{ uri: seriesScore.team1.flag }} style={styles.flag} />
            <Text style={styles.teamName}>{seriesScore.team1.name}</Text>
          </View>
          <Text style={styles.seriesScore}>{seriesScore.score1} - {seriesScore.score2}</Text>
          <View style={styles.teamContainer}>
            <Image source={{ uri: seriesScore.team2.flag }} style={styles.flag} />
            <Text style={styles.teamName}>{seriesScore.team2.name}</Text>
          </View>
        </View>
        <Text style={styles.matchesPlayed}>{seriesScore.matchesPlayed} played</Text>
        <Text style={styles.seriesStatus}>{seriesScore.status}</Text>
      </View>

      {/* Points Table */}
      <Text style={styles.sectionTitle}>WTC 2023-25 Points Table</Text>
      <FlatList
        data={pointsTableData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.team}</Text>
            <Text style={styles.tableCell}>{item.series}</Text>
            <Text style={styles.tableCell}>{item.played}</Text>
            <Text style={styles.tableCell}>{item.won}</Text>
            <Text style={styles.tableCell}>{item.lost}</Text>
            <Text style={styles.tableCell}>{item.drawn}</Text>
            <Text style={styles.tableCell}>{item.points}</Text>
            <Text style={[styles.tableCell, styles.pctCell]}>{item.pct}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={[styles.tableRow, styles.headerRow]}>
            <Text style={styles.tableHeader}>Team</Text>
            <Text style={styles.tableHeader}>Series</Text>
            <Text style={styles.tableHeader}>P</Text>
            <Text style={styles.tableHeader}>W</Text>
            <Text style={styles.tableHeader}>L</Text>
            <Text style={styles.tableHeader}>D</Text>
            <Text style={styles.tableHeader}>Pts</Text>
            <Text style={[styles.tableHeader, styles.pctHeader]}>PCT %</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  seriesContainer: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  teamContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  flag: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seriesScore: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  matchesPlayed: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 5,
  },
  seriesStatus: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerRow: {
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 2,
  },
  tableHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 2,
  },
  pctCell: {
    color: '#FF5722',
    fontWeight: 'bold',
  },
  pctHeader: {
    color: '#333',
  },
});

export default SeriesStatsScreen;
