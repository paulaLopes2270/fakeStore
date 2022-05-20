import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#8775FE", 
        justifyContent: 'center'
    },
    viewSucess:{
        height:'100%', 
        alignItems:'center', 
        justifyContent:'center' 
    },
    imgSuccess:{
        marginBottom:RFValue(30)
    },
    text1:{
        color: "#fff",
        fontSize:RFValue(22),
        fontFamily: "WorkSans-Bold",
        marginBottom:RFValue(10) 
    },
    text2:{
        color: "#fff", 
        fontSize:RFValue(14), 
        fontFamily:"WorkSans-Medium" 
    },
    viewButtonFinish: {
        backgroundColor: "#504DB6",
        alignItems: 'center',
        justifyContent: 'center',
        height: RFValue(50),
        width: RFValue(317),
        borderRadius: 37,
        bottom: RFValue(29),
        position: 'absolute',
    },
    textButtonFinish: {
        color: "#fff",
        fontWeight: "bold",
        letterSpacing: 1,
    },


})
export default styles;