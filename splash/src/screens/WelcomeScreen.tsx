import React from 'react';
import {Text, StyleSheet, View, Image, Button, Touchable, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {
    useFonts,
    DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import {
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import MyButton from "../components/MyButton";

const WelcomeScreen = ({navigation} : {navigation: any}) => {

    let [fontsLoaded] = useFonts({
        DMSans_700Bold,
        Montserrat_700Bold
    });

    const insets = useSafeAreaInsets();

    const navigateTo = (link: string) => navigation.navigate(link);

    return (
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
        }}>
            <Image style={{width: 357, height: 209, marginBottom: 53}}
                   source={require('../../assets/logo.png')}/>
            <View style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 53,
                alignSelf: "center"
            }}>
                <Text style={styles.textBlack}>You’ll Find</Text>
                <Text style={styles.textYellow}>All you need</Text>
                <Text style={styles.textBlack}>Here!</Text>
            </View>
            <View style={{
                flexDirection: "column",
                paddingHorizontal: 36,

            }}>
                <MyButton onClick={() => navigateTo("SignUp")} label={"Sign Up"} mode={"primary"}/>
                <MyButton onClick={() => {}} label={"Sign In"} mode={"secondary"}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textBlack: {
        fontFamily: "DMSans_700Bold",
        fontSize: 40,
        color: "#303030",
        lineHeight: 50
    },
    textYellow: {
        fontFamily: "DMSans_700Bold",
        fontSize: 40,
        color: "#FCA34D",
        lineHeight: 50
    },
    btnTextStyle: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        lineHeight: 20,
        color: "white"
    },
    btnSecondaryStyle: {
        color: "#4F63AC",
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        lineHeight: 20,
    }
});

// @ts-ignore
export default WelcomeScreen;
