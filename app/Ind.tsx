import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Ind: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <View style={styles.container}>
      {/* Section 1 */}
      <TouchableOpacity style={styles.header} onPress={() => toggleSection(1)}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: 'https://www.cricketbazaar.com/_next/image?url=https%3A%2F%2Fmedia.cricketbazaar.com%2Fmedia%2Fattachments1722327305576_0-14.jpeg&w=1900&q=50' }} style={styles.headerIcon} />
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
          <Text style={styles.matchDetails}>3rd Test, Wankhede Stadium, Mumbai, India</Text>
          <View style={styles.matchInfoRow}>
            <View style={styles.teamsContainer}>
              <View style={styles.teamRow}>
                <Image source={{ uri: 'https://t3.ftcdn.net/jpg/06/12/34/84/360_F_612348476_k3i3brMUOo3N9Wk3yoceMHqZ8w4jpFqu.jpg' }} style={styles.teamLogo} />
                <Text style={styles.teamText}>India</Text>
              </View>
              <View style={styles.teamRow}>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/1/19/Logo_of_cricket_New_zealand_Team.png' }} style={styles.teamLogo} />
                <Text style={styles.teamText}>New Zealand</Text>
              </View>
            </View>
            <Text style={styles.matchDate}>09:30 AM{'\n'}01 Nov</Text>
          </View>
        </View>
      )}

      {/* Section 2 */}
      <TouchableOpacity style={styles.header} onPress={() => toggleSection(2)}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: 'https://images.thequint.com/thequint%2F2023-12%2F7075a737-c19a-4a58-aff1-a223a2de9009%2FIndia_vs_South_Africa_2nd_T20I.jpg?auto=format%2Ccompress&fmt=webp&width=540&w=1200' }} style={styles.headerIcon} />
          <View>
            <Text style={styles.headerText}>India tour of South Africa 2024</Text>
            <Text style={styles.headerDate}>08 Nov - 17 Dec</Text>
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
          <Text style={styles.matchDetails}>1st T20, Kingsmead, Durban, South Africa</Text>
          <View style={styles.matchInfoRow}>
            <View style={styles.teamsContainer}>
              <View style={styles.teamRow}>
                <Image source={{ uri: 'https://tfipost.com/wp-content/uploads/2021/10/Capture-45-1024x481.jpg' }} style={styles.teamLogo} />
                <Text style={styles.teamText}>South Africa</Text>
              </View>
              <View style={styles.teamRow}>
                <Image source={{ uri: 'https://t3.ftcdn.net/jpg/06/12/34/84/360_F_612348476_k3i3brMUOo3N9Wk3yoceMHqZ8w4jpFqu.jpg' }} style={styles.teamLogo} />
                <Text style={styles.teamText}>India</Text>
              </View>
            </View>
            <Text style={styles.matchDate}>08:30 PM{'\n'}08 Nov</Text>
          </View>
        </View>
      )}

      {/* Section 3 */}
      <TouchableOpacity style={styles.header} onPress={() => toggleSection(3)}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDXOwbHVaSXxYX9ZCu4mT_PJKQIk3I2iV1w&s' }} style={styles.headerIcon} />
          <View>
            <Text style={styles.headerText}>Ashes Series 2024</Text>
            <Text style={styles.headerDate}>10 Nov - 30 Nov</Text>
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
          <Text style={styles.matchDetails}>2nd Test, Lord's, London, England</Text>
          <View style={styles.matchInfoRow}>
            <View style={styles.teamsContainer}>
              <View style={styles.teamRow}>
                <Image source={{ uri: 'https://c8.alamy.com/comp/2M78XND/a-3d-render-of-england-vs-australia-flag-icons-on-a-green-round-cricket-field-2M78XND.jpg' }} style={styles.teamLogo} />
                <Text style={styles.teamText}>Australia</Text>
              </View>
              <View style={styles.teamRow}>
                <Image source={{ uri: 'https://w7.pngwing.com/pngs/153/922/png-transparent-flag-of-england-2018-world-cup-england-cricket-team-england-flag-world-symbol-thumbnail.png' }} style={styles.teamLogo} />
                <Text style={styles.teamText}>England</Text>
              </View>
            </View>
            <Text style={styles.matchDate}>10:00 AM{'\n'}15 Nov</Text>
          </View>
        </View>
      )}

      {/* Section 4 */}
      <TouchableOpacity style={styles.header} onPress={() => toggleSection(4)}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: 'https://d34080pnh6e62j.cloudfront.net/images/newspost/thumbs/1729600415pak-tour-of-aus-2024-schedule-squads-live.jpeg' }} style={styles.headerIcon} />
          <View>
            <Text style={styles.headerText}>Pakistan tour of Australia 2024</Text>
            <Text style={styles.headerDate}>12 Nov - 22 Nov</Text>
          </View>
        </View>
        <MaterialIcons
          name={expandedSection === 4 ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {expandedSection === 4 && (
        <View style={styles.content}>
          <Text style={styles.matchDetails}>3rd ODI, MCG, Melbourne, Australia</Text>
          <View style={styles.matchInfoRow}>
            <View style={styles.teamsContainer}>
              <View style={styles.teamRow}>
                <Image source={{ uri: 'https://c8.alamy.com/comp/2M78XND/a-3d-render-of-england-vs-australia-flag-icons-on-a-green-round-cricket-field-2M78XND.jpg' }} style={styles.teamLogo} />
                <Text style={styles.teamText}>Australia</Text>
              </View>
              <View style={styles.teamRow}>
                <Image source={{ uri: 'https://i.bleacherreport.net/images/team_logos/328x328/pakistan_cricket.png?canvas=492,328' }} style={styles.teamLogo} />
                <Text style={styles.teamText}>Pakistan</Text>
              </View>
            </View>
            <Text style={styles.matchDate}>01:30 PM{'\n'}22 Nov</Text>
          </View>
        </View>
      )}
      {/* Other sections follow the same pattern */}
{/* Section 5 */}
<TouchableOpacity style={styles.header} onPress={() => toggleSection(5)}>
  <View style={styles.headerLeft}>
    <Image 
      source={{ uri: 'https://i.ytimg.com/vi/zpnJ-bp90lk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC02dvpsmsNj9kno2p' }} 
      style={styles.headerIcon} 
    />
    <View>
      <Text style={styles.headerText}>Sri Lanka tour of England 2024</Text>
      <Text style={styles.headerDate}>20 Nov - 30 Nov</Text>
    </View>
  </View>
  <MaterialIcons
    name={expandedSection === 5 ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
    size={24}
    color="black"
  />
</TouchableOpacity>
{expandedSection === 5 && (
  <View style={styles.content}>
    <Text style={styles.matchDetails}>2nd ODI, The Oval, London, England</Text>
    <View style={styles.matchInfoRow}>
      <View style={styles.teamsContainer}>
        <View style={styles.teamRow}>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Flag_of_Sri_Lanka.svg' }} 
            style={styles.teamLogo} 
          />
          <Text style={styles.teamText}>Sri Lanka</Text>
        </View>
        <View style={styles.teamRow}>
          <Image 
            source={{ uri: 'https://w7.pngwing.com/pngs/153/922/png-transparent-flag-of-england-2018-world-cup-england-cricket-team-england-flag-world-symbol-thumbnail.png' }} 
            style={styles.teamLogo} 
          />
          <Text style={styles.teamText}>England</Text>
        </View>
      </View>
      <Text style={styles.matchDate}>02:00 PM{'\n'}25 Nov</Text>
    </View>
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
    backgroundColor: '#f0f0f0',
  },
  matchDetails: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  matchInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamsContainer: {
    flex: 1,
    paddingRight: 20,
  },
  matchDate: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    width: 80,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  teamLogo: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  teamText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Ind;
