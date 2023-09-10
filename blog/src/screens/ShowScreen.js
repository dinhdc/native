import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Context} from "../context/BlogContext";

const ShowScreen = ({route}) => {

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


export default ShowScreen;