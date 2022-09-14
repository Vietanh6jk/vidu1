import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,Image} from 'react-native'
import React, { useState } from 'react';


export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput  onChangeText={text => setText(text)}
        defaultValue={text} placeholder='Please text me' style={styles.input}/>
      <Button title='Click me' ></Button>
      <Text style={styles.red}>Ten:{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  }

});

