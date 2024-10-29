import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Define types for news articles
interface NewsArticle {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  link: string;
}

// Example news data
const newsData: NewsArticle[] = [
  {
    id: '1',
    title: 'India Wins by 8 Wickets!',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPHtG2eO2YxtxW2B11WRH2yc8e5YHx1MJ5A&s',
    description: 'India clinched victory in the 1st Test match by 8 wickets against New Zealand.',
    link: 'https://example.com/india-vs-nz-1st-test',
  },
  {
    id: '2',
    title: 'Australia Dominates WTC Points Table',
    thumbnail: 'https://d1af7m13b2f34i.cloudfront.net/2022/06/WTC-Points-Table-1024x1024.jpg',
    description: 'Australia maintains the top spot in the WTC 2023-25 points table after the latest victory.',
    link: 'https://example.com/aus-wtc-points',
  },
  {
    id: '3',
    title: 'South Africa Levels Series',
    thumbnail: 'https://resize.indiatvnews.com/en/resize/newbucket/400_-/2023/12/h-1-1702580572.jpg',
    description: 'South Africa levels the series after a comprehensive win against Sri Lanka.',
    link: 'https://example.com/sa-vs-sl',
  },
  {
    id: '4',
    title: 'New Zealand Takes Lead in Series',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaL-VgZhpKwji44Fdd5uHSEmnaKt6ralEuQA&s',
    description: 'New Zealand takes a 2-0 lead in the series against India.',
    link: 'https://example.com/nz-series-lead',
  },
  {
    id: '5',
    title: 'Exciting Finish in the Ashes',
    thumbnail: 'https://i.ytimg.com/vi/QM52985llK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLNH-LNPouuA2HslECTF7cpKI9lw',
    description: 'The Ashes series witnessed an exciting finish, with England narrowly clinching victory.',
    link: 'https://example.com/ashes-finish',
  },
];

const NewsScreen: React.FC = () => {
  // Function to handle navigation to article link (dummy function for now)
  const handlePress = (link: string) => {
    // You can use a web browser library to open links here
    console.log('Navigate to:', link);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest Sports News</Text>

      {/* FlatList for News Articles */}
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.newsCard} onPress={() => handlePress(item.link)}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default NewsScreen;
