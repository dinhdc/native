import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name={"search"} style={styles.iconStyle}/>
            <TextInput
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                style={styles.inputStyle}
                placeholder={"Search"}
                autoCapitalize={"none"}
                autoCorrect={false}/>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#e7dede',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;