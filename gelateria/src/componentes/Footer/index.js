import "./style.css"

export const Footer = () => {
    return (
        <footer>
            <div className="limitador-largura contatos">
                <img src="/img/logo.png" alt="Logo da Gelateria"/>
                <div className="contato">
                    <h3>Endereço</h3>
                    <p>Av. Bernardinho de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="contato">
                    <h3>Contato</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className="contato">
                    <h3>Horários</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="limitador-largura desenvolvedor">
                <p>Gelateria. Orgulhosamente desenvolvido por <a href="https://github.com/gustaoliveira1" target="_blank">Gusta Oliveira</a></p>
            </div>
        </footer>
    )
}