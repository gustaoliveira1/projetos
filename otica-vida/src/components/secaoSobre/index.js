import React from "react";
import './style.css'

export default function Sobre() {
    return (
        <section id="sobre" className="sobre">
            <div className="limitador-largura">
                <div className="container-texto">
                    <h2>Quem somos nós?</h2>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>
                <div className="container-sobre">
                    <img src="/img/loja.png" alt="Loja"/>
                    <div className="informacao-sobre">
                        <h2>Nossas filiais</h2>
                        <p>Hoje temos mais de 20 filiais por todo o Brasil e na América</p>
                    </div>
                    <div className="informacao-sobre">
                        <h2>Atendimento flexível</h2>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                    <img src="/img/atendimento.png" alt="Atendimento"/>
                </div>
            </div>
        </section>
    )
}