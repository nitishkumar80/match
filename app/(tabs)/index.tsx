import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function Profile() {
  const user = {
    name: 'Nitish Mehta',
    email: 'nitish.mehta@example.com',
    profilePicture: 'https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg',
    bio: 'Full-stack | iOS | Android',
  };

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/featured/iphone-wltnz5o1xymafqmo.jpg' }} // Replace with your background image URL
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Profile Picture */}
        <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />

        {/* User Name */}
        <Text style={styles.name}>{user.name}</Text>

        {/* User Bio */}
        <Text style={styles.bio}>{user.bio}</Text>

        {/* Email */}
        <Text style={styles.email}>{user.email}</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure the image covers the entire background
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a slight white overlay for readability
    padding: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Make sure text is visible
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});
