import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UpcommingApp from './UpcommingApp';

const Upcoming: React.FC = () => {
  return (
    <View style={styles.container}>
      
      {/* Add upcoming match details here */}
     <UpcommingApp/>
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

export default Upcoming;
