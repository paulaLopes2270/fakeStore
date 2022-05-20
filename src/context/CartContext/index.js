import React, { createContext, useState } from 'react'

import {Alert} from 'react-native'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [productsCart, setProductsCart] = useState([])

    const cartTotalValue = productsCart?.reduce((total, itemAtual) =>{
        const productTotalValue = itemAtual.qtd*itemAtual.price
        return productTotalValue + total
    },0)

    const cartTotalItem = productsCart?.reduce((total, itemAtual) => {
        return total + itemAtual.qtd  
    },0)

    const addProductToCart = (product) => {
        const { id } = product
        setProductsCart((productsToCart) => {
            //criando novo array com todos os itens anteriores \/ 
            const updateProductCart = [...productsToCart]
            //--- 
            const item = updateProductCart.find((product) => { return product.id === id });

            if (!item) {
                product.qtd = 1
                updateProductCart.push(product)
            } else {
                item.qtd = item.qtd + 1
            }
            // console.log(updateProductCart)
            return updateProductCart
        })
    }

    const removeProductCart = (product) => {
        const { id } = product
        setProductsCart((productsToCart) => {
            const updateProductCart = [...productsToCart]
            const item = updateProductCart.find((product) => { return product.id === id });

            if (item.qtd > 1) {
                item.qtd = item.qtd - 1
                setProductsCart(updateProductCart)
            } else {
                    // console.log("Não removi o último item")
                    Alert.alert(
                        "Remover item",
                        "Se deseja remover o item do carrinho clique em prosseguir.",
                        [
                          {
                            text: "CANCELAR", onPress:() => {console.log("cancel")}
                          },
                          { 
                            text: "PROSSEGUIR", onPress:() => {
                                
                                const arrayFiltered = updateProductCart.filter((product) => product.id !== id)
                                setProductsCart(arrayFiltered)
                            }
                          }
                        ], 
                  );
            }
            // console.log(updateProductCart)
            return updateProductCart
        })
    }

    return (
        <CartContext.Provider value={{ productsCart, addProductToCart, removeProductCart, cartTotalValue, cartTotalItem }}>
            {children}
        </CartContext.Provider>
    )
}
