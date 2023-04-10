import "./style.css"

export const Card = (props) => {
    const theme = props.theme ? "card-dark-mode" : "card-light-mode"

    return (
        <div id="card" className={ theme }>
            <p className="data">{props.data}</p>
            <h4 className="titulo">{props.titulo}</h4>
            <p className="empresa">{props.empresa}</p>
            <p className="conteudo">{props.conteudo}</p>
        </div>
    )
}