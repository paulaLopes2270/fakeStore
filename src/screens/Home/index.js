import React, { useEffect, useState, useContext } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';

//services
import { getProductsByCategory } from '../../services/ProductApi/httpCommon'
// styles
import styles from './style'

// img
import BagImg from "../../assets/Home/BAG_1.png"
import PlusImg from "../../assets/Home/PLUS_1.png"

//contexto
import { CartContext } from '../../context/CartContext'



// -------------------------page---------------------------
const Home = ({ navigation }) => {
    const { addProductToCart, cartTotalItem } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const lastItems = products.slice(0, 5)
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    //---------filtrando os produtos pela categoria -----------
    const productByType = products.reduce((productByType, currentProduct) => {
        productByType[currentProduct.category] = productByType[currentProduct.category] || []
        productByType[currentProduct.category].push(currentProduct);

        return productByType
    }, {})

    //------------pegando as categorias -------------- 
    const categoryNameList = Object.keys(productByType)

    const selectCategoryName = categoryNameList[selectedCategoryIndex]

    useEffect(() => {
        const getData = async () => {
            const { data } = await getProductsByCategory()
            setProducts(data)
        }
        getData()
    }, [])

    //---------- componente novidades ------------------------------- 
    const CreateLastItems = ({ item }) => {
        // console.log(item)
        return (
            <View style={styles.containerProduct}>
                <View>
                    <Image
                        style={styles.imgProduct}
                        source={{ uri: item.image }} />
                    <View>
                        <Text style={styles.textCategory}>{item.category}</Text>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <Text style={styles.textDescription}>{item.description}</Text>
                        <View style={styles.viewPrice}>
                            <Text style={styles.textPrice}>${item.price}</Text>
                            <TouchableOpacity onPress={() => { addProductToCart(item) }}>
                                <Image source={PlusImg} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    // ---------------- componente categorias ---------------
    const CreateCardCategory = ({ item, index }) => {
        const isSelectButton = selectedCategoryIndex === index
        const selectedButtonStyle = { backgroundColor: isSelectButton ? "#8775FE" : "transparent" }
        const buttonCategoryStyle = { ...styles.buttonCategorys, ...selectedButtonStyle }
        const selectedTextCategoryStyle = { color: isSelectButton ? "#FFF" : "#B4B4B6" }
        const textCategoryStyle = { ...styles.textCatogory, ...selectedTextCategoryStyle }
        return (
            <View style={styles.containerCategorys}>
                <TouchableOpacity style={buttonCategoryStyle}
                    onPress={() => {
                        setSelectedCategoryIndex(index)
                    }}>
                    <Text style={textCategoryStyle}>{item}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    // ------------------ componente card -------------------------------
    const CreateCardProduct = ({ item }) => {
        return (
            <View style={styles.containerCarProduct}>
                <View>
                    <View style={styles.viewCardImage}>
                        <Image
                            style={styles.imgProduct}
                            source={{ uri: item.image }} />
                        <TouchableOpacity onPress={() => { addProductToCart(item) }}>
                            <Image style={styles.addButton} source={PlusImg} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.textCategory}>{item.category}</Text>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <Text style={styles.priceCardProduct}>${item.price}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.containerPage} >
            <ScrollView >
                <View style={styles.titleContainer}>
                    <Text style={styles.textProducts}>
                        Produtos
                    </Text>
                    <TouchableOpacity  onPress={() => navigation.navigate("Cart")}>
                        <Image style={styles.cartImage} source={BagImg} />
                       {!!cartTotalItem && 
                       <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#fff', borderRadius:50, position:'absolute', top:0, right:0, height:13, width:13}}>
                       <Text style={{fontSize:8,fontWeight:'bold' }}>{cartTotalItem}</Text>
                       </View>}
                    </TouchableOpacity>
                </View>
                <Text style={styles.textFilterCategory}>
                    FILTRAR CATEGORIA
                </Text>
                <View >
                    <FlatList data={categoryNameList}
                        renderItem={CreateCardCategory}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    <Text style={styles.textNews}>
                        Novidades
                    </Text>
                    <FlatList data={lastItems}
                        renderItem={CreateLastItems}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.flatListCategorys} />
                    <Text style={styles.textLister}>
                        Listagem
                    </Text>
                    <FlatList
                        data={productByType[selectCategoryName]}
                        renderItem={CreateCardProduct}
                        numColumns="2" />
                </View>
                {/* <View style={{height:108}}>

                </View> */}
            </ScrollView>
            {
                !!cartTotalItem &&
                <View style={{  bottom: 0, fontSize: 40, backgroundColor: "#fff", height:108, width:'100%',textAlign:'center', alignItems:'center', textAlign:"center", justifyContent:"center", }}>
                    <TouchableOpacity style={{backgroundColor:"#504DB6", alignItems:'center', justifyContent:'center', height:50, alignItems:"center", width:317, borderRadius:37}} onPress={() => navigation.navigate("Cart")}>
                     <Text style ={{color:"#fff", fontWeight:"bold"}}> IR PARA O CARRINHO </Text>
                    </TouchableOpacity>
                </View>
            }
        </SafeAreaView>
    );
};


export default Home;