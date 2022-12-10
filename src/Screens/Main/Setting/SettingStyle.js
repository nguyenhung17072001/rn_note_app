import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../Core/theme';
const { colors , font } = theme;


const {height, width} = Dimensions.get('window');

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
    header: {
        
        backgroundColor: colors.mainBackgroundColor,
        
        paddingHorizontal: width*0.035,
        paddingVertical: height*0.01,
        paddingBottom: height*0.065
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        
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
    scroll: {
        marginTop: -height*0.05, 
        backgroundColor: 'white', 
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20
    },
    icon: {
        height: height*0.03,
        width: height*0.03,
        //tintColor: colors.mainBackgroundColor
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: width*0.04,
        marginTop: height*0.015,
        marginVertical: height*0.005,
        //backgroundColor: 'red',
        borderRadius: 8,
        //elevation: 4,
        borderWidth: 0.2
        
        
    }
})
export default styles;