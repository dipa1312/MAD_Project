import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Donation {
  id: number;
  date: string;
  location: string;
  bloodType: string;
}

const DonationHistoryScreen: React.FC = () => {
  const [donations] = useState<Donation[]>([
    { id: 1, date: '2023-06-15', location: 'City Hospital', bloodType: 'A+' },
    { id: 2, date: '2024-01-10', location: 'Health Clinic', bloodType: 'O-' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={donations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Date: {item.date}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Blood Type: {item.bloodType}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default DonationHistoryScreen;
