import React from "react";

export default function Contato() {
    return (
        <section id="contato" className="contato">
            <div className="limitador-largura">
                <div className="container-texto">
                    <h2>Fale conosco</h2>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div className="container-contatos">
                    <div className="contatos">
                        <h4>Contato</h4>
                        <div className="item-contato">
                            <img src="/img/local.png" alt="Local"/>
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className="item-contato">
                            <img src="/img/telefone.png" alt="Telefone"/>
                            <p>(21) 9999-9999</p>
                        </div>
                        <div className="item-contato">
                            <img src="/img/email.png" alt="Email"/>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className="redes-sociais">
                        <h4>Nossas redes sociais</h4>
                        <div className="item-rede-social">
                            <img src="/img/fb.png" alt="Facebook"/>
                            <p>/OticaVida</p>
                        </div>
                        <div className="item-rede-social">
                            <img src="/img/ig.png" alt="Instagram"/>
                            <p>@oticavidarj</p>
                        </div>
                        <div className="item-rede-social">
                            <img src="/img/tt.png" alt="Twitter"/>
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}