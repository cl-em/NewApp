import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const Greedy = props => {

  return (<View>
    <Text> {props.name} est un nigger</Text>
  </View>)
}


export default function App() {
  const [niggerName, setNiggerName] = useState("salut")


  return (
    <View style={styles.container}>
      <Greedy name={niggerName} />
      <Image source={require('./livereact.jpg')} style={{width:100,height:100}}/>
      <TextInput 
        style={styles.input}

        defaultValue='' 
        onSubmitEditing={value => { setNiggerName(value.nativeEvent.text) }} 
      />

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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    color: '#333',
    width: '80%',
    height: 40,



  },
});
