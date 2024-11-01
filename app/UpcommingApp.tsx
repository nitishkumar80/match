import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Ind from './Ind';

import WBBL from './WBBL';
import Fuj from './Fuj';
import Dub from './Dub';
import UpcommingHorigental from '@/components/UpcommingHorigental';
import Super from './Super';



const UpcommingApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Dub');

  const renderContent = () => {
    switch (activeTab) {
      case 'Ind':
        return <Ind/>;
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
        <UpcommingHorigental setActiveTab={setActiveTab} activeTab={activeTab} />


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

export default UpcommingApp;
