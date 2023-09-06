import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImagesScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imgSrc={require('../../assets/forest.jpg')} score={10}/>
            <ImageDetail title="Beach" imgSrc={require('../../assets/beach.jpg')} score={9.5}/>
            <ImageDetail title="Mountain" imgSrc={require('../../assets/mountain.jpg')} score={9.0}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImagesScreen;
