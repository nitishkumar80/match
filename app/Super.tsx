import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Super: React.FC = () => {
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
              source={{ uri: 'https://cricketvectors.akamaized.net/Series/1P1.png?impolicy=default_web' }} // replace with actual Super 50 logo URL
              style={styles.logo}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Super 50 Cup 2024</Text>
              <Text style={styles.date}>29 Oct - 23 Nov</Text>
            </View>
          </View>
          <Text style={styles.expandIcon}>{expanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {/* Expanded Content */}
        {expanded && (
          <View style={styles.matchContainer}>
            {/* Match Card 1 */}
            <View style={styles.matchCard}>
              <Text style={styles.matchInfo}>7th ODI, Brian Lara Stadium, Tarouba, WI</Text>
              <View style={styles.matchRow}>
                {/* Left Side - Teams */}
                <View style={styles.teamsColumn}>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Dubai_Capital.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Trinidad and Tobago</Text>
                  </View>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://cricclubs.com/documentsRep/profilePics/29ecff89-5017-405f-bd94-63491fb21c72.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Windward Islands</Text>
                  </View>
                </View>
                
                {/* Right Side - Match Time */}
                <View style={styles.timeContainer}>
                  <Text style={styles.matchDay}>Starting in</Text>
                  <Text style={styles.matchTime}>01h : 48m</Text>
                </View>
              </View>
            </View>

            {/* Match Card 2 */}
            <View style={styles.matchCard}>
              <Text style={styles.matchInfo}>8th ODI, Sir Frank Worrell Memorial Ground</Text>
              <View style={styles.matchRow}>
                {/* Left Side - Teams */}
                <View style={styles.teamsColumn}>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://cricclubs.com/documentsRep/profilePics/1a11bc3a-77c8-497e-96c0-17ff2a55a05d.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>West Indies Academy</Text>
                  </View>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://cricclubs.com/documentsRep/profilePics/29ecff89-5017-405f-bd94-63491fb21c72.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Jamaica Scorpions</Text>
                  </View>
                </View>
                
                {/* Right Side - Match Time */}
                <View style={styles.timeContainer}>
                  <Text style={styles.matchDay}>Tomorrow</Text>
                  <Text style={styles.matchTime}>06:30 PM</Text>
                </View>
              </View>
            </View>

            {/* Add more match cards as needed */}




            <View style={styles.matchCard}>
              <Text style={styles.matchInfo}>9th ODI, Queen's Park Oval, Port of Spain</Text>
              <View style={styles.matchRow}>
                {/* Left Side - Teams */}
                <View style={styles.teamsColumn}>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://cricclubs.com/documentsRep/profilePics/1a11bc3a-77c8-497e-96c0-17ff2a55a05d.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Guyana Harpy Eangles</Text>
                  </View>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://cricclubs.com/documentsRep/profilePics/29ecff89-5017-405f-bd94-63491fb21c72.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Barbados Pride</Text>
                  </View>
                </View>
                
                {/* Right Side - Match Time */}
                <View style={styles.timeContainer}>
                  <Text style={styles.matchDay}>03 Nov</Text>
                  <Text style={styles.matchTime}>06:30 PM</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
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

export default Super;
