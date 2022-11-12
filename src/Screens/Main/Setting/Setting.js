import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions, StatusBar } from "react-native";
import theme from "../../../Core/theme";
const {icons, images, colors} = theme;
const {height, width} = Dimensions.get('window')


const Setting =()=> {
    return(
        <View>
            <Text>Setting</Text>
        </View>
    )
}

export default Setting;