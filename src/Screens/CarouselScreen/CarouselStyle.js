import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../Core/theme'
const { colors, font } = theme;



import Context from '../../Core/Context';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    slide: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    imageSlide: {
      height: HEIGHT* 0.4,
      width: WIDTH * 0.9,
      //backgroundColor: 'red',
  
    },
    tab: {
      width: WIDTH,
      height: HEIGHT *0.3,
      //backgroundColor: 'white',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontFamily: font.medium,
      color: colors.white,
    },
    text: {
      fontSize: 16,
      fontFamily: font.medium,
      textAlign: 'center',
      width: WIDTH * 0.8,
      color: colors.white,
      lineHeight: 24,
      letterSpacing: 0.15,
    },
  
   
    footer: {
          justifyContent: 'center',
          alignItems: 'center',
          height: HEIGHT*0.2,
          width: WIDTH,
          backgroundColor: colors.mainBackgroundColor,
    },
  
    indicator: {
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      top: - HEIGHT * 0.1
    },
    circle: {
      width: 6,
      height: 6,
      borderRadius: 5,
      backgroundColor: '#B9B8B8',
      marginHorizontal: 2,
    },
    button: {
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      height: HEIGHT * 0.08,
      width: WIDTH * 0.8,
    },
    textButton: {
      color: colors.mainBackgroundColor,
      fontFamily: font.medium,
      fontSize: 16,
    },
    skip: {
      color: colors.white,
      position: 'absolute',
      top: WIDTH * 0.04,
      right: WIDTH * 0.04,
      fontSize: 16,
      fontFamily: font.medium
    }
  });
export default styles;