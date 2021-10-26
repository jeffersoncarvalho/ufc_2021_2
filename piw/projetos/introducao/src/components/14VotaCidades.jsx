import React, {Component} from 'react'

/*const testeBotao = (props) => {

    const acaoBotao = () => {
        alert('Botão Apertado!')
    }

    return (
        <div>
            <h1>Teste Botão</h1>
            <button onClick={acaoBotao}>Me Aperte</button>
        </div>
    )
}*/

/*class testeBotao extends Component {

    acaoBotao = () => {
        alert('Botão Apertado na Classe!')
    }

    render(){
        return (
            <div>
                <h1>Teste Botão na Classe</h1>
                <button onClick={this.acaoBotao}>Me Aperte</button>
            </div>
        )
    }
}*/

class VotaCidades extends Component {

    constructor(props){
        super(props)
        this.state = {quixada:0, fortaleza:0, caucaia:0, crato:0}
    }

    votaQuixada = () => {
        this.setState({quixada:this.state.quixada+1})
    }

    votaFortaleza = () => {
        this.setState({fortaleza:this.state.fortaleza+1})
    }

    votaCaucaia = () => {
        this.setState({caucaia:this.state.caucaia+1})
    }

    votaCrato = () => {
        this.setState({crato:this.state.crato+1})
    }

    render(){
        return (
            <div>
                <h2>Quixadá: {this.state.quixada}</h2>
                <h2>Fortaleza: {this.state.fortaleza}</h2>
                <h2>Caucaia: {this.state.caucaia}</h2>
                <h2>Crato: {this.state.crato}</h2>
                
                <button onClick={this.votaQuixada}>Vote em Quixadá!</button>
                <button onClick={this.votaFortaleza}>Vote em Fortaleza!</button>
                <button onClick={this.votaCaucaia}>Vote em Caucaia!</button>
                <button onClick={this.votaCrato}>Vote em Crato!</button>
            </div>
        )
    }
}

export default VotaCidades