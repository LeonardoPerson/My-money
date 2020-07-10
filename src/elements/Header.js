import React, {useEffect, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'


const Header = () => {
    const [logado, setLogado] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setLogado(true)
        }else{
            setLogado(false)
        }
    })
    const logout = () => {
        localStorage.removeItem('token')
        setLogado(false)        
        window.location.reload()
    }
  

    return (
        <nav className='navbar'>
            <div className='container' >
                <Link className='navbar-brand' to='/'>My Money</Link>
                { logado &&
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <button onClick={logout} type='button' className='btn nav-link navbar-brand'>Sair</button>
                    </li>
                </ul>
                }
            </div>
        </nav>
    )
}

export default Header