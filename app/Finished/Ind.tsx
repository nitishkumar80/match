import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Ind: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [expandedTests, setExpandedTests] = useState<{ [key: string]: number | null }>({});

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? null : section);
    setExpandedTests({});
  };

  const toggleTest = (section: number, test: number) => {
    setExpandedTests((prev) => ({
      ...prev,
      [section]: prev[section] === test ? null : test,
    }));
  };

  return (
    <View style={styles.container}>
      {/* Section 1 - New Zealand Tour */}
      <TouchableOpacity style={styles.header} onPress={() => toggleSection(1)}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYVJUGkg62XC1NNS3oD7ZS-0XB6wt5oxDow&s' }} style={styles.headerIcon} />
          <View>
            <Text style={styles.headerText}>New Zealand tour of India 2024</Text>
            <Text style={styles.headerDate}>16 Oct - 05 Nov</Text>
          </View>
        </View>
        <MaterialIcons
          name={expandedSection === 1 ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {expandedSection === 1 && (
        <View style={styles.content}>
          {/* Test Matches for Section 1 */}
          {[{ date: '20 Oct', result: 'NZ Won\nBy 8 Wickets', team1: 'India 46 & 462', team2: 'NZ 402 & 110-2' },
            { date: '26 Oct', result: 'NZ Won\nBy 113 Runs', team1: 'NZ 259 & 255', team2: 'India 156 & 245' }]
            .map((test, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.testCard} onPress={() => toggleTest(1, index)}>
                <Text style={styles.matchDetails}>{`${index + 1}st Test on ${test.date}`}</Text>
                <MaterialIcons
                  name={expandedTests[1] === index ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              {expandedTests[1] === index && (
                <View style={styles.matchInfoRow}>
                  <View style={styles.teamsContainer}>
                    <View style={styles.teamRow}>
                      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHaHUzQmoS-NMsjc6xTzWf4lwSJjDFtLv-KQ&s' }} style={styles.teamLogo} />
                      <Text style={styles.teamText}>{test.team1}</Text>
                    </View>
                    <View style={styles.teamRow}>
                      <Image source={{ uri: 'https://hindustantimes.com/static-content/1y/cricket-logos/teams/NZ.png?2' }} style={styles.teamLogo} />
                      <Text style={styles.teamText}>{test.team2}</Text>
                    </View>
                  </View>
                  <Text style={styles.matchResult}>{test.result}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Section 2 - Bangladesh Tour */}
      <TouchableOpacity style={styles.header} onPress={() => toggleSection(2)}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: 'https://www.cricketbazaar.com/_next/image?url=https%3A%2F%2Fmedia.cricketbazaar.com%2Fmedia%2Fattachments1722327305576_0-14.jpeg&w=1900&q=50' }} style={styles.headerIcon} />
          <View>
            <Text style={styles.headerText}>Bangladesh tour of India 2024</Text>
            <Text style={styles.headerDate}>19 Sep - 12 Oct</Text>
          </View>
        </View>
        <MaterialIcons
          name={expandedSection === 2 ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {expandedSection === 2 && (
        <View style={styles.content}>
          {/* T20 Matches for Section 2 */}
          {[{ date: '12 Oct', result: 'IND Won\nBy 86 runs', team1: 'IND 297-6 ', team2: 'BAN 164-7 20.0' },
            { date: '09 Oct', result: 'IND Won\nBy 86 Runs', team1: 'IND 221-9 ', team2: 'BAN 135-9 20.0' }]
            .map((test, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.testCard} onPress={() => toggleTest(2, index)}>
                <Text style={styles.matchDetails}>{`${index + 1}nd T20 on ${test.date}`}</Text>
                <MaterialIcons
                  name={expandedTests[2] === index ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              {expandedTests[2] === index && (
                <View style={styles.matchInfoRow}>
                  <View style={styles.teamsContainer}>
                    <View style={styles.teamRow}>
                      <Image source={{ uri: 'https://t3.ftcdn.net/jpg/06/12/34/84/360_F_612348476_k3i3brMUOo3N9Wk3yoceMHqZ8w4jpFqu.jpg' }} style={styles.teamLogo} />
                      <Text style={styles.teamText}>{test.team1}</Text>
                    </View>
                    <View style={styles.teamRow}>
                      <Image source={{ uri: 'https://thumbs.dreamstime.com/b/print-178435294.jpg' }} style={styles.teamLogo} />
                      <Text style={styles.teamText}>{test.team2}</Text>
                    </View>
                  </View>
                  <Text style={styles.matchResult}>{test.result}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      )}


      {/* 3rd Test */}
{/* Section for England tour of India 2024 */}
<TouchableOpacity style={styles.header} onPress={() => toggleSection(3)}>
  <View style={styles.headerLeft}>
    <Image source={{ uri: 'https://media.crictracker.com/media/attachments/1705840182033_IND-vs-ENG-2024-(1).png' }} style={styles.headerIcon} />
    <View>
      <Text style={styles.headerText}>England tour of India 2024</Text>
      <Text style={styles.headerDate}>01 Nov - 30 Nov</Text>
    </View>
  </View>
  <MaterialIcons
    name={expandedSection === 3 ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
    size={24}
    color="black"
  />
</TouchableOpacity>

{expandedSection === 3 && (
  <View style={styles.content}>
    {/* 1st Test Match */}
    <TouchableOpacity style={styles.testCard} onPress={() => toggleTest(3, 0)}>
      <Text style={styles.matchDetails}>1st Test on 01 Nov</Text>
      <MaterialIcons
        name={expandedTests[3] === 0 ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
        size={24}
        color="black"
      />
    </TouchableOpacity>

    {expandedTests[3] === 0 && (
      <View style={styles.matchInfoRow}>
        <View style={styles.teamsContainer}>
          <View style={styles.teamRow}>
            <Image source={{ uri: 'https://t3.ftcdn.net/jpg/06/12/34/84/360_F_612348476_k3i3brMUOo3N9Wk3yoceMHqZ8w4jpFqu.jpg' }} style={styles.teamLogo} />
            <Text style={styles.teamText}>India 214 & 289</Text>
          </View>
          <View style={styles.teamRow}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/1/19/Logo_of_cricket_New_zealand_Team.png' }} style={styles.teamLogo} />
            <Text style={styles.teamText}>NZ 175 & 305</Text>
          </View>
          <View style={styles.teamRow}>
            <Image source={{ uri: 'https://w7.pngwing.com/pngs/153/922/png-transparent-flag-of-england-2018-world-cup-england-cricket-team-england-flag-world-symbol-thumbnail.png' }} style={styles.teamLogo} />
            <Text style={styles.teamText}>ENG 198 & 243</Text>
          </View>
        </View>
        <Text style={styles.matchResult}>Drawn</Text>
      </View>
    )}
  </View>
)}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
   
    marginTop: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'blue',
  },
  headerDate: {
    fontSize: 12,
    color: '#555',
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  testCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  matchDetails: {
    fontSize: 16,
    color: '#333',
  },
  matchInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  teamsContainer: {
    flex: 1,
    paddingRight: 10,
  },
  matchResult: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    width: 80,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  teamLogo: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  teamText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Ind;
