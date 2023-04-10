import "./style.css"

export const Card = (props) => {
    return (
        <div id="card" className={props.theme}>
            <p className="data">{props.data}</p>
            <h4 className="titulo">{props.titulo}</h4>
            <p className="empresa">{props.empresa}</p>
            <p className="conteudo">{props.conteudo}</p>
        </div>
    )
}