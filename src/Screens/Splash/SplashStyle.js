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
    },
    appName:{
        
        fontWeight:'bold',
        color:colors.App_Name_Color
    },
    brandName:{
        fontSize: 14,
        
        color: 'white',
        fontFamily: font.bold,
        marginTop: height*0.01
    },
    logoImage: {
        width: width * 0.45,
        height: height * 0.09
    }
})
export default styles;