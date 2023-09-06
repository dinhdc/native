import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {

  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter your password: </Text>
      <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={password} onChangeText={(newText) => setPassword(newText)} />
      <Text>New Password is {password}</Text>
      {password && password.length < 4 ? <Text>Password must be at least 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding: 8
  }
});

export default TextScreen;