import React, { Component } from 'react'

import Personagem from './Personagem'

class Casa extends Component {
    render() {
        return (
            <div>
                <Personagem nome='Arya' casa='Stark' />
                <Personagem nome='Robert' casa='Baratheon' />
                <Personagem nome='Tywin' casa='Lannister' />
            </div>
        )
    }
}

export default Casa