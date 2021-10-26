import React, {Component} from 'react'

/*const imc = (props) => {

    const acaoBotao = () => {
        alert('Botão Apertado!')
    }

    return (
        <div>
            <button onClick={acaoBotao}>Me Aperte!</button>
        </div>
    )
}

export default imc*/

/*class IMC extends Component {

    acaoBotao = () => {
        alert('Botão Apertado pela Classe')
    }

    render(){
        return (
            <div>
                <button onClick={this.acaoBotao}>Me Aperte!</button>
            </div>
        )
    }
}

export default IMC*/

/*class IMC extends Component {

    constructor(props) {
        super(props)
        this.state = {quixada:0}
    }

    votaQuixada = () => {
        this.setState({quixada:this.state.quixada+1})
    }

    render(){
        return (
            <div>
                <h2>Quixadá: {this.state.quixada}</h2>
                <button onClick={this.votaQuixada}>Vote em Quixadá!</button>
            </div>
        )
    }
}

export default IMC*/


/*class IMC extends Component {

    constructor(props) {
        super(props)
        this.state = {quixada:0}
    }

    votaQuixada(){
        this.setState({quixada:this.state.quixada+1})
    }

    render(){
        return (
            <div>
                <h2>Quixadá: {this.state.quixada}</h2>
                <button onClick={()=>this.votaQuixada()}>Vote em Quixadá V2!</button>
            </div>
        )
    }
}

export default IMC*/

/*class IMC extends Component {

    constructor(props) {
        super(props)
        this.state = {quixada:0}
        this.votaQuixada = this.votaQuixada.bind(this)
    }

    votaQuixada(){
        this.setState({quixada:this.state.quixada+1})
    }

    render(){
        return (
            <div>
                <h2>Quixadá: {this.state.quixada}</h2>
                <button onClick={this.votaQuixada}>Vote em Quixadá V3!</button>
            </div>
        )
    }
}

export default IMC*/

class IMC extends Component {

    constructor(props) {
        super(props)
        this.state = {quixada:0}
    }

    render(){
        return (
            <div>
                <h2>Quixadá: {this.state.quixada}</h2>
                <button onClick={()=>this.setState({quixada:this.state.quixada+1})}>Vote em Quixadá V3!</button>
            </div>
        )
    }
}

export default IMC