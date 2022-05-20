import React from 'react'

import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

// styles
import styles from './styles'

//img
import imgSuccess from '../../assets/Success/CONFIRMATION.png'


export const Success = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#8775FE", justifyContent: 'center' }}>
            <View style={{height:'100%', alignItems:'center', justifyContent:'center'}}>
                <Image style={{marginBottom:30}}
                    source={imgSuccess} />
                <Text style={{ color: "#fff",fontSize:22,fontFamily: "WorkSans-Bold"  ,marginBottom:10 }}>SUCESSO!</Text>
                <Text style={{ color: "#fff", fontSize:14, fontFamily:"WorkSans-Medium" }}>Compra realizada com sucesso, aproveite!</Text>
                <TouchableOpacity style={styles.viewButtonFinish} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.textButtonFinish}> PROSSEGUIR </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}