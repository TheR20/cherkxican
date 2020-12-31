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
import Moment from 'moment';
import {   Button, Text ,Input, Block,Switch } from 'galio-framework'
var image;
let db;
const images = [
  'https://media2.giphy.com/media/SKj4mOmjyBg1pd6g5a/giphy.gif',
    'https://media4.giphy.com/media/yth9xeltv0J3r5ofuo/giphy.gif',
    'https://media4.giphy.com/media/DjbTipsPpP8SkpTtSQ/giphy.gif',
    'https://media2.giphy.com/media/vY00zzt5a8ZYFLCSmU/giphy.gif',
    'https://media1.giphy.com/media/Skq61whbGPTqrocCio/giphy.gif',
    'https://media1.giphy.com/media/0nH27qCCpjsOfQhGtr/giphy.gif',
    //shiny6
    'https://media0.giphy.com/media/che4PY9f3OQbsvIEse/giphy.gif',
    'https://media3.giphy.com/media/YjucvezEXjgZE5uBF3/giphy.gif',
    //shiny7
    'https://media2.giphy.com/media/ouebvrKZa6xUOijrN9/giphy.gif',
 'https://i.imgur.com/HvKTosr.jpg',
];

const informacion = [

  'Este es un cigoto Sherkxican lo mejor es darle un nombre apropiado',
    'Las clasicas orejas ya estan casi formadas igual que su gusto musical',
    'Un feto sherkxican con gustos agrupecuarios formado completamente',
    'Un sherkxican infante, aun joven y con ganas de una liru sisa',
    'Un Plebito con ganas de ser si-ca-rio y tener monton de pisto y morritas',
    'El Sherkxican completo, su casita del infonavit, su bocina mamalona y monton de pisto',
    //shiny6
    'La increible version Shiny de un Sherkxican solo 1 de cada 100 nacen con el color esmeralda',
    'Los Sherxican no suelen vivir tanto por lo cual el Sherxican viejo es una rara especie',
    //shiny7
    'Si un Sherkxican viejo es raro ahora uno Shiny es una pieza de museo que merece una captura para Instragram',

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
      FechaInicio: "",
      Shiny:0,
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

           this.setState({ userList:users, Dias: results.rows.item(0).Dias, Hoy:results.rows.item(0).Hoy,
              FechaInicio:results.rows.item(0).FechaInicio,Shiny:results.rows.item(0).Shiny});
        //   console.log(users);        //setting the state(userlist) with users array which has all the table data
        var aumentoDias = 0;
        aumentoDias = this.state.Dias+1;
        var date = new Date().getDate();
                    var month = new Date().getMonth() + 1;
                    var year = new Date().getFullYear();
                      var fechafinal = ''+date+'/'+month+'/'+year+'';


        var a = Moment(fechafinal, "DD-MM-YYYY");
        var b = Moment(this.state.FechaInicio, "DD-MM-YYYY");

        var result = a.diff(b, 'days');   // =1

        console.log("Hola soy el resultado" + result);

if(result !=0){
  var consulta = 'UPDATE Users SET Dias='+result+',Hoy="'+fechafinal+'" WHERE ID=1';
          db.transaction(tx => {
            tx.executeSql(consulta, [], (tx, results) => {

                // sql query to get all table data and storing it in 'results' variable
                   //setting the state(userlist) with users array which has all the table data
            });
          });
          // alert
}




        console.log(aumentoDias);
        });
      });
      // alert("ok")


    }

    fail=(error)=>{
      console.error(error) // logging out error if there is one
    }


Actualizar = () => {
  var RandomNumber = Math.floor(Math.random() * 100);
  var numero = RandomNumber;
    console.log(numero);
    if(this.state.Shiny == 1){
      if(numero == 50){
        var consulta = 'UPDATE Users SET Shiny=3 WHERE ID=1';
                db.transaction(tx => {
                  tx.executeSql(consulta, [], (tx, results) => {

                      // sql query to get all table data and storing it in 'results' variable
                         //setting the state(userlist) with users array which has all the table data
                  });
                });
                // alert
      }

       image = images[6];
    }
    else{
      var consulta = 'UPDATE Users SET Shiny=2 WHERE ID=1';
              db.transaction(tx => {
                tx.executeSql(consulta, [], (tx, results) => {

                    // sql query to get all table data and storing it in 'results' variable
                       //setting the state(userlist) with users array which has all the table data
                });
              });
       image = images[5];
    }
if(this.state.Shiny == 2)
image = images[6];
if(this.state.Shiny == 3)
image = images[5];

}



  render() {

  var numDia= this.state.Dias;

  switch(this.state.Dias){
    case 0:
     image = images[0];
    break;
case 1:
 image = images[1];
break;
case 2:
 image = images[2];
break;
case 3:
 image = images[3];
break;
case 4:
 image = images[4];
break;
case 5:
this.Actualizar();
break;
case 6:
if(this.state.Shiny == 2)
image = images[8];
if(this.state.Shiny == 3)
image = images[7];
break;
default:
if(this.state.Shiny == 2)
image = images[8];
if(this.state.Shiny == 3)
image = images[7];
break
  }




    return (



<ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
         <View style={{flex:1}}>



<Button round uppercase color="#5EB855"  size="large" style={{  marginHorizontal:24, fontFamily: 'sans-serif-medium',   textShadowColor: "blue", }} onPress={() => this.props.navigation.navigate('Home')}>MENU</Button>
         <ScrollView>
         {
            this.state.userList.map(function(item, i){
              return(
                 <ScrollView key={i}>
                <View  style={styles.card}>

                 <Text style={{   fontSize: 18,color:"#D24136" , fontWeight: 'bold',  textAlign: 'center'}}>Dias Existiendo: {item.Dias}</Text>
                  <Text style={{   fontSize: 15,textAlign: 'center' }} >Nombre: {item.Nombre}</Text>
                    <Text style={{   fontSize: 15,textAlign: 'center' }} >Creado el: {item.FechaInicio}</Text>



                </View>
                </ScrollView>
              )
            })
          }
          </ScrollView>

<Text style={styles.topBox2}>{informacion[this.state.Dias]}</Text>
      </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create ({

 card:{
   backgroundColor:"#B2DDA1",
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
 topBox2: {
 marginBottom: 1,
       textAlign: 'center', // <-- the magic
         fontSize: 25,
         color: "white",
         backgroundColor: 'rgba(52, 52, 52, 0.8)',
           fontFamily: 'monospace',
           marginLeft:10,
           marginRight:10,

     },
 backgroundImage: {

   flex: 1,
   resizeMode: 'cover',
 },

})
