import React, {useContext} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = ({navigation, route}) => {

    const {id} = route.params;

    const {state} = useContext(Context)

    const blogPost = state.find(item => item.id === +id)

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    // Add your styles here
});

export default ShowScreen;