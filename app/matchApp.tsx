import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import MatchHorizontal from '../components/MatchHorizental';
import Live from './Live';
import ForYou from './ForYou';
import Upcoming from './Upcoming';
import Finished from './Finished';

const MatchApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Live');

  const renderContent = () => {
    switch (activeTab) {
      case 'Live':
        return <Live />;
      case 'ForYou':
        return <ForYou />;
      case 'Upcoming':
        return <Upcoming />;
      case 'Finished':
        return <Finished />;
      default:
        return <Live />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Horizontal Navigation Bar */}
        <MatchHorizontal setActiveTab={setActiveTab} activeTab={activeTab} />

        {/* Content Area */}
        <View style={styles.content}>
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
});

export default MatchApp;
