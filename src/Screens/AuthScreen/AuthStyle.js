import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../Core/theme'
const { colors } = theme;


const {height, width} = Dimensions.get('window');
const {font} = theme;
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white'
    },
    logo: {
        width: width*0.2,
        height: height*0.14,
        //backgroundColor: 'red'
    },
    brandName:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: font.bold,
        //marginTop: height*0.01
    },
    inputBox: {
        marginTop: height*0.045
    },
    textInput: {
        borderRadius: 7,
        borderWidth: 1,
        height: height *0.075,
        width: width * 0.9,
        paddingHorizontal: 10,
        color: colors.blackText
    },
    placeholderText: {
        position: 'absolute',
        top: -height*0.014,
        left: 10,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        color: colors.blackText
    },
    button: {
        marginTop: height * 0.04,
        backgroundColor: colors.mainBackgroundColor,
        width: width * 0.9,
        height: height *0.08,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,

    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
    
})
export default styles;