import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

function HomeScreen() {
  
  const navigation = useNavigation();
  
  return (
    <View>
      <PeoplePage navigation={navigation}/>
    </View>
  );
}

function PeopleDetailsScreen() {
  return (
    <View>
      <PeopleDetailPage />    
    </View>
  )
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
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

        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pessoas!'}}/>
        <Stack.Screen name="PeopleDetail" component={PeopleDetailsScreen} options={({ route }) => ({ title: route.params.people.name.first})}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

