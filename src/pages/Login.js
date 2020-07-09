import React, {useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'
import {usePost} from '../utils/rest'


const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDf0wFegnuk14n0pBws1xdXbN15TihGiV8'



const Login = () => {
    const [postData, signin] = usePost(url)
    const [logado, setLogado] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    useEffect(() => {
        if(Object.keys(postData.data).length > 0){
            localStorage.setItem('token', postData.data.idToken) 
            window.location.reload()          
        }
    }, [postData])

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setLogado(true)
        }
    })

    const login = async() => {
        const token = await signin({            
            email,
            password: senha,
            returnSecureToken: true            
        })
    }

    const onChangeEmail = evt => {
        setEmail(evt.target.value)
    }

    const onChangeSenha = evt => {
        setSenha(evt.target.value)
    }


    if(logado){
        return <Redirect to='/' />
    }
        


    return (
        <div className='container'>
            <h1 >Login</h1>
            {
                postData.error && postData.error.length > 0 &&
                <p>E-mail ou senha inválidos</p>
            }           
            <input type="text" value={email} onChange={onChangeEmail} placeholder='Seu e-mail'/><br/>
            <input type="text" value={senha} onChange={onChangeSenha} placeholder='Sua senha'/><br/>
            <button onClick={login  }>Login</button>
        </div>
    )
}

export default Login