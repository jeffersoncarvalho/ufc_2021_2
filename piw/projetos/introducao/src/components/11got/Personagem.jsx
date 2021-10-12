import React from 'react'

const Personagem = (props) => {
    return (
        <div>
            <h1>Personagem {props.nome} da Casa {props.casa}, passando em {props.canal}</h1>
        </div>
    ) 
}

export default Personagem