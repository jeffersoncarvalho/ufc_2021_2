import React, { Component } from 'react'

/*function meuProps(props){
    return(
        <h2>
            Nome: {props.nome}! <br />
            Idade: {props.idade} <br />
            Curso: {props.curso}
        </h2>
    )
}

export default meuProps*/

/*const meuProps = (props) =>
    <h2>
        Com Função Arrow! <br />
        Nome: {props.nome}! <br />
        Idade: {props.idade} <br />
        Curso: {props.curso}
    </h2>

export default meuProps*/

class MeuProps extends Component {
    
    /*constructor(props) {
        super(props)
    }*/

    render() {
        return (
            <h2>
                Com Função Classe! <br />
                Nome: {this.props.nome}! <br />
                Idade: {this.props.idade} <br />
                Curso: {this.props.curso}
            </h2>
        )
    }
}

export default MeuProps