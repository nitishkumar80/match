import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Ind from '../app/Finished/Ind';

import WBBL from '../app/Finished/WBBL';
import Fuj from '../app/Finished/Fuj';
import Dub from '../app/Finished/Dub';

import Super from '../app/Finished/Super';
import FinishedHorizental from '@/components/FinishedHorizental';

const FinishedApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Dub');

  const renderContent = () => {
    switch (activeTab) {
      case 'Ind':
        return <Ind />;
      case 'Super':
        return <Super />;
      case 'Wbbl':
        return <WBBL />;
      case 'Fuj':
        return <Fuj />;
      default:
        return <Dub />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Horizontal Navigation Bar */}
        <FinishedHorizental setActiveTab={setActiveTab} activeTab={activeTab} />

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

export default FinishedApp;
