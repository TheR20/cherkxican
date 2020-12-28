import * as React from 'react';
import SQLite from 'react-native-sqlite-storage';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';
import { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {   Button, Text ,Input, Block,Switch } from 'galio-framework'

let db;
const images = [

    'https://img.mp.itc.cn/upload/20160828/5d17a7c020cc4c218323ca48f86b17e7_th.gif',
      'https://i.imgur.com/O2C1O.jpg',

];
const bannerSuperiorID = "ca-app-pub-8454341646863233/7727609337";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userList:[],
      cola:"",
      Dias:0,
      Hoy: "",
    }
    db = SQLite.openDatabase(
      {
        name: 'Users.db', //Name of you table
        createFromLocation : "~user.db", //Name of your DB
      },
      this.success.bind(this),  //okCallback
      this.fail                // error callback
    );
    }

    success=()=>{
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM Users where ID=1', [], (tx, results) => {  // sql query to get all table data and storing it in 'results' variable
          let data = results.rows.length;

          let users = [];    //creating empty array to store the rows of the sql table data

          for (let i = 0; i < results.rows.length; i++) {
            users.push(results.rows.item(i));
                         //looping through each row in the table and storing it as object in the 'users' array
          }

           this.setState({ userList:users, Dias: results.rows.item(0).Dias, Hoy:results.rows.item(0).Hoy});
        //   console.log(users);        //setting the state(userlist) with users array which has all the table data
        });
      });
      // alert("ok")
    }

    fail=(error)=>{
      console.error(error) // logging out error if there is one
    }


Actualizar = () => {
  var aumentoDias = 0;
  aumentoDias = this.state.Dias+1;
  var date = new Date().getDate();
              var month = new Date().getMonth() + 1;
              var year = new Date().getFullYear();
                var fechafinal = ''+date+'/'+month+'/'+year+'';
                  console.log(this.state.Hoy);
                  console.log(fechafinal);
if(this.state.Hoy == fechafinal)
  console.log("No es necesario");
  else{

    console.log(aumentoDias);
    var consulta = 'UPDATE Users SET Dias='+aumentoDias+',Hoy="'+fechafinal+'" WHERE ID=1';
            db.transaction(tx => {
              tx.executeSql(consulta, [], (tx, results) => {

                  // sql query to get all table data and storing it in 'results' variable
                     //setting the state(userlist) with users array which has all the table data
              });
            });
            // alert
        this.success.bind(this)
        console.log("Actualizado");
  }
console.log(aumentoDias);
}



  render() {
this.Actualizar();
  var numDia= this.state.Dias;

  switch(this.state.Dias){
case 1:
var image = images[0];
break;
case 2:
var image = images[1];

  }




    return (



<ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
         <View style={{flex:1}}>



<Button round uppercase color="#E7567E"  size="large" style={{  marginHorizontal:24, fontFamily: 'sans-serif-medium',   textShadowColor: "blue", }} onPress={() => this.props.navigation.navigate('Home')}>MENU</Button>
         <ScrollView>
         {
            this.state.userList.map(function(item, i){
              return(
                 <ScrollView key={i}>
                <View  style={styles.card}>

                 <Text style={{  fontFamily: 'Roboto', fontSize: 18,color:"#D24136" , fontWeight: 'bold',  textAlign: 'center'}}>Dias Existiendo: {item.Dias}</Text>
                  <Text style={{  fontFamily: 'Roboto', fontSize: 15,textAlign: 'center' }} >Nombre: {item.Nombre}</Text>
                    <Text style={{  fontFamily: 'Roboto', fontSize: 15,textAlign: 'center' }} >Creado el: {item.Hoy}</Text>



                </View>
                </ScrollView>
              )
            })
          }
          </ScrollView>

      </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create ({

 card:{
   backgroundColor:"white",
   marginBottom:6,
   marginHorizontal:6,
   // width:340,

   borderRadius:6,
   justifyContent:"center",
   shadowColor: '#000',
   shadowOffset: { width: 1, height: 2 },
   shadowOpacity: 0.8,
   shadowRadius: 2,
   elevation: 4,
     fontFamily: 'sans-serif-condensed',
 },
 backgroundImage: {

   flex: 1,
   resizeMode: 'cover',
 },

})
