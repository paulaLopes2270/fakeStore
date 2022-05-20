import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({ 

    containerPage:{
        backgroundColor: "#FFF", 
        height:"100%", 
        paddingHorizontal:RFValue(18)
    },
    textTitle:{
        fontSize: RFValue(24), 
        color: "#000", 
        marginBottom: RFValue(45),
        fontFamily:"WorkSans-Medium"
    },
    viewCard:{
        backgroundColor: "#ECE9FF", 
        height: RFValue(72), 
        textAlignVertical: 'center', 
        alignItems: 'center', 
        paddingHorizontal: RFValue(18), 
        flexDirection: 'row', 
        flexWrap: 'nowrap', 
        justifyContent: 'space-between', 
        alignContent: 'center',
        marginBottom:RFValue(16),
        borderRadius:RFValue(12),
        
    },

    ImgCard:{
        height: RFValue(50), 
        width: RFValue(38), 
        resizeMode:'contain'
    },

    productName:{
        fontSize: RFValue(14), 
        height: RFValue(16),
        width: RFValue(160), 
        color:"#000", fontFamily: "WorkSans-Bold"
    },

    price:{
        fontSize: RFValue(14), 
        fontFamily: "WorkSans-Bold",
        color:"#8775FE"
    },

    decreaseButton:{
        backgroundColor: "#FFF", 
        height: RFValue(24), 
        width: RFValue(38), 
        borderWidth: 1, 
        borderTopLeftRadius: 8, 
        borderBottomLeftRadius: 8, 
        borderColor: "#CCCCCC",   
        alignItems: 'center', 
    },
    decreaseTextButton:{
        fontSize: RFValue(20) 
    },

    increaseButton:{
        backgroundColor: "#FFF", 
        height: RFValue(24), 
        width: RFValue(38), 
        borderWidth: 1, 
        borderTopEndRadius: 8, 
        borderBottomEndRadius: 8, 
        borderColor: "#CCCCCC", 
        alignItems:'center',  
    },

    increaseTextButton:{
        fontSize: RFValue(18),
    }, 

    ContainerPriceCart:{
        height: RFValue(38), 
        borderTopWidth: 1, 
        borderBottomWidth: 1, 
        borderColor: "#EBEBED", 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: RFValue(22), 
        alignItems: 'center'
    }, 
    totalText:{
       fontSize: RFValue(14), 
       color:"#000", 
       fontFamily: "WorkSans-Bold"  
    },
    totalPrice:{
        fontSize: 14, color:"#000", 
        fontFamily: "WorkSans-Bold" 
    },
    viewFinish:{
        bottom: 0, 
        fontSize: RFValue(40), 
        height: RFValue(112), 
        width: '100%', 
        textAlign: 'center', 
        alignItems: 'center', 
        textAlign: "center", 
        justifyContent: "center",   
    },

    viewButtonFinish:{
        backgroundColor: "#504DB6",
        alignItems: 'center', 
        justifyContent: 'center', 
        height: RFValue(50), 
        alignItems: "center", 
        width: RFValue(317), 
        borderRadius: 37
    },
    textButtonFinish:{
        color: "#fff", 
        fontWeight: "bold", 
        letterSpacing:1,
    }, 
    viewButtonCartEmpty:{
        backgroundColor: "#8775FE",
        alignItems: 'center', 
        justifyContent: 'center', 
        height: RFValue(50), 
        alignItems: "center", 
        width: RFValue(317), 
        borderRadius: 37,
    },
    textCartEmpty:{
        width:RFValue(250),
        fontSize:RFValue(14), 
        color:"#9A9999" ,
        textAlign:'center', 
        marginTop:RFValue(10), 
        letterSpacing:1,
        marginBottom:RFValue(14), 
        fontFamily:"WorkSans-Medium"
    }


})

export default styles;
