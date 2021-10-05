//import react from 'react'
import ReactDOM from 'react-dom'

//import OlaMundo from './components/01OlaMundo'
//import OlaMundo from './components/02OlaMundo'
//import OlaMundo from './components/03OlaMundo'
//import MeuProps from './components/04MeuProps'
import {Hulk as H,Loki as L} from './components/05Vingadores'

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
ReactDOM.render(
    <div>
        <H nome='Jefferson'/>
        <L nome='Fulano' />
    </div>
    ,root)
