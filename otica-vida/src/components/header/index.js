import React from 'react'
import './style.css'

export default function Header() {
    return (
        <header>
            <div className='limitador-largura'>
                <img className='logo' src='/img/logo.png' alt='Logo Ótica Vida'/>
                <nav>
                    <a href="#produtos">Produtos</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    )
}