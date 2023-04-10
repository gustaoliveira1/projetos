export const Card = (props) => {
    return (
        <div className="card">
            <p className="data">{props.data}</p>
            <h2 className="titulo">{props.titulo}</h2>
            <p className="empresa">{props.empresa}</p>
            <p className="conteudo">{props.conteudo}</p>
        </div>
    )
}