import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";

const SignUpScreen = () => {

    const insets = useSafeAreaInsets();

    return (
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Text>SignUpScreen</Text>
        </View>
    );
};

export default SignUpScreen;
