import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const WBBL: React.FC = () => {
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
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/9/97/Weber_wbbl_logo.png' }} // replace with actual WBBL logo URL
              style={styles.logo}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Womens Big Bash League 2024</Text>
              <Text style={styles.date}>27 Oct - 01 Dec</Text>
            </View>
          </View>
          <Text style={styles.expandIcon}>{expanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {/* Expanded Content */}
        {expanded && (
          <View style={styles.matchContainer}>
            {/* Match Card 1 */}
            <View style={styles.matchCard}>
              <Text style={styles.matchInfo}>10th T20, Junction Oval, Melbourne, Australia</Text>
              <View style={styles.matchRow}>
                {/* Left Side - Teams */}
                <View style={styles.teamsColumn}>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/8/89/Brisbane_heat.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Brisbane Heat Women</Text>
                  </View>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/0/07/Hobart_hurricanes.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Hobart Hurricanes Women</Text>
                  </View>
                </View>
                
                {/* Right Side - Match Time */}
                <View style={styles.timeContainer}>
                  <Text style={styles.matchDay}>Tomorrow</Text>
                  <Text style={styles.matchTime}>06:00 AM</Text>
                </View>
              </View>
            </View>

            {/* Match Card 2 */}
            <View style={styles.matchCard}>
              <Text style={styles.matchInfo}>11th T20, Junction Oval, Melbourne, Australia</Text>
              <View style={styles.matchRow}>
                {/* Left Side - Teams */}
                <View style={styles.teamsColumn}>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/WBBL05CapLogoRenegades.svg/1200px-WBBL05CapLogoRenegades.svg.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Melbourne Renegades Women</Text>
                  </View>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTay93HGAaWzuCjXrU2q_ikirJvcP1SFm31KQQZXkH_lNWBfL6hiDOq9eb3N2aTEu4FO0c&usqp=CAU' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Perth Scorchers Women</Text>
                  </View>
                </View>
                
                {/* Right Side - Match Time */}
                <View style={styles.timeContainer}>
                  <Text style={styles.matchDay}>Tomorrow</Text>
                  <Text style={styles.matchTime}>09:30 AM</Text>
                </View>
              </View>
            </View>

            {/* Match Card 3 */}
            <View style={styles.matchCard}>
              <Text style={styles.matchInfo}>12th T20, Adelaide Oval, Adelaide, Australia</Text>
              <View style={styles.matchRow}>
                {/* Left Side - Teams */}
                <View style={styles.teamsColumn}>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-ADS@2x.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Adelaide Strikers Women</Text>
                  </View>
                  <View style={styles.team}>
                    <Image 
                      source={{ uri: 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/313500/313506.logo.png' }} // replace with actual team logo URL
                      style={styles.teamLogo} 
                    />
                    <Text style={styles.teamName}>Sydney Sixers Women</Text>
                  </View>
                </View>
                
                {/* Right Side - Match Time */}
                <View style={styles.timeContainer}>
                  <Text style={styles.matchDay}>Tomorrow</Text>
                  <Text style={styles.matchTime}>12:00 PM</Text>
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

export default WBBL;
