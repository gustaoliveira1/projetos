import { Header } from "../../componentes/Header"
import { Footer } from "../../componentes/Footer"
import "./style.css"

export const PaginaSabores = () => {
    return (
        <div className="Sabores">
            <Header/>
            <main>
                <section className="banner-sabores">
                    <div className="limitador-largura">
                        <h1>Nossos sabores</h1>
                    </div>
                </section>
                <section className="container-sabores limitador-largura">
                    <h2>Sabores de sorvete</h2>
                    <div className="box-cards">
                        <div className="card">
                            <img src="/img/sabor-oreo.png" alt="Sorvete sabor Oreo"/>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div className="card">
                            <img src="/img/sabor-pistache.png" alt="Sorvete sabor Pistache"/>
                            <h3>Sorvete de Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className="card">
                            <img src="/img/sabor-cookies-avela.png" alt="Sorvete sabor Cookie e Avelã"/>
                            <h3>Sorvete Cookie & Avelã</h3>
                            <p>O nosso melhor sorvete você vai adorar o sabor.</p>
                        </div>
                        <div className="card">
                            <img src="/img/sorbet-kiwi.png" alt="Sorvete sabor Kiwi"/>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className="card">
                            <img src="/img/sorbet-morango.png" alt="Sorvete sabor Morango"/>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de Morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className="card">
                            <img src="/img/sorbet-limao.png" alt="Sorvete sabor Limão"/>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encatar</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}