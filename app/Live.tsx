import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LiveMatchCard from './liveCard';



const Live: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Live Matches</Text> */}
      
<LiveMatchCard/>
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

export default Live;
