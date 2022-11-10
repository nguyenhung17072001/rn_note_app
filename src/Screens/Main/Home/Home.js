import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions, StatusBar } from "react-native";
import theme from "../../../Core/theme";
const {icons, images, colors} = theme;
const {height, width} = Dimensions.get('window')

const Home=()=> {
    
    //event


    return (
        <SafeAreaView style={styles.container}>
            <Text>home</Text>

            
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        
    },
    sizeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        height: height*0.1,
        width: width * 0.1
    }
})
export default Home;