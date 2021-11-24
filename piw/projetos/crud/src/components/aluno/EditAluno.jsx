import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const EditAluno = () => {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [IRA, setIRA] = useState(0)
    const [loading,setLoading] = useState(true)
    let { id } = useParams()

    const handleChange = event => {
        //console.log(event)
        switch (event.target.name) {
            case 'nome':
                setNome(event.target.value)
                break
            case 'curso':
                setCurso(event.target.value)
                break
            case 'IRA':
                setIRA(event.target.value)
                break
            default:
                console.log('erro')
        }
    }

    useEffect(
        () => {
            
            axios.get('http://localhost:3001/alunos/' + id)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setIRA(response.data.IRA)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },
        [loading]
    )


    function onSubmit(e) {
        e.preventDefault()
        console.log('nome:' + nome)
        console.log('curso:' + curso)
        console.log('IRA' + IRA)
    }


    return (
        <div style={{ marginTop: 50 }}>
            <h4>Editar Aluno</h4>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Nome: </label>
                    <input
                        id="nome"
                        name="nome"
                        type="text"
                        onChange={handleChange}
                        value={nome}
                        className="form-control"
                    />
                </div>
                <div className='form-group'>
                    <label>Curso: </label>
                    <input
                        id="curso"
                        name="curso"
                        type="text"
                        onChange={handleChange}
                        value={curso}
                        className="form-control" />
                </div>
                <div className='form-group'>
                    <label>IRA: </label>
                    <input
                        id="IRA"
                        name="IRA"
                        type="text"
                        onChange={handleChange}
                        value={IRA}
                        className="form-control" />
                </div>
                <div className='form-group' style={{ marginTop: 10 }}>
                    <input type='submit' className='btn btn-primary' />
                </div>
            </form>
        </div>
    )

}

export default EditAluno