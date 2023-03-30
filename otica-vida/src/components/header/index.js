import React from 'react'
import './style.css'

export default function Header() {
    return (
        <header>
            <div className='limitador-largura'>
                <img className='logo' src='/img/logo.png' alt='Logo Ótica Vida'/>
                <nav>
                    <a href="#">Produtos</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}