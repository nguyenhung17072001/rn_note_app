import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Image, StatusBar, Dimensions } from 'react-native';
import styles from './SplashStyle'
import theme from '../../Core/theme'
const { strings, images, colors } = theme;

import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../../Core/Context';
const {height, width} = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';
const Splash = ({navigation}) => {
    const nav=useNavigation()
    const themeColor = useContext(Context);
    /* async function getToken() {
        try {
            //const token = await AsyncStorage.getItem('token')
            // let token = JSON.parse(token1)
            if (token) {
                navigation.replace('HomeNavigation')
            }else{
                navigation.replace('LoginNavigation')
            }
            return token
        }
        catch (error) {
            console.log("Token Get Error", error)
        }
    } */
    useEffect(()=>{
        clearTimeout(timeout)
        const timeout = setTimeout(() => {
            //getToken()
            nav.replace('AuthNavigation');
        }, 2000);
    },[])
    
    return(
        <View style={{...styles.container, backgroundColor: colors.mainBackgroundColor}}>
            <StatusBar backgroundColor={colors.mainBackgroundColor} barStyle='light-content' />
            <Image
                source={images.logoSplash}
                resizeMode='contain'
                style={{
                    //backgroundColor: 'red',
                    width: width ,
                    height: height * 0.2
                }}
            />
            {/* <View style={{height:hp('1%')}} /> */}
            
            {/* <Text style={styles.appName}>{strings.app_name.toLocaleUpperCase()}</Text>  */}
            <Text style={styles.brandName}>{strings.brand_name}</Text>
        </View>
    )
}
export default Splash;