import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a Segunda Página!</Text>
      <Button
        title="Voltar para a Primeira Página"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default SecondPage;
