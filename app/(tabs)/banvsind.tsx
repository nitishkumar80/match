import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView,ImageBackground } from 'react-native';
import App from '../App';

const matchDetails = {
  match: 'BAN vs IND',
  date: 'October 1, 2024',
  venue: 'Sher-e-Bangla National Stadium, Dhaka',
  status: 'Live',
  toss: 'India won the toss and chose to bat',
  score: {
    team1: 'India',
    team2: 'Bangladesh',
    team1Score: '250/7',
    team2Score: '120/3 (15.4)',
  },
};

const teamLineup = {
  india: [
    'Rohit Sharma (C)',
    'Virat Kohli',
    'KL Rahul',
    'Shubman Gill',
    'Hardik Pandya',
    'Ravindra Jadeja',
    'Jasprit Bumrah',
    'Kuldeep Yadav',
    'Mohammed Shami',
    'Axar Patel',
    'Suryakumar Yadav',
  ],
  bangladesh: [
    'Shakib Al Hasan (C)',
    'Litton Das',
    'Mushfiqur Rahim',
    'Tamim Iqbal',
    'Mustafizur Rahman',
    'Mehidy Hasan',
    'Taskin Ahmed',
    'Shoriful Islam',
    'Afif Hossain',
    'Ebadot Hossain',
    'Mahmudullah',
  ],
};

export default function banvsind() {
  return (
    <ImageBackground
    
    style={styles.backgroundImage}
  >
    <ScrollView style={styles.container}>
      {/* Match Details */}
      <View style={styles.matchInfo}>
 <App/>
      </View>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
