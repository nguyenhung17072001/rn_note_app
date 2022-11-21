import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, SafeAreaView, Dimensions, StatusBar, Image, TouchableOpacity } from "react-native";
import theme from "../../../Core/theme";
const {icons, images, colors} = theme;
const {height, width} = Dimensions.get('window')
import styles from "./SettingStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {connect} from 'react-redux';
import { adminLogoutStart } from "../../../flow/reducers/admin/auth";
import { useNavigation } from "@react-navigation/native";
const Setting =(props)=> {
    const nav = useNavigation()
    const [user, setUser] = useState(null);



    const getUser = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            if(value !== null) {

                setUser(JSON.parse(value)?.user)
            }
        } catch(e) {
            console.log('err setUser at Home: ', e)
        }
    }
    useEffect(()=> {
        getUser()
    }, [])

    const logout =()=> {
        props.adminLogout()
        
        nav.reset({
            index: 0,
            
            routes: [
                { name: 'AuthNavigation' },
                
            ],
           
          })
    }
   
    //console.log(user?.avatar)
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.mainBackgroundColor} barStyle={"light-content"} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Cài đặt</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: height*0.01}}>
                    <Image style={styles.avatar} source={user&&user.avatar?{uri: user.avatar}: images.basicAvatar} /> 
                    <Text style={{color: 'white', fontSize: 16}}>{user?.name}</Text>
                </View>
            </View>
            <ScrollView style={styles.scroll}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: 'black', fontSize: 16}}>Phản hồi</Text>
                    <Image style={styles.icon} source={icons.feedback} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={logout}>
                    <Text style={{color: 'black', fontSize: 16}}>Đăng xuất</Text>
                    <Image style={styles.icon} source={icons.logout} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}


const mapStateToProps = state => {
    return {
        typeAuth: state.adminAuth.type
      
    };
  };
const mapStateToDispatch = dispatch => {
    return {
        adminLogout: data=> {
            dispatch(adminLogoutStart(data))
      },
  
    };
  };
export default connect(mapStateToProps, mapStateToDispatch)(Setting);