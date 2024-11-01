import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Dub: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Main Card */}
        <TouchableOpacity style={styles.mainCard} onPress={toggleExpanded}>
          <View style={styles.mainCardHeader}>
            <Image 
              source={{ uri: 'https://cricketvectors.akamaized.net/Series/1P0.png?impolicy=default_web' }} // replace with actual Emirates D20 logo URL
              style={styles.logo}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Emirates D20 League 2024</Text>
              <Text style={styles.date}>22 Oct - 08 Nov</Text>
            </View>
          </View>
          <Text style={styles.expandIcon}>{expanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {/* Expanded Content */}
        {expanded && (
          <View style={styles.matchContainer}>
            {/* Match Card 1 */}
            <View style={styles.matchCard}>
              <Text style={styles.matchInfo}>20th T20,Seven Districts Ground,Ajman, UAE</Text>
              <View style={styles.matchRow}>
                {/* Left Side - Teams */}
                <View style={styles.teamsColumn}>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/8/89/Brisbane_heat.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Dubai </Text>
                  </View>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://cricclubs.com/documentsRep/profilePics/29ecff89-5017-405f-bd94-63491fb21c72.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Fujairah</Text>
                  </View>
                </View>
                
                {/* Right Side - Match Time */}
                <View style={styles.timeContainer}>
                  <Text style={styles.matchDay}>Today</Text>
                  <Text style={styles.matchTime}>11:00 PM</Text>
                </View>
              </View>
            </View>

            {/* Match Card 2 */}
            <View style={styles.matchCard}>
              <Text style={styles.matchInfo}>22nd T20,Seven Districts Ground,Ajman, UAE</Text>
              <View style={styles.matchRow}>
                {/* Left Side - Teams */}
                <View style={styles.teamsColumn}>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/8/89/Brisbane_heat.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Dubai</Text>
                  </View>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/EMB-CR1@2x.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Emirates Blue </Text>
                  </View>
                </View>
                
                {/* Right Side - Match Time */}
                <View style={styles.timeContainer}>
                  <Text style={styles.matchDay}>Tomorrow</Text>
                  <Text style={styles.matchTime}>11:30 PM</Text>
                </View>
              </View>
            </View>

            {/* Add more match cards as needed */}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0f0f0',
     // Light background to differentiate cards
  },
  contentContainer: {
    padding: 20,
  },
  mainCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  mainCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  expandIcon: {
    fontSize: 20,
    color: '#666',
  },
  matchContainer: {
    marginTop: 10,
  },
  matchCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15, // Adds space between cards
    elevation: 2,
  },
  matchInfo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsColumn: {
    flexDirection: 'column',
    width: '60%',
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  teamLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  teamName: {
    fontSize: 14,
    color: '#333',
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  matchDay: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  matchTime: {
    fontSize: 14,
    color: '#e91e63',
  },
});



export default Dub;
