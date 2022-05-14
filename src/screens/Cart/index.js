import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

const Cart = ({ navigation }) => {

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", height: "100%" }} >
      <ScrollView >
        <View >
          <Text style={{}}>Meu Carrinho</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default Cart;