import React, {Component} from 'react'

class IMC extends Component {
    
    calculo(peso,altura){
        return peso/(altura*altura)
    }
    
    render(){
        return(
            <div>
                <h1>Seu peso é: {this.props.peso}</h1>
                <h1>Sua altura é: {this.props.altura}</h1>
                <h1>Seu IMC é: {this.calculo(this.props.peso,this.props.altura)}</h1>
            </div>
        )
    }
}

export default IMC