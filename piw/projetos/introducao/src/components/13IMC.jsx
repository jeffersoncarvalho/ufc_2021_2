import React from 'react'

const IMC = (props) => {

    function calculo(peso, altura) {
        return peso / (altura * altura)
    }


    return (
        <div>
            <h1>Seu peso é: {props.peso}</h1>
            <h1>Sua altura é: {props.altura}</h1>
            <h1>Seu IMC é: {calculo(props.peso, props.altura)}</h1>
        </div>
    )

}

export default IMC