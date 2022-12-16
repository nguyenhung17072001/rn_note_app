import React, {useEffect, useState, useCallback} from "react";
import { View, Text, FlatList, RefreshControl, Dimensions, StatusBar, Image, TouchableOpacity } from "react-native";
import theme from "../../../Core/theme";
const {icons, images, colors} = theme;
const {height, width} = Dimensions.get('window')
import styles from "./NotificationStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {connect} from 'react-redux';
import { adminLogoutStart } from "../../../flow/reducers/admin/auth";
import { useNavigation } from "@react-navigation/native";
import { searchsNotificationStart } from "../../../flow/reducers/admin/notification";


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const Notification =(props)=> {
    const nav = useNavigation()
    const [user, setUser] = useState(null);
    const [refreshing, setRefreshing] = React.useState(false);


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
        
    }, []);
    useEffect(()=> {
        props.searchsNotification({
            userId: user?._id
        })
    }, [user?._id])
    console.log('listNotification: ', props.listNotification);
    console.log('id: ', user?._id);
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        props.searchsNotification({
            userId: user?._id
        })
        wait(2000).then(() => setRefreshing(false));
      }, []);
    
   
    const renderItem=({item})=> {
        return(
            <TouchableOpacity style={styles.notificationItem}>
                <Image resizeMode="contain" style={styles.image} source={images.notificationBell} />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.bodyText}>{item.body}</Text>
                </View>
                
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.mainBackgroundColor} barStyle={"light-content"} />
            <View style={styles.header}>
                <Text style={styles.labelHeader}>Thông báo</Text>
                
            </View>
            <View>
                <FlatList
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />}
                    data={props.listNotification?props.listNotification: []}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    )
}


const mapStateToProps = state => {
    return {
        typeAuth: state.adminAuth.type,
        listNotification: state.adminNotification.listNotifications
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