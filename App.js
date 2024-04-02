import React from "react";
import { View, StyleSheet, TextInput, Image, Button } from "react-native"

export default function App(){
  return(
    <View style = {styles.all}>

      <View style = {styles.Header}>

        <View style = {styles.Header2} >
       <Image style = {styles.Header2}source={require('./assets/chega.jpg')}></Image>

        </View>

        <View style = {styles.lado}>
        
        <TextInput style= {styles.imput} placeholder="campo de texto"></TextInput>
        <Button 
        title="botão"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

</View>



      </View>

    <View style = {styles.lado} style = {styles.Quadrado}>
      <Image style = {styles.Imagem} source={require('./assets/deu.png')}></Image>
      <TextInput style = {styles.Campodetexto} placeholder="Campo de texto"></TextInput>
    </View>

    <View style = {styles.lado} style = {styles.Quadrado}>
      <Image style = {styles.Imagem} source={require('./assets/deu.png')}></Image>
      <TextInput style = {styles.Campodetexto} placeholder="Campo de texto"></TextInput>
    </View>

    <View style = {styles.lado} style = {styles.Quadrado}>
      <Image style = {styles.Imagem} source={require('./assets/deu.png')}></Image>
      <TextInput style = {styles.Campodetexto} placeholder="Campo de texto"></TextInput>
    </View>




    </View>

    
  )
}

const styles = StyleSheet.create({

  all:{
    width:'100%',
    height:'100%',
    display: 'flex'
  },
  Header:{
    height: '20%',
    width: '100%',
    backgroundColor: '#90c9e0'
  },
  Header2:{
    width: '100%',
    height: '60%',
    flexDirection:'row'
  },
  imput:{
    backgroundColor: '#f7ffff',
    width: '90%',
    borderRadius: 10,
    
  },
  Imagem: { 

    width: 100,
    height: 100,
    borderRadius: 20,
  },
  lado:{
    alignItems : 'center',
    justifyContent:  'center',
    flexDirection:'row',
  },
  Quadrado: {
    alignItems : 'center',
    justifyContent:  'center',
    flexDirection:'row',
    margin: 20,
    height: 150,
    backgroundColor: '#ddf2f7',
    borderRadius: 25,
  },
  Campodetexto:{
    borderWidth: 1,
    padding: 3,
    width: 200,
    height: 50

  },

  
    
});
