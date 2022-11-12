import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../Core/theme';
const { colors , font } = theme;


const {height, width} = Dimensions.get('window');

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
})
export default styles;