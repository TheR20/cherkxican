/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React,  { Component,useState }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Bar,
  Alert,
  ImageBackground,
  FlatList,
  TouchableHighlight,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {   Button, Text ,Input, Block,Switch } from 'galio-framework'


var randomNum = Math.floor(Math.random() * 2);

var numero = 0;
let db;

class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    };
  }
}






  class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {10000}
      style = {{   backgroundColor: 'white', borderBottomWidth : 1.0, borderColor:'red'}}
      placeholder="Escribe tu texto aqui"


      />
    );
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      userList:[],
      TextoInput: '',
      selectedValue : '',
    }

    }



//Cuando el texto cambia en el inputtext o en la lista se actualiza el estado
      handleTextoInput = (text) => {
            this.setState({ TextoInput: text })
         }
         handleselectedValue = (text) => {
               this.setState({ selectedValue: text })
            }




  render() {
const image = "https://i.pinimg.com/originals/d4/34/ca/d434ca2e691bb4f0bd6baa4ae1ac67d0.gif";
var valorAPasar= "";

return (



<ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
  <ScrollView style={styles.scrollView}>
    <View>


<Text style={styles.topBox2}>PONLE NOMBRE A TU SHREKXICAN</Text>

<Input
placeholder="NOMBRE DE TU HUERCO AQUI"
style={{   marginTop: 10,  fontFamily: 'sans-serif-medium', }}
  onChangeText = {this.handleselectedValue}
bottomHelp
placeholderTextColor="gray"
color="black"
textAlign= 'center'

/>

<Button round uppercase color="#E7567E"  size="large" style={{  fontFamily: 'sans-serif-medium',   textShadowColor: "blue", marginBottom:  30 }} onPress={() => this.guardaBaseDeDatos()}>QUE TE LO LLEVE LA CIGUEÑA</Button>


</View>
</ScrollView>
</ImageBackground>
  );}}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#47DEE6',
    paddingTop: 50,
  },
  backgroundImage: {
    paddingTop: 20,
    flex: 1,
    resizeMode: 'cover',
  },
welcome3: {
    flex: 1,
    margin:  30,
    margin: 30,

    paddingTop: 40,
  },
    input: {
   width:500,
   borderBottomColor:'blue',
   borderBottomWidth:1,
},
topBox2: {
marginTop: 10,
      textAlign: 'center', // <-- the magic
        fontSize: 25,
        color: "white",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
          fontFamily: 'monospace',
          marginLeft:10,
          marginRight:10,
            marginBottom:  220,
    },
    topBox3: {

          textAlign: 'center', // <-- the magic
            fontSize: 20,
            color: "white",
          backgroundColor: 'rgba(52, 52, 52, 0.8)'
        },
});
