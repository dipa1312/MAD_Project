
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        {/* Image as Banner */}
        <Image
          source={{ uri: 'https://www.sriramakrishnahospital.com/wp-content/uploads/2021/06/Blood-Donation-1.jpg' }}
          style={styles.bannerImage}
          resizeMode="stretch" // Ensures the image covers the entire container
        />
      </View>

      {/* Main Content */}
      <Text style={styles.welcomeText}>Welcome to the Blood Donor Management System!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    width: '100%',
    height: 160, // Increase the height to make it more prominent as a banner
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Adjust spacing between the banner and content
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
