import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {

    const [term, setTerm] = useState("");
    const {searchApi, errorMessage, results} = useResults();

    return (
        <View>
            <SearchBar
                term={term}
                onTermSubmit={() => searchApi(term)}
                onTermChange={(newTerm) => setTerm(newTerm)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    // Add your styles here
});

export default SearchScreen;