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
    },
    timeToday: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        padding: width*0.03
    },
    arrowIcon: {
        height: height*0.03,
        width: height*0.03,
        tintColor: '#D6D5D5'
    },
    dayItem: {
        backgroundColor: '#4D5EB1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: height*0.005,
        paddingHorizontal: width * 0.018
    },
    item: {
        flex: 1,
        backgroundColor: '#D7ECFC',
        paddingVertical: height*0.02,
        marginTop: height * 0.02,
        marginRight: width * 0.04,
        marginLeft: width*0.01,
        borderRadius: 10,
        paddingLeft: width*0.025

        
    }
    
})
export default styles;