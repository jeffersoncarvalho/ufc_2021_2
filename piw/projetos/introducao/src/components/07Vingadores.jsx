import React, {Component} from 'react'

class Heroi extends Component{

    render(){
        return(
            <div>
                <h2>
                    Olá {this.props.nome}
                </h2>
            </div>
        )
    }
}

class Vingadores extends Component {
    render(){
        return(
            <div>
                <Heroi nome='Hulk'/>
                <Heroi nome='Homem-Aranha'/>
                <Heroi nome='Capitão América'/>
                <Heroi nome='Viúva Negra'/>
            </div>
        )
    }
}

export default Vingadores