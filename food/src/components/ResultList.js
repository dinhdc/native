import React from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from "./ResultDetail";
import {withNavigation} from "react-navigation";

const ResultList = ({title, results, navigation}) => {

    if(!results) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SingleResult', {id: item.id})}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultList);