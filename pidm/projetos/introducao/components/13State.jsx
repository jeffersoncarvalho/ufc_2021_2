import React, {Component} from "react";
import { View, Text, Button } from "react-native";

class MyState extends Component {

    constructor(props){
        super(props)
        this.state = {contador:10}
    }

    acaoBotao(){
        //this.contador++
        this.setState({contador:this.state.contador+1})
    }

    render(){
        return (
            <View>
                <Text style={{fontSize:30}}>Contador: {this.state.contador}</Text>
                <Button
                    title='Me aperte!'
                    onPress={()=>this.acaoBotao()}
                />
            </View>
        )
    }
}

export default MyState