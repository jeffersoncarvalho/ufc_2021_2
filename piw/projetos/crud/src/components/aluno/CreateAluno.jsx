import React, {Component} from 'react'

export default class CreateAluno extends Component {

    constructor(props){
        super(props)
        this.state = {nome:''}

        this.setNome = this.setNome.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e){
        this.setState({nome:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        alert('Nome: ' + this.state.nome)
        this.setState({nome:''})
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
                         />
                    </div>
                    <div className='form-group'>
                        <label>Curso: </label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>IRA: </label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='form-group' style={{marginTop:10}}>
                        <input type='submit' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}