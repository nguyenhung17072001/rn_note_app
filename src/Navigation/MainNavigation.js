import React from "react";
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from "./RootNavigation";
import ContextState from "../Core/ContextState";
//Splash
import Splash from "../Screens/Splash/Splash";


//Auth
import Carousel from "../Screens/CarouselScreen/Carousel";
import SignIn from "../Screens/AuthScreen/SignIn";
import SignUp from "../Screens/AuthScreen/SignUp";

//Screen 
import Home from "../Screens/Main/Home/Home";

const Stack = createStackNavigator();

const MainNavigation = ()=> {
    
    const AuthNavigation =()=> {
        const StackAuth = createStackNavigator();
        return(
            <StackAuth.Navigator screenOptions={{
                headerShown: false
            }}>
                {/* <StackAuth.Screen name="Carousel" component={Carousel} /> */}
                <StackAuth.Screen name="SignUp" component={SignUp} />
                <StackAuth.Screen name="SignIn" component={SignIn} />
            </StackAuth.Navigator>
        )
    }


    //Bottom Tab
    const Tab = createBottomTabNavigator();

    function MyTab() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={View} />
                
            </Tab.Navigator>
        );
    }


    return(
        <NavigationContainer ref={navigationRef}>
            <ContextState>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Splash" component={Splash}/>
                    <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
                    <Stack.Screen name="MyTab" component={MyTab} />
                </Stack.Navigator>
            </ContextState>
        </NavigationContainer>
    )
}

export default MainNavigation;