// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// interface MatchHorizontalProps {
//   setActiveTab: (tab: string) => void;
// }

// const navItems = ['Live', 'ForYou', 'Upcoming', 'Finished'];

// const MatchHorizontal: React.FC<MatchHorizontalProps> = ({ setActiveTab }) => {
//   return (
//     <FlatList
//       data={navItems}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       renderItem={({ item }) => (
//         <TouchableOpacity 
//           style={styles.navItem}
//           onPress={() => setActiveTab(item)}
//         >
//           <Text style={styles.navText}>{item}</Text>
//         </TouchableOpacity>
//       )}
//       keyExtractor={(item) => item}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   navItem: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: '#e0e0e0',
//     marginHorizontal: 5,
//     borderRadius: 20,
//   },
//   navText: {
//     fontSize: 16,

//   },
// });

// export default MatchHorizontal;



import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface MatchHorizontalProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const navItems = ['Live', 'ForYou', 'Upcoming', 'Finished'];

const MatchHorizontal: React.FC<MatchHorizontalProps> = ({ setActiveTab, activeTab }) => {
  return (
    <FlatList
      data={navItems}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={[
            styles.navItem,
            activeTab === item && styles.activeNavItem, // Apply active style if the tab is active
          ]}
          onPress={() => setActiveTab(item)}
        >
          <Text style={[styles.navText, activeTab === item && styles.activeNavText]}>
            {item}
          </Text>
          {activeTab === item && <View style={styles.underline} />}
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );
};

const styles = StyleSheet.create({
  navItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
  },
  activeNavItem: {
    backgroundColor: '#d1e8ff', // Background color for active tab
  },
  activeNavText: {
    color: '#007aff', // Text color for active tab
    fontWeight: 'bold',
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: '#007aff', // Color for underline
    position: 'absolute',
    bottom: -2,
  },
});

export default MatchHorizontal;
