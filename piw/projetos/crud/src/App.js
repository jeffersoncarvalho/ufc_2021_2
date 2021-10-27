import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import CreateAluno from './components/aluno/CreateAluno'
import ListAluno from './components/aluno/ListAluno'

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to={'/'} className='navbar-brand'>CRUD</Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/'} className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/createAluno'} className='nav-link'>Create Aluno</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/listAluno'} className='nav-link'>List Aluno</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h2>Projeto CRUD</h2>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/createAluno' component={CreateAluno}/>
       <Route path='/listAluno' component={ListAluno}/>
     </Switch>
    </div>
  );
}

export default App;
