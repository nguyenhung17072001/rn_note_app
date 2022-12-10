import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, SafeAreaView, Dimensions, StatusBar, Image, TouchableOpacity } from "react-native";
import theme from "../../../Core/theme";
const {icons, images, colors} = theme;
const {height, width} = Dimensions.get('window')
import styles from "./NotificationStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {connect} from 'react-redux';
import { adminLogoutStart } from "../../../flow/reducers/admin/auth";
import { useNavigation } from "@react-navigation/native";
import { searchsNotificationStart } from "../../../flow/reducers/admin/notification";
const Notification =(props)=> {
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
        getUser();
        props.searchsNotification({
            userId: "636a9d0ca6cf9ff86605fe6a"
        })
    }, []);
    console.log('listNotification: ', props.listNotification)
    
   
    //console.log(user?.avatar)
    return(
        <View style={styles.container}>
            <Text>Hung</Text>
        </View>
    )
}


const mapStateToProps = state => {
    return {
        typeAuth: state.adminAuth.type,
        listNotification: state.adminNotification
    };
  };
const mapStateToDispatch = dispatch => {
    return {
        adminLogout: data=> {
            dispatch(adminLogoutStart(data))
        },
        searchsNotification: data=> {
            dispatch(searchsNotificationStart(data))
        }
  
    };
  };
export default connect(mapStateToProps, mapStateToDispatch)(Notification);