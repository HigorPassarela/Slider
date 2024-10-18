import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Slider from '@react-native-community/slider';

export default class App extends Components{
    constructor(props){
        super(props);
        this.state = { 
            valor: 50
        };
    }

    render(){
        return(
            <View style={styles.container}>

                <Slider 
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={ (ValorSelecionado)=> this.setState({valor:ValorSelecionado}) }
                    value={this.state.valor}
                    minimumTrackTintColor="#00FF00"
                    maximumTrackTintColor={"#FF0000"}
                />

                <Text style={{TextAlign: 'center', fontSize: 30}}>
                   Você tem: {this.state.valor.toFixed(1)} kg
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});