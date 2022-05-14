import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({

    //------ componente novidades --------- 
    containerProduct: {
        height: "auto",
        width: RFValue(172),
        flex: 1,
        margin: RFValue(13),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: RFValue(18),
        marginRight: RFValue(40)
    },
    imgProduct: {
        height: RFValue(172),
        resizeMode: 'contain',
    },
    textCategory: {
        fontSize: RFValue(8),
        paddingTop: RFValue(2),
        fontWeight: '700',
        color: "#8775FE"
    },
    textTitle: {
        fontSize: RFValue(14),
        height: RFValue(14),
        fontWeight: '700',
        color: "#000",
        top: RFValue(4),
        lineHeight: RFValue(16),
    },
    textDescription: {
        fontSize: RFValue(10),
        fontWeight: '700',
        color: "#85868A",
        top: RFValue(4),
        lineHeight: RFValue(16),
        height: RFValue(30)
    },
    viewPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: RFValue(18)
    },
    textPrice: {
        fontSize: RFValue(20),
        color: "#8775FE",
        fontWeight: '700',
        lineHeight: RFValue(29),
    },

    // ------------------ componente card -------------------------------
    containerCarProduct: {
        height: "auto",
        flex: 1,
        margin: RFValue(13),
        marginVertical: RFValue(18),
    },
    viewCardImage: {
        position: 'relative',
    },
    addButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: RFValue(30),
        height: RFValue(30)
    },
    priceCardProduct: {
        fontSize: RFValue(20),
        color: "#8775FE",
        fontWeight: '700',
        lineHeight: RFValue(29)
    },

    //----------------componente categorias -------------
    containerCategorys: {
        justifyContent: "center",
        alignItems: 'center',
        alignContent: 'center',
    },
    buttonCategorys: {
        margin: RFValue(10),
        paddingHorizontal: RFValue(6),
        justifyContent: 'center',
        height: RFValue(31),
        borderWidth: 2,
        borderColor: "#EBEBED",
        borderRadius: 8,
        textAlignVertical: "center",
    },
    textCatogory: {
        color: '#B4B4B6'
    },

    //--------------------page-----------------
    containerPage: {
        flex: 1,
        backgroundColor: "#FFF",
        height: "100%"
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: RFValue(40),
        marginTop: RFValue(20),
        paddingHorizontal: RFValue(10)
    },
    cartImage: {
        width: RFValue(22),
        height: RFValue(22)
    },
    textProducts: {
        fontSize: RFValue(18),
        fontWeight: 'bold',
        color: "#000",
        fontFamily: "Work Sans"
    },
    textFilterCategory: {
        fontSize: RFValue(8),
        marginTop: RFValue(13),
        fontWeight: 'bold',
        color: "#6F6F6F",
        paddingLeft: RFValue(19),
        fontFamily: "Work Sans"
    },
    textNews: {
        fontSize: RFValue(24),
        paddingLeft: RFValue(19),
        marginBottom: RFValue(6),
        fontWeight: 'bold',
        color: "#000",
    },
    flatListCategorys: {
        borderBottomWidth: 1,
        paddingBottom: RFValue(40),
        borderBottomColor: "#EBEBED"
    },
    textLister: {
        fontSize: RFValue(24),
        paddingLeft: RFValue(19),
        marginTop: RFValue(20),
        marginBottom: RFValue(10),
        color: "#000",
        fontWeight: "bold"
    }
})
export default styles;