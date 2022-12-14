import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../Core/theme';
const { colors , font } = theme;


const {height, width} = Dimensions.get('window');

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
    header: {
        flexDirection: 'row',
        backgroundColor: colors.mainBackgroundColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width*0.035,
        paddingVertical: height*0.01
    },
    labelHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    notificationItem: {
        backgroundColor: '#D7ECFC',
        paddingHorizontal: width*0.04,
        marginVertical: height*0.001,
        flexDirection: 'row',
        paddingVertical: height*0.01
    },
    title: {
        color: "black",
        fontSize: 15,
        fontWeight: 'bold',
    },
    bodyText: {
        color: "#6E6E6E",
        fontSize: 16,
        
    },
    line: {
        height: 0.5,
        backgroundColor: 'black',
        width: width*0.9,
        borderRadius: 10,
        alignSelf: 'center'
    },
    image: {
        width: width*0.12,
        height: width*0.12,
        marginRight: width*0.026
    }
    
})
export default styles;