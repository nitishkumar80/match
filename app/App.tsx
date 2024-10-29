// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView ,SafeAreaView } from 'react-native';

// import HorizontalNavBar from '../components/HorizontalNavBar';
// import OverviewScreen from './OverviewScreen';
// import TopCardList from '../components/TopCardList';
// import MatchesScreen from './MatchesScreen'; 
// import TeamsScreen from './TeamsScreen';
// import SeriesStatsScreen from './SeriesStatsScreen';  
// import NewsScreen from './NewsScreen';
// import InfoScreen from './InfoScreen';
// import VenuesScreen from './VenuesScreen';
// export default function App() {
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [selectedCard, setSelectedCard] = useState(null);

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Overview':
//         return <OverviewScreen cardData={selectedCard} />;
//       case 'Matches':
//         return <MatchesScreen cardData={selectedCard} />;
//       case 'Teams':
//         return <TeamsScreen cardData={selectedCard} />;
//       case 'Series Stats':
//         return <SeriesStatsScreen cardData={selectedCard} />;
//         case 'News':
//             return <NewsScreen cardData={selectedCard} />;
//             case 'Info':
//                 return <InfoScreen cardData={selectedCard} />;
//                 case 'Venues':
//                     return <VenuesScreen cardData={selectedCard} />;
    

//       default:
//         return <OverviewScreen cardData={selectedCard} />;
//     }
//   };

//   return (
//     <SafeAreaView>


//     <ScrollView style={styles.container}>
//       {/* Top Cards */}
//       <TopCardList setSelectedCard={setSelectedCard} setActiveTab={setActiveTab} />

//       {/* Horizontal Navigation Bar */}
//       <HorizontalNavBar setActiveTab={setActiveTab} />

//       {/* Content Area */}
//       <View style={styles.content}>
//         {renderContent()}
//       </View>
//     </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
//   content: {
//     padding: 10,
//   },
// });
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import HorizontalNavBar from '../components/HorizontalNavBar';
import OverviewScreen from './OverviewScreen';
import TopCardList from '../components/TopCardList';
import MatchesScreen from './MatchesScreen'; 
import TeamsScreen from './TeamsScreen';
import SeriesStatsScreen from './SeriesStatsScreen';  
import NewsScreen from './NewsScreen';
import InfoScreen from './InfoScreen';
import VenuesScreen from './VenuesScreen';

const App = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedCard, setSelectedCard] = useState(null);

  const renderContent = () => {
    const contentMap = {
      Overview: OverviewScreen,
      Matches: MatchesScreen,
      Teams: TeamsScreen,
      'Series Stats': SeriesStatsScreen,
      News: NewsScreen,
      Info: InfoScreen,
      Venues: VenuesScreen,
    };

    const SelectedComponent = contentMap[activeTab] || OverviewScreen;
    return <SelectedComponent cardData={selectedCard} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Top Cards */}
        <TopCardList setSelectedCard={setSelectedCard} setActiveTab={setActiveTab} />

        {/* Horizontal Navigation Bar */}
        <HorizontalNavBar setActiveTab={setActiveTab} />

        {/* Content Area */}
        <View style={styles.content}>
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
});

export default App;
