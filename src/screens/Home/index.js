import React, { useEffect, useState } from 'react';
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

//---------- componente novidades ------------------------------- 
const CreateLastItems = ({ item }) => {
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
                        <TouchableOpacity>
                            <Image source={PlusImg} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

// -------------------------page---------------------------
const Home = ({ navigation }) => {
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
                        <TouchableOpacity>
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
                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <Image style={styles.cartImage} source={BagImg} />
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
            </ScrollView>
        </SafeAreaView>
    );
};


export default Home;