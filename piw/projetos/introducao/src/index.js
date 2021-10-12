//import react from 'react'
import ReactDOM from 'react-dom'

//import OlaMundo from './components/01OlaMundo'
//import OlaMundo from './components/02OlaMundo'
//import OlaMundo from './components/03OlaMundo'
//import MeuProps from './components/04MeuProps'
//import {Hulk as H,Loki as L} from './components/05Vingadores'
//import Vingadores from './components/07Vingadores'
//import Casa from './components/09got/Casa'
//import Casa from './components/10got/Casa'
//import Personagem from './components/10got/Personagem'
//import Casa from './components/11got/Casa'
//import Personagem from './components/11got/Personagem'
//import PersonagemIrmao from './components/11got/PersonagemIrmao'
import IMC from './components/12IMC'

const root = document.getElementById('root')
//ReactDOM.render(<OlaMundo/>,root)
/*ReactDOM.render(
    <MeuProps 
        nome='Jefferson de Carvalho' 
        idade={39}
        curso='Sistemas de Informação' 
        />
    ,root)
*/

/*ReactDOM.render(
    <div>
        <H nome='Tonho'/>
        <L nome='Tião' />
    </div>
    ,root)
*/

/*ReactDOM.render(
    <div>
        <Vingadores />
    </div>
    ,root)*/

/*ReactDOM.render(
    <div>
        <Casa />
    </div>
    , root)
*/

/*ReactDOM.render(
    <div>
        <Casa>
                <Personagem nome='Arya' casa='Stark' />
                <Personagem nome='Rob' casa='Stark' />
                <Personagem nome='Sansa' casa='Stark' />
                <h3>Jefferson de Carvalho</h3>
        </Casa>
    </div>
    , root)*/

/*ReactDOM.render(
    <div>
        <Casa casa='Stark' canal='HBO'>
            <Personagem nome='Arya' />
            <Personagem nome='Rob' />
            <Personagem nome='Sansa' />
            <PersonagemIrmao />
        </Casa>
    </div>
    , root)
    */

    ReactDOM.render(
        <div>
            <IMC peso={91} altura={1.83}/>
        </div>
        , root)