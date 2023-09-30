import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {DMSans_700Bold, useFonts} from "@expo-google-fonts/dm-sans";
import {Montserrat_700Bold} from "@expo-google-fonts/montserrat";


interface ButtonProps {
    label: string;
    mode: string;
    onClick: ((event: GestureResponderEvent) => void) | undefined;
}

const MyButton: React.FC<ButtonProps> = ({label, mode, onClick}) => {

    let [fontsLoaded] = useFonts({
        DMSans_700Bold,
        Montserrat_700Bold
    });

    return (
        <TouchableOpacity onPress={onClick}>
            <View style={mode == "primary" ? styles.btnPrimaryStyle : styles.btnSecondaryStyle}
            >
                <Text
                    style={mode == "primary" ? styles.btnPrimaryTextStyle : styles.btnSecondaryTextStyle}>{label}</Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    btnPrimaryStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 118,
        paddingVertical: 20,
        backgroundColor: "#4F63AC",
    },
    btnSecondaryStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 118,
        paddingVertical: 20
    },
    btnPrimaryTextStyle: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        lineHeight: 20,
        color: "white"
    },
    btnSecondaryTextStyle: {
        color: "#4F63AC",
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        lineHeight: 20,
    }
});

export default MyButton;
