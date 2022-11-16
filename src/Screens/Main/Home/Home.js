import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import theme from "../../../Core/theme";
const {icons, images, colors} = theme;
const {height, width} = Dimensions.get('window')
import {connect} from 'react-redux';
import styles from "./HomeStyle";
import { Calendar } from "react-native-calendars";
import axios from 'axios'
import { searchsEventStart } from "../../../flow/reducers/admin/event";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home=(props)=> {

    const [user, setUser] = useState(null)


    const getUser = async () => {
        try {
            const value = await AsyncStorage.getItem('user')
            if(value !== null) {

                setUser(JSON.parse(value)?.user)
            }
        } catch(e) {
            console.log('err setUser at Home: ', e)
        }
      }

    useEffect(()=> {
        getUser();


        props.searchsEvent({
            userId: user?._id
        })
    }, [])

    console.log('events ', props.events)
    
    //event
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green'};

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.mainBackgroundColor} barStyle={"light-content"} />
            <View style={styles.header}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image  style={styles.avatar} source={user&&user.avatar?{uri: user.avatar}:images.basicAvatar} resizeMode={"contain"}/>
                    <Text style={{color: 'white', fontSize: 16}}>{user?.name}</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.addIcon} source={icons.add} />
                </TouchableOpacity>
                
            </View>
            <Calendar
                markingType={'multi-dot'}
                markedDates={{
                    '2017-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
                    '2017-10-26': {dots: [massage, workout], disabled: true}
                }}
            />

            
        </SafeAreaView>
    );
};

const mapStateToProps = state => {
    return {
        events: state.adminEvent.data
      
    };
  };
const mapStateToDispatch = dispatch => {
    return {
        searchsEvent: data=> {
            dispatch(searchsEventStart(data))
      },
  
    };
  };
export default connect(mapStateToProps, mapStateToDispatch)(Home);