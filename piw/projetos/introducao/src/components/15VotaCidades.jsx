import React, {useState,useEffect} from 'react'

const VotaCidades = () => {

    const [quixada,votaQuixada] = useState(0)
    const [fortaleza,votaFortaleza] = useState(0)
    const [caucaia,votaCaucaia] = useState(0)
    const [crato,votaCrato] = useState(0)

    const [statusQuixada,setStatusQuixada] = useState('PAR')
    const [statusFortaleza,setStatusFortaleza] = useState('PAR')

    const acaoBtnQuixada = () => {
        //this.setState({quixada:this.state.quixada+1})
        votaQuixada(quixada+1)
    }

    useEffect(
        ()=>{
            if(quixada%2===0) setStatusQuixada('PAR')
            else setStatusQuixada('ÍMPAR')

            if(fortaleza%2===0) setStatusFortaleza('PAR')
            else setStatusFortaleza('ÍMPAR')

        },
        [quixada]
    )

    return (
        <div>
            <h1>React Hooks</h1>
            <h2>Quixadá: {quixada} - {statusQuixada}</h2>
            <h2>Fortaleza: {fortaleza} - {statusFortaleza}</h2>
            <h2>Caucaia: {caucaia}</h2>
            <h2>Crato: {crato}</h2>
            
            <button onClick={acaoBtnQuixada}>Vote em Quixadá!</button>
            <button onClick={()=>votaFortaleza(fortaleza+1)}>Vote em Fortaleza!</button>
            <button onClick={()=>votaCaucaia(caucaia+1)}>Vote em Caucaia!</button>
            <button onClick={()=>votaCrato(crato+1)}>Vote em Crato!</button>
        </div>
    )
}

export default VotaCidades