import React from 'react';
import Home from './screens/Home';
import NextScreen from './components/NextScreen';
// for navigation between screens
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title:"Todo App"}}
        />
        
        <Stack.Screen
          name="NextScreen"
          component={NextScreen}
          options={{title:"Just A Screen"}}
        />

      </Stack.Navigator>

    </NavigationContainer>
      
  );

}
