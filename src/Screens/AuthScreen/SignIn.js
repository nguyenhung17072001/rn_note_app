import React from 'react'
import {View, Text, Dimensions, SafeAreaView, Image, StatusBar, TextInput, TouchableOpacity} from 'react-native'
import theme from '../../Core/theme'
const {colors, icons, images, strings} = theme;
import styles from './AuthStyle'
const {height} = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';
const SignIn =()=> {
    const nav = useNavigation();

    const login =()=> {
        nav.navigate("HomeNavigation")
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
            <Image resizeMode="contain" style={styles.logo} source={images.logoSplash} />
            <Text style={styles.brandName}>{strings.brand_name}</Text>
            <View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Tên tài khoản' style={styles.textInput} />
                    <Text style={styles.placeholderText}>Tên tài khoản</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Mật khẩu' style={styles.textInput} />
                    <Text style={styles.placeholderText}>Mật khẩu</Text>
                </View>
            </View>

            <TouchableOpacity onPress={login} style={styles.button}>
                <Text style={styles.textButton}>Đăng nhập</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 18}}>
                <Text style={{color: 'black'}}>Chưa có tài khoản? </Text>
                <Text onPress={()=> nav.navigate('SignUp')} style={{color: colors.mainBackgroundColor}}>Đăng ký ngay</Text>
            </View>
            <View style={{height: height * 0.1}} />
        </SafeAreaView>
    )
}

export default SignIn;