import { Header } from "../../componentes/Header"
import { Footer } from "../../componentes/Footer"
import "./style.css"

export const PaginaSobre = () => {
    return (
        <div className="Sobre">
            <Header />
            <main>
                <section className="banner-sobre">
                    <div className="limitador-largura">
                        <h1>A gelateria</h1>
                    </div>
                </section>
                <section className="box-sobre">
                    <div className="container-sobre limitador-largura">
                        <div className="container-texto">
                            <h2>Sobre Nós</h2>
                            <span>Nós simplesmente amamos sorvete!</span>
                            <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete
                                para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas
                                para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                            <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar
                                junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas
                                e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o
                                melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                        </div>
                    </div>
                </section>
                <section className="container-imagens">
                    <img src="/img/sobre-image.jpg" alt="Pessoas sorrindo"/>
                    <img src="/img/sorveteria.jpg" alt="Sorveteria"/>
                </section>
            </main>
            <Footer />
        </div>
    )
}