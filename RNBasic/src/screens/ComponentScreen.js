import React from 'react';
import { Text, StyleSheet, View } from 'react-native'


const ComponentsScreen = () => {

  const myName = 'ant';

  return (<View><Text style={styles.primaryText}>This is a component screen.</Text><Text style={styles.secondaryText}>My name is {myName}</Text></View>);
}

const styles = StyleSheet.create({
  primaryText: {
    fontSize: 45,
  },
  secondaryText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;