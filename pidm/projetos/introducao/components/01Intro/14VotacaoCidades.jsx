import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'

class VotacaoCidades extends Component {

    constructor(props){
        super(props)
        this.state = {quixada:0,fortaleza:0,caucaia:0}
    }

    //método
    votarQuixada(){
        this.setState({quixada:this.state.quixada+1})
    }

    //criando variável que recebe uma função
    votarFortaleza = ()=>{
        this.setState({fortaleza:this.state.fortaleza+1})
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:30}}>Quixadá: {this.state.quixada}</Text>
                <Text style={{fontSize:30}}>Fortaleza: {this.state.fortaleza}</Text>
                <Text style={{fontSize:30}}>Caucaia: {this.state.caucaia}</Text>
                <Button
                    title='Quixadá'
                    onPress={()=>this.votarQuixada()}
                />
                <Button
                    title='Fortaleza'
                    onPress={this.votarFortaleza}
                />
                <Button
                    title='Caucaia'
                    onPress={()=>this.setState({caucaia:this.state.caucaia+1})}
                />
            </View>
        )
    }
}

export default VotacaoCidades