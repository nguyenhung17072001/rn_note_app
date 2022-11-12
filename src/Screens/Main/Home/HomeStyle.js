import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../Core/theme';
const { colors, font } = theme;


const {height, width} = Dimensions.get('window');

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
    avatar: {
        height: height*0.07,
        width: height*0.07,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: colors.mainBackgroundColor,
        marginRight: width*0.04
    },
    addIcon: {
        height: height*0.04,
        width: height*0.04,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: colors.mainBackgroundColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width*0.035,
        paddingVertical: height*0.01
    }
    
})
export default styles;