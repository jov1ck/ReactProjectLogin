import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../../ListaSuspensa'
import Botao from '../../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const ages = [
        'Yes', 
        'No'        
    ]
        
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isOver21, setisOver21] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            name,
            email,
            password,
            isOver21
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Sign up to learn more</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Name:" 
                    placeholder="Write your name" 
                    valor={name}
                    aoAlterado={valor => setName(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Email:" 
                    placeholder="Write your email" 
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Password:" 
                    placeholder="Write your password" 
                    valor={password}
                    aoAlterado={valor => setPassword(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Is Over 21?" 
                    itens={ages}
                    valor={isOver21}
                    aoAlterado={valor => setisOver21(valor)}
                />
                <Botao texto="Create your account" />
            </form>
        </section>
    )
}

export default Formulario