import { StatusBar } from 'expo-status-bar';
import { useState ,useEffect} from 'react';
import { Text, View, Button, TextInput,Dimensions ,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './Style';

const Greedy = props => {

  return (<View>
    <Text> {props.name} est un nigger</Text>
  </View>)
}


const Carte =  props =>{

  let  newStyle = Object.assign({},{width:props.dimensions.width,height:props.dimensions.width/1.6},styles.rectangle) ;
  return (



      <ScrollView style={styles.flexBox}>
        { props.nbCarte ? Array(props.nbCarte).fill(1).map((e,i)=>(
          <LinearGradient key={i} style={newStyle}
          colors={['rgba(2,0,36,1)', 'rgba(9,9,121,1)', 'rgba(0,212,255,1)']}
          start={{x:0.4,y : 0}}
          >
            <View  ></View>
          </LinearGradient>

        )): <View></View>}
      </ScrollView>
  
  )
}

export default function App() {
  const [niggerName, setNiggerName] = useState(1);

  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });


  useEffect(() => {
    const updateDimensions = () => {
      setScreenDimensions(Dimensions.get('window'));
    };
    updateDimensions();
    Dimensions.addEventListener('change', updateDimensions);
  }, []);


  return (
    <View style={styles.container}>
      <Greedy name={niggerName} />
      <TextInput 
        style={styles.input}
        defaultValue='' 
        onSubmitEditing={value => { setNiggerName(value.nativeEvent.text) }} 
      />

      <Carte dimensions={screenDimensions} nbCarte={parseInt(niggerName)}/>

    </View>
  );
}

