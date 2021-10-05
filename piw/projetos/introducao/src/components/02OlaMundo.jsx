import React from 'react'

//não é uma boa prática de programação, mas tudo bem.
/*export default ()=>{
    return( 
        <h1>
            Olá Mundo com Arrows!
        </h1>
    )
}*/

//boa prática de programação pois orienta a quem 
//importa o componente a criar uma variável de mesmo nome da exportada.
/*const OlaMundo = () =>{
    return( 
        <h1>
            Olá Mundo com Arrows com variável!
        </h1>
    )
}

export default olaMundo*/

const OlaMundo = () =>
    <h1>
        Olá Mundo com Arrows com variável e sem corpo e sem return.
    </h1>
export default OlaMundo