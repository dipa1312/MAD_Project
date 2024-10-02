import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const AppointmentScreen: React.FC = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleAppointment = () => {
    console.log({ date, location });
    alert('Appointment Scheduled!');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Date" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.input} />
      <Button title="Schedule Appointment" onPress={handleAppointment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AppointmentScreen;
