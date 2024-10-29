import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

// Get the device dimensions to properly size the video
const { width, height } = Dimensions.get('window');

// Define the list of videos
const videoList = [
  { id: 1, source: require('../../assets/video/video1.mp4') },
  { id: 2, source: require('../../assets/video/video2.mp4') },
  { id: 3, source: require('../../assets/video/video3.mp4') },
];

// Stories Component displaying multiple videos with vertical scroll functionality
export default function Stories() {
  const scrollRef = useRef<ScrollView>(null);
  const videoRefs = useRef([]); // Store refs for each video component
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // State to track which video is currently playing

  // Function to handle pausing all videos and playing the currently visible video
  const playVideo = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.playAsync();
        } else {
          video.pauseAsync();
        }
      }
    });
  };

  // Detect scroll position and play the correct video
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(contentOffsetY / height); // Calculate which video is currently visible

    if (index !== currentVideoIndex) {
      setCurrentVideoIndex(index); // Update the state to track current video index
      playVideo(index); // Play the correct video
    }
  };

  // Handle screen focus and blur to pause/resume video
  useFocusEffect(
    React.useCallback(() => {
      // When screen is focused, play the current video
      playVideo(currentVideoIndex);

      return () => {
        // When screen loses focus, pause all videos
        videoRefs.current.forEach((video) => {
          if (video) {
            video.pauseAsync();
          }
        });
      };
    }, [currentVideoIndex])
  );

  return (
    <ScrollView
      ref={scrollRef}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      onScroll={onScroll} // Detect scroll to play the visible video
      scrollEventThrottle={16} // Optimize scroll event handling
    >
      {videoList.map((video, index) => (
        <View key={video.id} style={styles.container}>
          <Video
            ref={(ref) => (videoRefs.current[index] = ref)} // Assign each video to the ref array
            source={video.source}
            style={styles.video}
            resizeMode="cover"
            useNativeControls={true}
            isLooping={true}
          />
        </View>
      ))}
    </ScrollView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: width,
    height: height,
    position: 'absolute',
  },
});
