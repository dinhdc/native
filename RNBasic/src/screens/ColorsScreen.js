import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Button} from 'react-native'

const ColorsScreen = () => {

    const [colors, setColors] = useState([])

    return (
        <View>
            <Button title="Add a color" onPress={() => {
                setColors([...colors, randomRgb()])
            }}/>

            <FlatList keyExtractor={(item) => item} data={colors} renderItem={({item}) => {
                return <View style={{height: 100, width: 100, backgroundColor: item}}></View>
            }}/>
        </View>
    );

}

const styles = StyleSheet.create({})

const randomRgb = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`;

}

export default ColorsScreen;