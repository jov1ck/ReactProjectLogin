import './Botao.css'
import React from 'react'

const Botao = (props) => {
    return (<button className='botao'>
        {props.texto}
    </button>)

}

export default Botao