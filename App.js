import React from 'react';

//navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages 
import Home from './src/screens/Home'
import Cart from './src/screens/Cart'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Cart" component={Cart}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
