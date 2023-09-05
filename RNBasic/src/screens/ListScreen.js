import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'


const ListScreen = () => {

  let friends = [
    {name: 'Friend 1', age: 1},
    {name: 'Friend 2', age: 2},
    {name: 'Friend 3', age: 3},
    {name: 'Friend 4', age: 4},
    {name: 'Friend 5', age: 5},
    {name: 'Friend 6', age: 6},
    {name: 'Friend 7', age: 7},
    {name: 'Friend 8', age: 8},
    {name: 'Friend 9', age: 9},
    {name: 'Friend 10', age: 10},
    {name: 'Friend 11', age: 11},
    {name: 'Friend 12', age: 12},
    {name: 'Friend 13', age: 13},
  ]


  return (
    <FlatList data={friends} keyExtractor={(friend)=>friend.name} renderItem={({item}) => {return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>}}></FlatList>
  )
}

const styles = StyleSheet.create({
  textStyle: {marginVertical:50}
})

export default ListScreen