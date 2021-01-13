import * as React from 'react';
import {  View,ImageBackground ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import gifmoviendose from './src/gifmoviendose';
import embrion from './src/embrion';
import {   Button, Text  } from 'galio-framework'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const bannerSuperiorID = "ca-app-pub-8454341646863233/6218814449";
function HomeScreen({ navigation }) {
  return (


    <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/HvKTosr.jpg'}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={styles.topBox2}>Una vida es una responsabilidad.</Text>
<Text style={styles.topBox2}>(Algunas imagenes pueden tardar en cargar.)</Text>


        <Button round size="large"
          onPress={() => navigation.navigate('Nuevo')}
         color="#32A027" style={{ marginTop: 100, }}>NUEVO!</Button>

         <Button round size="large"
            onPress={() => navigation.navigate('Pansita')}
          color="#32A027" style={{ marginTop: 50, }}>VER PANSITA</Button>

            <View style={{  marginTop: 50, }}>
          <BannerAd
               unitId={bannerSuperiorID}
               size={BannerAdSize.ADAPTIVE_BANNER}
               requestOptions={{
                 requestNonPersonalizedAdsOnly: true,
               }}
             />
             </View>
    </View>

      </ImageBackground>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Nuevo" component={gifmoviendose} />
          <Stack.Screen name="Pansita" component={embrion}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5FCFF',
    paddingTop: 50,

  },


  backgroundImage: {
    paddingTop: 20,
    flex: 1,
    resizeMode: 'cover',
  },

    topBox: {
      textAlign: 'center', // <-- the magic
      marginTop: 10,
      color: "#3658DE",
        fontSize: 41,
        fontFamily: 'Iowan Old Style'
    },
      topBox2: {
        textAlign: 'center', // <-- the magic
          fontSize: 18,
          color: "white",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        fontFamily: 'Iowan Old Style'
      }
});


export default App;
