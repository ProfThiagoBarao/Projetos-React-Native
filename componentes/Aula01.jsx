import React, { Component } from "react";
import { View, Text, Image} from 'react-native';

class Aula01 extends Component{
    render(){

      let nome = 'Thiago';
      let imagem = 'https://colegiobarao.info/img/Logo_Bola_PNG.png'

      return(
        <View style={{ backgroundColor: 'black', padding: 80}}>
          <Text style={{ marginTop: 50, textAlign: 'center', color: 'white' }}>Olá mundo</Text>
          <Text style={{ color: 'green', fontSize: 50, textAlign: 'center' }}>Entendendo as propriedades!</Text>
          
          <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <Image 
            source={ require('../assets/react-native.png') }
            style={{ width: 200, height: 200 }}
          />
          </View>

          <Text>{ nome }</Text>
          
          <View style={{ alignContent: 'center', alignItems: 'center',  }}>
          <Image
            source={{ uri: imagem }}
            style={{ width: 100, height: 100 }}
          />
          </View>

        </View>
      );
    }
}

export default Aula01;