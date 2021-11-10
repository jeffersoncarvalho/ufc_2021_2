import React, {Component} from 'react'
import axios from 'axios'

export default class CreateAluno extends Component {

    constructor(props){
        super(props)
        this.state = {nome:'',curso:'',IRA:0}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e){
        this.setState({nome:e.target.value})
    }
    setCurso(e){
        this.setState({curso:e.target.value})
    }
    setIRA(e){
        this.setState({IRA:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        //alert('Nome: ' + this.state.nome + 'Curso: ' + this.state.curso + ' IRA: ' + this.state.IRA)
        const novoAluno = {nome:this.state.nome, curso:this.state.curso,IRA:this.state.IRA}
        this.setState({nome:'',curso:'',IRA:0})
        
        //assíncrona
        axios.post('http://localhost:3001/alunos',novoAluno)
        .then(
            (response)=>{
                alert('Aluno: ' + response.data.nome + ' inserido com sucesso!')                
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    render(){
        return(
            <div style={{marginTop:50}}>
                <h4>Criar Aluno</h4>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Nome: </label>
                        <input type='text' className='form-control'
                               value={this.state.nome} onChange={this.setNome}
                               placeholder='Entre com seu nome'
                         />
                    </div>
                    <div className='form-group'>
                        <label>Curso: </label>
                        <input type='text' className='form-control' 
                               value={this.state.curso} onChange={this.setCurso}
                               placeholder='Entre com seu curso'/>
                    </div>
                    <div className='form-group'>
                        <label>IRA: </label>
                        <input type='text' className='form-control' 
                               value={this.state.IRA} onChange={this.setIRA}/>
                    </div>
                    <div className='form-group' style={{marginTop:10}}>
                        <input type='submit' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}