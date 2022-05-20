import React from 'react'

import {
    SafeAreaView,
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
        <SafeAreaView style={styles.container}>
            <View style={styles.viewSucess}>
                <Image style={styles.imgSuccess}
                    source={imgSuccess} />
                <Text style={styles.text1}>SUCESSO!</Text>
                <Text style={styles.text2}>Compra realizada com sucesso, aproveite!</Text>
                <TouchableOpacity style={styles.viewButtonFinish} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.textButtonFinish}> PROSSEGUIR </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}