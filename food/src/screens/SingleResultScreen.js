import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const SingleScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) return null;

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    // Add your styles here
    image: {
        height: 200,
        width: 300
    }
});

export default SingleScreen;