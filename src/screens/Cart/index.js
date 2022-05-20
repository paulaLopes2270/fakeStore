import React, { useContext } from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

// styles
import styles from './style'

//img
import imgBag from '../../assets/Cart/BAG_2.png'

//contexto
import { CartContext } from '../../context/CartContext'



const Cart = ({ navigation }) => {
  const { productsCart, addProductToCart, removeProductCart, cartTotalValue, cartTotalItem } = useContext(CartContext)
  // console.log(productsCart)
  const CreateCardCart = ({ item }) => {
    // console.log(item)
    return (
      <View style={styles.viewCard}>
        <Image style={styles.ImgCard}
          source={{ uri: item.image }} />
        <View>
          <Text style={styles.productName}>{item.title}</Text>
          <Text style={styles.price}>
            <Text style={{ fontSize: 10 }}>{item.qtd}x</Text> ${item.price}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
        }}>
          <TouchableOpacity style={styles.decreaseButton} onPress={() => { removeProductCart(item) }}>
            <Text style={styles.decreaseTextButton}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.increaseButton} onPress={() => { addProductToCart(item) }}>
            <Text style={styles.increaseTextButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return cartTotalItem === 0 ? <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
    <ScrollView style={{marginHorizontal: 16,}}>
      <Text style={styles.textTitle}>Meu Carrinho</Text>
      <View style={{justifyContent:'center', alignItems:'center', marginTop:139}}>
      <Image
      source={imgBag}/>
      <Text style={styles.textCartEmpty}>NENHUM ITEM ADICIONADO NO CARRINHHO</Text>
      <TouchableOpacity style={styles.viewButtonCartEmpty} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textButtonFinish}> ADICIONAR ITENS </Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  </SafeAreaView>

    : <SafeAreaView style={{
      flex: 1,
    }}>
      <ScrollView style={{}} >
        <View>
          <View style={{ marginHorizontal: 16, }}>
            <Text style={styles.textTitle}>Meu Carrinho</Text>
            <FlatList
              data={productsCart}
              renderItem={CreateCardCart}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.ContainerPriceCart}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>${cartTotalValue.toFixed(2)}</Text>
      </View>
      <View style={styles.viewFinish}>
        <TouchableOpacity style={styles.viewButtonFinish} onPress={() => navigation.navigate("Success")}>
          <Text style={styles.textButtonFinish}> FINALIZAR COMPRA </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>


};


export default Cart;