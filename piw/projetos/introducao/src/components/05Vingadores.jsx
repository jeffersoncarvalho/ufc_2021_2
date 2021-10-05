import React from 'react'

const Hulk = (props) =>

(
    <div>
        <h2>
            Olá, meu amigo {props.nome}. Eu sou o Hulk.
        </h2>
        <h3>Teste</h3>
    </div>

)

const Loki = (props) =>
    <h2>
        Olá inseto {props.nome}. Eu sou o Loki.
    </h2>

export { Hulk, Loki }