import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Primeira Página!</Text>
      <Button
        title="Ir para a Segunda Página"
        onPress={() => navigation.navigate('SecondPage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default FirstPage;
