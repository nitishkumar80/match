import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FinishedApp from './FinishedApp';

const Finished: React.FC = () => {
  return (
    <View style={styles.container}>
    
  <FinishedApp/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Finished;
