import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from "./src/screens/WelcomeScreen";
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {SafeAreaProvider} from "react-native-safe-area-context";
import SignUpScreen from "./src/screens/SignUpScreen";


type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Welcome"}>
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{title: 'Welcome', headerShown: false}}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUpScreen}
                        options={{title: 'SignUp', headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

