import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ForYou: React.FC = () => {
  const [expandedMatch, setExpandedMatch] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedMatch(expandedMatch === index ? null : index);
  };

  const matches = [
    {
      title: "NZW vs INDW 2024",
      titleLogo: 'https://i.ytimg.com/vi/MO7I4yslyJc/hq720.jpg?v=671e2611&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAE7IefsmCZPog2PVjr3dII7ioQKw', // Replace with actual logo URL
      details: "New Zealand Women vs India Women",
      team1: { name: "NZW", logo: "https://hindustantimes.com/static-content/1y/cricket-logos/teams/NZ-W.png?2", score: "250/6" },
      team2: { name: "INDW", logo: "https://hindustantimes.com/static-content/1y/cricket-logos/teams/IND.png?2", score: "245/9" },
      result: "NZW Won by 5 runs"
    },
    {
      title: "SA vs BAN 2024",
      titleLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZhwfXDvZudvF6p4t5usJefNtp7ssgUzT4Q&s', // Replace with actual logo URL
      details: "South Africa vs Bangladesh",
      team1: { name: "SA", logo: "https://hindustantimes.com/static-content/1y/cricket-logos/teams/SA.png?2", score: "320/8" },
      team2: { name: "BAN", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Bangladesh_Cricket_Board_Logo.svg/1200px-Bangladesh_Cricket_Board_Logo.svg.png", score: "310/7" },
      result: "SA Won by 10 runs"
    },
    {
      title: "AUS vs ENG 2024",
      titleLogo: 'https://c8.alamy.com/comp/2M78XND/a-3d-render-of-england-vs-australia-flag-icons-on-a-green-round-cricket-field-2M78XND.jpg', // Replace with actual logo URL
      details: "Australia vs England",
      status: 'Live',
      team1: { name: "AUS", logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png", score: "280/7" },
      team2: { name: "ENG", logo: "https://w7.pngwing.com/pngs/153/922/png-transparent-flag-of-england-2018-world-cup-england-cricket-team-england-flag-world-symbol-thumbnail.png", score: "275/9" },
      result: "AUS Won by 5 runs"
    },
    {
      title: "WI vs PAK 2024",
      titleLogo: 'https://images.deccanchronicle.com/dc-Cover-tf4umkfpclcquesstsapag1ma2-20190531152304.Medi.jpeg', // Replace with actual logo URL
      details: "West Indies vs Pakistan",
      team1: { name: "WI", logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Cricket_West_Indies_Logo_2017.png", score: "300/6" },
      team2: { name: "PAK", logo: "https://i.bleacherreport.net/images/team_logos/328x328/pakistan_cricket.png?canvas=492,328", score: "298/9" },
      result: "WI Won by 2 runs"
    },
    {
      title: "IND vs SL 2024",
      titleLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJP1FezDbUyaQll_XHKMP3YOlF7DBMG8yZA&s', // Replace with actual logo URL
      details: "India vs Sri Lanka",
      status: 'Live',
      team1: { name: "IND", logo: "https://logodix.com/logo/2168063.jpg", score: "325/8" },
      team2: { name: "SL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwP_Gb3tRCBqatRn3ZskkmIHZjaDqiG2VOtw&s", score: "320/7" },
      result: "IND Won by 5 runs"
    },
    {
        title: "NZ vs AUS 2024",
        titleLogo: 'https://i.pinimg.com/originals/89/2e/aa/892eaa0391bd7a32f54c7a3a2c3d87b5.jpg', // Replace with actual logo URL
        details: "New Zealand vs Australia",
        team1: { name: "NZ", logo: "https://seeklogo.com/images/A/All_Blacks-logo-1EEA79B137-seeklogo.com.png", score: "245/9" },
        team2: { name: "AUS", logo: "https://www.pngkey.com/png/detail/533-5334555_cricket-australia-logo-clipart-australia-national-cricket-australia.png", score: "240/8" },
        result: "NZ Won by 5 runs"
      },
      {
        title: "ENG vs SA 2024",
        titleLogo: 'https://img.freepik.com/premium-photo/england-vs-south-africa-cricket-flags-with-shield-celebration-stadium-3d-illustration_394271-7098.jpg', // Replace with actual logo URL
        details: "England vs South Africa",
        team1: { name: "ENG", logo: "https://w7.pngwing.com/pngs/153/922/png-transparent-flag-of-england-2018-world-cup-england-cricket-team-england-flag-world-symbol-thumbnail.png", score: "270/7" },
        team2: { name: "SA", logo: "https://hindustantimes.com/static-content/1y/cricket-logos/teams/SA.png?2", score: "265/9" },
        result: "ENG Won by 5 runs"
      },
      {
        title: "PAK vs BAN 2024",
        titleLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_5b8_SrmP5peLWym9E-eCvUY8xG9vgraeQ&s', // Replace with actual logo URL
        details: "Pakistan vs Bangladesh",
        team1: { name: "PAK", logo: "https://i.bleacherreport.net/images/team_logos/328x328/pakistan_cricket.png?canvas=492,328", score: "290/8" },
        team2: { name: "BAN", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Bangladesh_Cricket_Board_Logo.svg/1200px-Bangladesh_Cricket_Board_Logo.svg.png", score: "285/9" },
        result: "PAK Won by 5 runs"
      },
      {
        title: "WI vs IND 2024",
        titleLogo: 'https://i.ytimg.com/vi/tGOqvr9oKjg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAMLp7_d1EuhOfYJ6-indWAx_ytBg', // Replace with actual logo URL
        details: "West Indies vs India",
        team1: { name: "WI", logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Cricket_West_Indies_Logo_2017.png", score: "310/7" },
        team2: { name: "IND", logo: "https://logodix.com/logo/2168063.jpg", score: "305/8" },
        result: "WI Won by 5 runs"
      },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.followSection}>
          
          <Image source={{ uri: "https://logodix.com/logo/2168063.jpg" }} style={styles.indiaLogo} />
          <Text style={styles.followText}>Follow team India</Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>

        {matches.map((match, index) => (
          <View key={index} style={styles.matchContainer}>
            <TouchableOpacity style={styles.matchSection} onPress={() => toggleExpand(index)}>
              <View style={styles.matchHeader}>
                <Image source={{ uri: match.titleLogo }} style={styles.titleLogo} />
                <Text style={styles.matchText}>{match.title}</Text>
                {match.status === 'Live' && (
                  <Text style={styles.liveStatus}>
                    Live <Text style={styles.liveDot}>●</Text>
                  </Text>
                )}
                <Icon name={expandedMatch === index ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="#555" />
              </View>
            </TouchableOpacity>

            {expandedMatch === index && (
              <View style={styles.expandedContent}>
                <Text style={styles.matchDetails}>{match.details}</Text>

                <View style={styles.teamContainer}>
                  <Image source={{ uri: match.team1.logo }} style={styles.teamLogo} />
                  <Text style={styles.teamName}>{match.team1.name}</Text>
                  <Text style={styles.teamScore}>{match.team1.score}</Text>
                </View>

                <View style={styles.teamContainer}>
                  <Image source={{ uri: match.team2.logo }} style={styles.teamLogo} />
                  <Text style={styles.teamName}>{match.team2.name}</Text>
                  <Text style={styles.teamScore}>{match.team2.score}</Text>
                </View>

                <Text style={styles.matchResult}>{match.result}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  liveStatus: {
    fontSize: 16,
    color: 'red',
    marginLeft: 10,
  },
  liveDot: {
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 10,
  },
  indiaLogo: {
    width: 40,
    height: 40,
    borderRadius:10,
    marginHorizontal: 10,
  },
  followSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e8f4f8',
    borderRadius: 8,
    marginBottom: 10,
  },
  followText: {
    fontSize: 16,
  },
  followButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  matchContainer: {
    marginBottom: 10,
  },
  matchSection: {
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
  },
  matchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  titleLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  matchText: {
    fontSize: 16,
    flex: 1,
  },
  expandedContent: {
    padding: 10,
    backgroundColor: '#e8f4f8',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  matchDetails: {
    fontSize: 14,
    marginBottom: 10,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  teamLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  teamScore: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchResult: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default ForYou;
