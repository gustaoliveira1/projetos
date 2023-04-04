import { Link } from "react-router-dom";
import "./style.css"

export const Header = () => {
    return (
        <header>
            <div className="limitador-largura">
                <img src="/img/logo.png" alt="Logo da Gelateria"/>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/sabores">Sabores</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}