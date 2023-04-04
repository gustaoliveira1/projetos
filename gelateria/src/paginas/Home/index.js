import { Header } from "../../componentes/Header"
import { Footer } from "../../componentes/Footer"
import "./style.css"

export const Home = () => {
    return (
        <div className="Home">
            <Header/>
            <main>
                <section className="banner-home">
                    <div className="limitador-largura">
                        <h1>Sorvete artesanal</h1>
                    </div>
                </section>
                <section className="sabores">
                    <img src="/img/banner-sabores.jpg" alt="Banner"/>
                    <div className="container-texto">
                        <h2>Nossos sabores</h2>
                        <span>Novos e deliciosos!</span>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo</p>
                    </div>
                </section>
                <section className="eventos">
                    <div className="container-texto">
                        <h2>Nosso eventos</h2>
                        <span>Delicias com sorvete!</span>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </div>
                    <img src="/img/eventos-image.jpg" alt="Banner"/>
                </section>
                <section className="sobre">
                    <img src="/img/sobre-image.jpg" alt="Banner"/>
                    <div className="container-texto">
                        <h2>Sobre nós</h2>
                        <span>Alegria em cada casquinha!</span>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos a anos no mercado produzindo oque tem de melhor para nossos clientes e você não pode ficar fora dessa. Venha nos fazer e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}