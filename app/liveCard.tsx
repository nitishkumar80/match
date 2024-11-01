import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons'; // For using arrow icons

const teamsData = [
  {
    id: '1',
    logo: 'https://img.freepik.com/premium-vector/cws-logo-cws-letter-cws-letter-logo-design-initials-cws-logo-linked-with-circle-uppercase-monogram-logo-cws-typography-technology-business-real-estate-brand_229120-62631.jpg',
    name: 'CWC League - II 2023-27',
    runs: 200,
    status: 'Live',
    status1: '53 runs needed in 168 balls',
    team1: {
      name: 'SCO',
      logo: 'https://hindustantimes.com/static-content/1y/cricket-logos/teams/SCO.png?2', // Replace with Team 1 logo URL
      score: '154',
    },
    team2: {
      name: 'NEP',
      logo: 'https://hindustantimes.com/static-content/1y/cricket-logos/teams/NEP-W.png?2', // Replace with Team 2 logo URL
      score: '102-5',
    },
  },
  {
    id: '2',
    logo: 'https://fancode.com/skillup-uploads/prod-images/2023/10/Emirates-D20_Tour-Logo.png',
    name: 'Emirates D20 2024',
    runs: 180,
    status: 'Live',
    status1: '58 runs needed in 36 balls',
    team1: {
      name: 'EMB',
      logo: 'https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-BLUE@2x.png', // Replace with Team 1 logo URL
      score: '148-6',
    },
    team2: {
      name: 'SHA',
      logo: 'https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-SHRJ@2x.png', // Replace with Team 2 logo URL
      score: '91-4',
    },
  },
];

const LiveMatchCard = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <View style={styles.container}>
      {teamsData.map((team) => (
        <View key={team.id} style={styles.card}>
          <TouchableOpacity style={styles.cardHeader} onPress={() => toggleCard(team.id)}>
            <View style={styles.cardHeaderContent}>
              <Image source={{ uri: team.logo }} style={styles.teamLogo} />
              <Text style={styles.teamName}>{team.name}</Text>
              <Text style={styles.liveStatus}>
                {team.status} <Text style={styles.liveText}>●</Text>
              </Text>
            </View>
            <Feather name={expandedCard === team.id ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
          </TouchableOpacity>

          {/* Expandable content */}
          {expandedCard === team.id && (
            <Animated.View style={styles.expandableContent}>
              <View style={styles.teamScoresContainer}>
                <View style={styles.teamContainer}>
                  <Image source={{ uri: team.team1.logo }} style={styles.teamLogoSmall} />
                  <Text style={styles.contentText}>{team.team1.name} {team.team1.score}</Text>
                </View>
                <View style={styles.teamContainer}>
                  <Image source={{ uri: team.team2.logo }} style={styles.teamLogoSmall} />
                  <Text style={styles.contentText}>{team.team2.name} {team.team2.score}</Text>
                </View>
              </View>
              <Text style={styles.contentText}>{team.status1}</Text>
              <View style={styles.liveStatusContainer}>
                
              </View>
            </Animated.View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
 
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  cardHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  teamLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  liveStatus: {
    fontSize: 16,
    color: 'red',
  },
  liveText: {
    color: 'red',
    fontWeight: 'bold',
  },
  expandableContent: {
    padding: 15,
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  teamScoresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamLogoSmall: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  contentText: {
    fontSize: 16,
    alignItems: 'center',
    justifyContent:'center',
    textAlign:'center',
  },
  liveStatusContainer: {
    alignItems: 'center', // Center align the live status text
    marginTop: 10,
  },
});

export default LiveMatchCard;
