import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Dimensions, StatusBar } from "react-native";
import theme from "../../../Core/theme";
const {icons, images, colors} = theme;
const {height, width} = Dimensions.get('window')
import styles from "./HomeStyle";
const Home=()=> {
    
    //event


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.mainBackgroundColor} barStyle={"light-content"} />
            <View style={styles.header}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image  style={styles.avatar} source={images.basicAvatar} resizeMode={"contain"}/>
                    <Text style={{color: 'white', fontSize: 16}}>Nguyễn Hưng</Text>
                </View>
                <Image style={styles.addIcon} source={icons.add} />
            </View>

            
        </SafeAreaView>
    );
};


export default Home;