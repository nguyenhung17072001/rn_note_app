import React, {useEffect, useState} from "react";
import { View, Text, Image, RefreshControl, SafeAreaView, Dimensions, StatusBar, TouchableOpacity, FlatList } from "react-native";
import theme from "../../../Core/theme";
const {icons, images, colors} = theme;
const {height, width} = Dimensions.get('window')
import {connect} from 'react-redux';
import styles from "./HomeStyle";
import { Calendar } from "react-native-calendars";
import axios from 'axios'
import { searchsEventStart } from "../../../flow/reducers/admin/event";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment'
import messaging from '@react-native-firebase/messaging'
import { loginNotificationStart } from "../../../flow/reducers/admin/notification";
const colorsItem = ['#D7ECFC','#FCD7E2', '#FBD7FC', '#D9D7FC', '#D7ECFC'];
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
const dayOfWeek = [
    {
        id: 'Thứ 2',
        day: 1,

    },
    {
        id: 'Thứ 3',
        day: 2,
        
    },
    {
        id: 'Thứ 4',
        day: 3,
        
    },
    {
        id: 'Thứ 5',
        day: 4,
        
    },
    {
        id: 'Thứ 6',
        day: 5,
        
    },
    {
        id: 'Thứ 7',
        day: 6,
        
    },
    {
        id: 'CN',
        day: 0,
        
    }
]
const Home=(props)=> {

    const [refreshing, setRefreshing] = React.useState(false);

    
    


    //messaging
    useEffect(()=> {
        if (props.isLogin) {
            props.loginNotification();
            //props.fetchProfile()
            //props.refreshToken();
        }
    }, [])
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            //alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            console.log('remoteMessage: ', remoteMessage);

            
        });
       
        
        messaging().onNotificationOpenedApp(remoteMessage => {
          console.log('remoteMessage: ', remoteMessage)
          
        });
        //console.log('token: ', messaging().getToken())
        //console.log('remoteMessage: ', 111111111111111111111133333)
        messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage) {
              console.log('remoteMessage: ', remoteMessage)
              
            }
            // setLoading(false);
          });
        
          messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
          });
        
    
        return unsubscribe;
      }, [])
      async function bootstrap() {
        const initialNotification = await messaging().getInitialNotification();
        if (initialNotification) {
          console.log('Notification caused application to open', initialNotification.notification);
          // if (initialNotification.data.screen && initialNotification.data.related_id){
          //   nav.navigate(initialNotification.data.screen, {id: initialNotification.data.related_id});
          // }
          setNotification(initialNotification)
          //setModalNotifee(true)
          console.log('Notification caused application to open', initialNotification.notification);
          console.log('Press action used to open the app', initialNotification.pressAction);
        }
      }
      useEffect(() => {
        bootstrap()
          .then(() => {})
          .catch((err)=> {
            console.log('err Home.js ', err)
          });
      }, []);




    const [weekState, setWeekState] = useState(0);
    const [user, setUser] = useState(null)
    const [todaySelect, setTodaySelect] = useState(new Date().getDay());
    const [selected, setSelected] = useState(new Date())
    const [data, setData] = useState(dataToday)
    
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
    const nextWeek = ()=> {
        setWeekState(weekState+1);
        //let change=selected;
        //change.setDate(change + 7);
        //setSelected(change)
        //props.searchsEvent()
    }
    const prevWeek = ()=> {
        setWeekState(weekState-1);
        //let change=selected;
        //change.setDate(change + 7);
        //setSelected(change)
        //props.searchsEvent()
        
    }

    useEffect(()=> {
        getUser();

    }, [])
    useEffect(()=> {
        props.searchsEvent({
            userId: user?._id 
        })
    }, [user])
    // get today
    const today = new Date()
    //console.log(today)
    const todayString = 'Tháng '+(today.getMonth()+1) + ', ' + today.getFullYear()
    //console.log('todayString ', todayString)
    // Data event:
    //const DATA = props.events;
    const dataToday = props?.events?.filter((event)=> {
        let ddmmyyyyEvent = moment(event.time).format('DD/MM/YYYY');
        let ddmmyyyyToday = moment(new Date()).format('DD/MM/YYYY');
        return ddmmyyyyToday== ddmmyyyyEvent;
    })
    console.log('data: ', data)
    useEffect(()=> {


        const eventSelected = props?.events?.filter((event)=> {
            let ddmmyyyyEvent = moment(event.time).format('DD/MM/YYYY');
            let ddmmyyyySelected = moment(selected).format('DD/MM/YYYY');
            //console.log('ddmmyyyyEvent: ', ddmmyyyyEvent)
            //console.log('ddmmyyyySelected: ', ddmmyyyySelected)
            
            
                
                return ddmmyyyySelected == ddmmyyyyEvent;
            
        })
        setData(eventSelected)
    }, [selected, weekState])
    
    //console.log('events ', DATA)
    

    const RenderDayItem=({item, index})=> {
        const day = (number)=>{
            if(number==1) {
                return 'T2';
            } else if(number==2){
                return 'T3';
            } else if(number==3){
                return 'T4';
            } else if(number==4){
                return 'T5';
            } else if(number==5){
                return 'T6';
            } else if(number==6){
                return 'T7';
            } else if(number==0){
                return 'CN';
            }
        }

        let handle=()=> {
            //console.log('todaySelect: ', todaySelect)
            if(todaySelect==0) {
                let distance = index - 6;
                //console.log('distance: ', distance)
                const now = new Date();
                const change = new Date();
                
                change.setDate(now.getDate() + distance);
                setSelected(change)
            } else {
                let distance = index + 1 - todaySelect + weekState*7;
                //console.log('distance: ', distance)

                const now = new Date();
                const change = new Date();
                
                change.setDate(now.getDate() + distance);
                setSelected(change)
                //console.log('sel: ', selected)
            }
        }
        let thisDate = null;
        //console.log('todaySelect: ', todaySelect)
        if(todaySelect == item.day) {
             
            //thisDate = new Date().getDate();
            let now = new Date();
            let change = new Date();
            let date = change.setDate(now.getDate()+weekState*7)
            thisDate = moment(date).format('DD')
        } else {
            let distance = index + 1 - todaySelect + weekState*7;
            let now = new Date();
            let change = new Date();
            let date = change.setDate(now.getDate() + distance);
            thisDate = moment(date).format('DD')
            //thisDate = new Date(date)
            //console.log('thisDate: ', thisDate)
        }
        return(
            <View>
                <TouchableOpacity key={index} onPress={handle} style={[styles.dayItem, 
                //other styles are written on todaySelect         
                
                todaySelect==item.day && {backgroundColor: 'white'},
                
            ]}>
                <Text style={[{fontSize: 18, color: '#D6D5D5'},
                    todaySelect==item.day && {color: colors.mainBackgroundColor}
                ]}>{day(item.day)}</Text> 
                <Text style={[{fontSize: 22, fontWeight: 'bold', color: '#D6D5D5'},
                    todaySelect==item.day && {color: colors.mainBackgroundColor}
                ]}>{thisDate}</Text>
            </TouchableOpacity>
            {item.day==selected.getDay()?<View style={[{height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', alignSelf: 'center', marginVertical: 2}]} />:null}
            </View>
        )
    }
     
    //event 
    const renderItem=({item, index})=> {
        let time = moment(item.time).format('LT');
        
        return (
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Image style={{height: 16, width: 16, tintColor: '#9BC3F8', marginTop: height*0.02, marginLeft: width*0.026}} resizeMode="contain" source={icons.checked} />
                </View>
                <View style={[styles.item, {backgroundColor: index < colorsItem.length? colorsItem[index] : '#D7ECFC'}]}>
                    <Text style={{color: '#6E6E6E'}}>{time}</Text>
                    <Text style={{color: '#1E1D1D', fontSize: 16, fontWeight: 'bold'}}>{item.eventName}</Text>
                    <Text style={{color: '#6E6E6E'}}>Phòng: {item.location}</Text>
                </View>
            </View>
        )
    }


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        props.searchsEvent({
            userId: user?._id 
        })
        wait(2000).then(() => setRefreshing(false));
      }, []);
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
            <View style={{backgroundColor: colors.mainBackgroundColor, paddingBottom: height*0.08}}>
                <Text style={styles.timeToday} >{todayString}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={prevWeek}>
                        <Image resizeMode="contain" style={styles.arrowIcon} source={icons.leftArrow} />
                    </TouchableOpacity>
                    
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-evenly'}}>
                    {
                        dayOfWeek.map((item, index)=> {
                            return(
                                <RenderDayItem item={item} index={index} key={index+1}/>
                            )
                        })
                    }
                    </View>
                    <TouchableOpacity onPress={nextWeek}>
                        <Image resizeMode="contain" style={styles.arrowIcon} source={icons.rightArrow} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                style={{ marginTop: -height*0.07, backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20}}
                data={data?data:[]}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
            {/* <Calendar
                markingType={'multi-dot'}
                markedDates={{
                    '2017-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
                    '2017-10-26': {dots: [massage, workout], disabled: true}
                }}
            /> */}

            
        </SafeAreaView>
    );
};

const mapStateToProps = state => {
    //console.log(state.adminAuth)
    return {
        events: state.adminEvent.data,
        isLogin: state.adminAuth.token ? true : false,
      
    };
    
  };
const mapStateToDispatch = dispatch => {
    return {
        searchsEvent: data=> {
            dispatch(searchsEventStart(data))
        },
        loginNotification: data => {
            dispatch(loginNotificationStart(data));
        },
  
    };
  };
export default connect(mapStateToProps, mapStateToDispatch)(Home);