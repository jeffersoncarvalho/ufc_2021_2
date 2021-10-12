import React, { Component } from 'react'

/*class Casa extends Component {
    render() {
        return (
            <div>
                <h1>Game of Thrones V.2</h1>
                {
                    React.Children.map(
                        this.props.children,
                        (personagem) => {
                           //return React.cloneElement(personagem,{casa:this.props.casa, canal:this.props.canal})
                           return React.cloneElement(personagem,{...this.props})
                        }
                    )
                }
            </div>
        )
    }
}

export default Casa*/

function Casa(props){
    return(
    <div>
        <h1>Game of Thrones V.3</h1>
        {
            React.Children.map(
                props.children,
                (personagem) => {
                    //return React.cloneElement(personagem,{casa:props.casa, canal:props.canal})
                    return React.cloneElement(personagem, { ...props })
                }
            )
        }
    </div>
    )
}

export default Casa