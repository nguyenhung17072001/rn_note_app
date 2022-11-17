import React, {useState, useEffect} from 'react'
import {View, Text, Dimensions, SafeAreaView, Image, StatusBar, TextInput, TouchableOpacity} from 'react-native'
import theme from '../../Core/theme'
import {connect} from 'react-redux';
const {colors, icons, images, strings} = theme;
import styles from './AuthStyle'
const {height} = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';
import { loginStart } from '../../flow/reducers/admin/auth';
import axios from 'axios';
const SignIn =(props)=> {
    const nav = useNavigation();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login =()=> {
        if(username=='') {
            alert('Chưa điền tài khoản')
        }
        else if(password=='') {
            alert("Chưa điền mật khẩu")
        } else {
            props.loginAuth({
                username,
                password
            })
        }
        
        
        //nav.navigate("HomeNavigation")
    }
    useEffect(()=> {
        if(props.typeAuth=="loginSuccess") {
            nav.replace("HomeNavigation")
            //nav.navigate("HomeNavigation")
        } else if(props.typeAuth=="loginFail") {
            alert("Tên tài khoản hoặc mật khẩu sai")
        }
    }, [props.typeAuth])


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
            <Image resizeMode="contain" style={styles.logo} source={images.logoSplash} />
            <Text style={styles.brandName}>{strings.brand_name}</Text>
            <View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Tên tài khoản' onChangeText={(text)=> setUserName(text)} style={styles.textInput} />
                    <Text style={styles.placeholderText}>Tên tài khoản</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Mật khẩu' onChangeText={(text)=> setPassword(text)} style={styles.textInput} />
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

const mapStateToProps = state => {
    return {
        adminAuth: state.adminAuth,
        typeAuth: state.adminAuth.type
      
    };
  };
const mapStateToDispatch = dispatch => {
    return {
        loginAuth: data=> {
            dispatch(loginStart(data))
        },
  
    };
  };
export default connect(mapStateToProps, mapStateToDispatch)(SignIn);