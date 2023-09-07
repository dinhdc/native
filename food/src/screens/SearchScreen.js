import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {

    const [term, setTerm] = useState("");
    const {searchApi, errorMessage, results} = useResults();

    const filterResultByPrice = price => {
        return results.filter(item => item.price === price)
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermSubmit={() => searchApi(term)}
                onTermChange={(newTerm) => setTerm(newTerm)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList results={filterResultByPrice('$')} title={"Cost Effective"}/>
                <ResultList results={filterResultByPrice('$$')} title={"Best Price"}/>
                <ResultList results={filterResultByPrice('$$$')} title={"Big Spender"}/>
            </ScrollView>
        </>
    );
};


export default SearchScreen;