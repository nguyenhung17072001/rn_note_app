import React from 'react'
import {View, Text, Dimensions, SafeAreaView, Image, StatusBar, TextInput, TouchableOpacity} from 'react-native'
import theme from '../../Core/theme'
const {colors, icons, images, strings} = theme;
import styles from './AuthStyle'
const {height} = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';
const SignUp =()=> {
    const nav = useNavigation()
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
                <View style={styles.inputBox}>
                    <TextInput placeholder='Nhắc lại mật khẩu' style={styles.textInput} />
                    <Text style={styles.placeholderText}>Nhắc lại mật khẩu</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Họ tên' style={styles.textInput} />
                    <Text style={styles.placeholderText}>Họ tên</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Chức vụ' style={styles.textInput} />
                    <Text style={styles.placeholderText}>Chức vụ</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Đăng ký</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 18}}>
                <Text style={{color: 'black'}}>Bạn đã có tài khoản? </Text>
                <Text onPress={()=> nav.navigate('SignIn')} style={{color: colors.mainBackgroundColor}}>Đăng nhập ngay</Text>
            </View>
            
        </SafeAreaView>
    )
}

export default SignUp;