import React, { Component } from "react";
import { View, Text, Image} from 'react-native';

class Aula02 extends Component {
    render(){

        let logo = 'https://colegiobarao.info/img/Logo_Bola_PNG.png'

        return(
            <View style={{ backgroundColor: 'gray', width: 420, height: 690, alignContent: 'center', alignItems: 'center'}}>
                
                <View>
                    <Text style={{ color: 'white', fontSize: 40 , fontStyle: 'bold',
                    marginTop: 60, textAlign: 'center' }}>
                        Atividade Aula01 
                    </Text>
                </View>

                <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 70}}>
                    <Image
                        source={{ uri: logo }}
                        style={{ width: 250, height: 250, marginTop: 50}}
                    />
                </View>

                <View style={{ backgroundColor: 'white', width: 200, height: 50, 
                    alignContent: 'center', alignItems: 'center', marginTop: 100
                }}>
                    <Text style={{ fontSize: 30, color: 'green', paddingTop: 5 }}>
                        ENTRAR
                    </Text>

                </View>

            </View>
        );
    }
}

export default Aula02