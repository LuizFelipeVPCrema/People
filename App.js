import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeoplePage from './src/pages/PeoplePage';

function HomeScreen() {
  return (
    <View>
      <PeoplePage></PeoplePage>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#c5c5c5'
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
          }
        }}
      >

        <Stack.Screen 
          name="Home"
          component={HomeScreen} 
          options={{ title: 'Pessoas!'}}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;