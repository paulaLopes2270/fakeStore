import React from 'react';

//navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages 
import Home from './src/screens/Home'
import Cart from './src/screens/Cart'
import {Success} from './src/screens/PurchaseCompleted'

//contexto
import {CartProvider} from './src/context/CartContext/index'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart}/>
          <Stack.Screen name="Success" component={Success}/>
        </Stack.Navigator>
      </NavigationContainer>
     </CartProvider>
  );
};


export default App;
