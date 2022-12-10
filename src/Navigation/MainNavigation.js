import React from "react";
import {View, Image, Dimensions, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from "./RootNavigation";
import ContextState from "../Core/ContextState";
import theme from "../Core/theme";
const {images, colors, icons} = theme;
const {height, width} =Dimensions.get('window')
//Splash
import Splash from "../Screens/Splash/Splash";
//import Icon from 'react-native-vector-icons/Ionicons'

//Auth
import Carousel from "../Screens/CarouselScreen/Carousel";
import SignIn from "../Screens/AuthScreen/SignIn";
import SignUp from "../Screens/AuthScreen/SignUp";

//Screen 
import Home from "../Screens/Main/Home/Home";
import Setting from "../Screens/Main/Setting/Setting";
import Notification from "../Screens/Main/Notification/Notification";
const Stack = createStackNavigator();

const MainNavigation = ()=> {
    
    const AuthNavigation =()=> {
        const StackAuth = createStackNavigator();
        return(
            <StackAuth.Navigator screenOptions={{
                headerShown: false
            }}>
                {/* <StackAuth.Screen name="Carousel" component={Carousel} /> */}
                <StackAuth.Screen name="SignIn" component={SignIn} />
                <StackAuth.Screen name="SignUp" component={SignUp} />
                
            </StackAuth.Navigator>
        )
    }


    //Bottom Tab
    const Tab = createBottomTabNavigator();

    function MyTabs() {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                
                
            }} >
                <Tab.Screen name="Home" component={Home} 
                    options={{
                        tabBarStyle: {
                            height: height*0.08
                        },
                        tabBarIcon: ({focused})=> (
                            <Image resizeMode="contain" style={{height: height*0.04 ,width: width*0.09, tintColor: focused ? colors.mainBackgroundColor : '#D3CDCD'}} source={icons.calendar} />
                        ),
                        tabBarLabel: ({focused})=>(
                            <Text style={{fontSize: 10, color: focused?colors.mainBackgroundColor:'#D3CDCD'}} >Công việc</Text>
                        )
                    }}
                />
                <Tab.Screen name="Notification" component={Notification}
                    options={{
                        tabBarStyle: {
                            height: height*0.08
                        },
                        tabBarIcon: ({focused})=> (
                            <Image resizeMode="contain" style={{height: height*0.04,width: width*0.09, tintColor: focused ? colors.mainBackgroundColor : '#D3CDCD'}} source={icons.bell} />
                        ),
                        tabBarLabel: ({focused})=>(
                            <Text style={{fontSize: 10, color: focused?colors.mainBackgroundColor:'#D3CDCD'}} >Thông báo</Text>
                        )
                    
                    }} />

                <Tab.Screen name="Setting" component={Setting}
                    options={{
                        tabBarStyle: {
                            height: height*0.08
                        },
                        tabBarIcon: ({focused})=> (
                            <Image resizeMode="contain" style={{height: height*0.04,width: width*0.09, tintColor: focused ? colors.mainBackgroundColor : '#D3CDCD'}} source={icons.settings} />
                        ),
                        tabBarLabel: ({focused})=>(
                            <Text style={{fontSize: 10, color: focused?colors.mainBackgroundColor:'#D3CDCD'}} >Cài đặt</Text>
                        )
                    
                    }} />
                
            </Tab.Navigator>
        );
    }

    //others components add here
    const StackHomeNavigation = createStackNavigator()
    const HomeNavigation=()=> {
        return(
            <StackHomeNavigation.Navigator screenOptions={{
                headerShown: false
            }}>
                <StackHomeNavigation.Screen name="MyTabs" component={MyTabs} />
            </StackHomeNavigation.Navigator>
        )
    }
    return(
        <NavigationContainer ref={navigationRef}>
            <ContextState>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Splash" component={Splash}/>
                    <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
                    <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
                </Stack.Navigator>
            </ContextState>
        </NavigationContainer>
    )
}

export default MainNavigation;