// Contact list screen placeholder
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ContactListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact List Screen</Text>
      <Button title="Add Contact" onPress={() => navigation.navigate('AddContact')} />
    </View>
  );
}
