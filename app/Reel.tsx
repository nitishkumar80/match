import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import { RouteProp } from '@react-navigation/native';

// Get the window dimensions
const { width, height } = Dimensions.get('window');

// Define the type for the story object
type Story = {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
};

// Define the type for the navigation route params
type RootStackParamList = {
  Reel: { story: Story };
};

// Define the route prop type for the Reel screen
type ReelRouteProp = RouteProp<RootStackParamList, 'Reel'>;

// Define the prop type for the Reel component
type Props = {
  route: ReelRouteProp;
};

const Reel: React.FC<Props> = ({ route }) => {
  const { story } = route.params;

  return (
    <Swiper style={styles.wrapper} loop={false}>
      {/* Render the video reel */}
      <View style={styles.slide}>
        <Video 
          source={{ uri: story.videoUrl }} 
          style={styles.video} 
          resizeMode="cover" 
          repeat 
        />
      </View>
      {/* Add more slides for additional reels here */}
    </Swiper>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  wrapper: {},
  slide: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  video: { width: width, height: height, position: 'absolute' },
});

export default Reel;
