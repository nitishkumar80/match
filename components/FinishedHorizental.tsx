import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface MatchHorizontalProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const navItems = [
  { name: 'Ind', logo: 'https://t3.ftcdn.net/jpg/06/12/34/84/360_F_612348476_k3i3brMUOo3N9Wk3yoceMHqZ8w4jpFqu.jpg' },
  { name: 'Super',  logo: 'https://cricketvectors.akamaized.net/Series/1P1.png?impolicy=default_web' },
  { name: 'Wbbl', logo: 'https://cricketvectors.akamaized.net/Series/1MS.png?impolicy=default_web' },
  { name: 'Fuj', logo: 'https://cricclubs.com/documentsRep/teamLogos/b2dba5ce-ab62-4ee0-abc4-0904192f30ee.jpg' },
  { name: 'Dub', logo: 'https://w7.pngwing.com/pngs/8/392/png-transparent-abu-dhabi-cricket-logo-sports-cricket-teams.png' },
];

const FinishedHorizental: React.FC<MatchHorizontalProps> = ({ setActiveTab, activeTab }) => {
  return (
    <FlatList
      data={navItems}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={[
            styles.navItem,
            activeTab === item.name && styles.activeNavItem,
          ]}
          onPress={() => setActiveTab(item.name)}
        >
          <Image 
            source={{ uri: item.logo }}
            style={styles.navLogo}
          />
          <Text style={[styles.navText, activeTab === item.name && styles.activeNavText]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

const styles = StyleSheet.create({
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  navLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius:10,
  },
  navText: {
    fontSize: 16,
    color: '#555',
  },
  activeNavItem: {
    backgroundColor: 'blue',
  },
  activeNavText: {
    color: '#fff',
  },
});

export default FinishedHorizental;
