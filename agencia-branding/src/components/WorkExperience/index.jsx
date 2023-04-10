import "./style.css"
import { Card } from "../Card/"

export const WorkExperienceSection = (props) => {
    const theme = props.theme ? "work-experience-dark-mode" : "work-experience-light-mode"

    return (
        <section id="work-experience" className={ theme }>
            <div className="container-texto limitador-largura">
                <h2 className="">Experiências De Trabalho</h2>
                <p className="cor-texto-light-mode">Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div className="box-cards limitador-largura">
                <Card
                    data="Junho 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    conteudo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                    theme={props.theme}
                />
                <Card
                    data="Agosto 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    conteudo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                    theme={props.theme}
                />
                <Card
                    data="Fevereiro 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    conteudo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                    theme={props.theme}
                />
            </div>
        </section>
    )
}