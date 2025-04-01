import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './src/screens/FirstPage';
import SecondPage from './src/screens/SecondPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen 
          name="FirstPage" 
          component={FirstPage} 
          options={{ title: 'Primeira Página' }} 
        />
        <Stack.Screen 
          name="SecondPage" 
          component={SecondPage} 
          options={{ title: 'Segunda Página' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
