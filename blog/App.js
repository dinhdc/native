import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import IndexScreen from "./src/screens/IndexScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreationScreen from "./src/screens/CreationScreen";
import EditScreen from "./src/screens/EditScreen";
import {TouchableOpacity} from "react-native";
import {EvilIcons, Feather} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Provider>
                <Stack.Navigator>
                    <Stack.Screen
                        options={({navigation}) => ({
                            title: 'Blog',
                            headerTitleAlign: 'center',
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                                    <Feather name="plus" size={30}/>
                                </TouchableOpacity>
                            )
                        })}
                        name="Index"
                        component={IndexScreen}/>
                    <Stack.Screen
                        name="Show"
                        component={ShowScreen}
                        options={({navigation, route}) => ({
                            title: 'Blog',
                            headerTitleAlign: 'center',
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Edit", {id: route.params.id})
                                    }
                                >
                                    <EvilIcons name="pencil" size={35}/>
                                </TouchableOpacity>
                            ),
                        })}
                    />
                    <Stack.Screen
                        options={{title: 'Blog', headerTitleAlign: 'center'}}
                        name="Create"
                        component={CreationScreen}/>
                    <Stack.Screen
                        options={{title: 'Blog', headerTitleAlign: 'center'}}
                        name="Edit"
                        component={EditScreen}/>
                </Stack.Navigator>
            </Provider>

        </NavigationContainer>
    );
}

