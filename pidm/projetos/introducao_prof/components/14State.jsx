import React, { Component } from "react";
import {View,Text,Button} from 'react-native'

class MyState extends Component {

    constructor(props){
        super(props)
        this.state={contador:0}
    }

    adicionaContador(){
        this.setState({contador:this.state.contador+1})
    }

    addContador = () => {
        this.setState({contador:this.state.contador+1})
    }

    render(){
        return(
            <View>
                <Text>Contador: {this.state.contador}</Text>
                <Text>Botão 1</Text>
                <Button 
                    title='Me Aperta'
                    onPress={()=>this.adicionaContador()}
                     />
                <Text>Botão 2</Text>
                <Button 
                    title='Me Aperta'
                    onPress={this.addContador}
                     />
                <Text>Botão 3</Text>
                <Button 
                    title='Me Aperta'
                    onPress={()=>this.setState({contador:this.state.contador+1})}
                     />
            </View>
        )
    }
}

export default MyState