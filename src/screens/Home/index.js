import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    FlatList,
    Button,
    Image,
} from 'react-native';

//services
import { getProductsByCategory } from '../../services/ProductApi/httpCommon'

// component
const CreateCardProduct = ({ cardProduct }) => {
    console.log(cardProduct)
    return (

        <View style={{height:200, width:100}}>
            <Text>{cardProduct.price}</Text>
            <Text>{cardProduct.title}</Text>
        </View>
    )
}


// page
const Home = ({ navigation }) => {
    // useEffect(()=> {getProductsByCategory()}, [])
    const [data, setData] = useState([])

    useEffect(() => {

        const getData = async () => {
            const { data } = await getProductsByCategory()
            // console.log(data)
            setData(data)
        }
        getData()
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: "#FFF", height: "100%" }} >
            <ScrollView >
                <View >
                {data.map((item, index) => {
                            return <CreateCardProduct cardProduct={item} key={index} />
                        })}

                    
                       
                        {/* <Button
         title="Cart"
         onPress={() => navigation.navigate('Cart')}
         /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default Home;