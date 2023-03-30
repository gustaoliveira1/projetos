import React from "react";

export default function Produtos() {
    return (
        <section id="produtos" className="produtos">
            <div className="limitador-largura">
                <div className="container-texto">
                    <h2>Nossos produtos</h2>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado. Óculos de grau</p>
                </div>
                <div className="box-cards">
                    <div className="card-produto">
                        <h3>Óculso de grau</h3>
                        <img src="/img/oculos01.png"/>
                        <p>R$ 500,00</p>
                    </div>
                    <div className="card-produto">
                        <h3>Óculso transition</h3>
                        <img src="/img/oculos02.png"/>
                        <p>R$ 750,00</p>
                    </div>
                    <div className="card-produto">
                        <h3>Óculso de sol</h3>
                        <img src="/img/oculos03.png"/>
                        <p>R$ 700,00</p>
                    </div>
                    <div className="card-produto">
                        <h3>Óculso infantil</h3>
                        <img src="/img/oculos04.png"/>
                        <p>R$ 500,00</p>
                    </div>    
                </div>
                <div className="informacoes-produtos">
                    <p>Todos os nossos produtos incluem: </p>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}