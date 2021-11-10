import React from 'react'
import {View,Image} from 'react-native'

export default class ProfessorAragao extends React.Component{
    render(){

        //let figura = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-240x320.png'}

        return(
            <Image
                source={this.props.figura} 
                style={{width:150,height:180}}/>
        )
    }
}