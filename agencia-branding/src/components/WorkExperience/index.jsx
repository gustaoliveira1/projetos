import { Card } from "../Card/"

export const WorkExperienceSection = () => {
    return (
        <section className="work-experience">
            <div className="container-texto">
                <h2>Experiências De Trabalho</h2>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div className="box-cards">
                <Card
                    data="Junho 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    conteudo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card
                    data="Agosto 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    conteudo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card
                    data="Fevereiro 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    conteudo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </section>
    )
}