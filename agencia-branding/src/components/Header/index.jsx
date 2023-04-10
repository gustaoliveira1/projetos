import "./style.css"
import iconSun from "/assets/sun.png"
import iconMoon from "/assets/moon.png"
import logo from "/assets/logo.png"

export const Header = (props) => {
    const theme = props.theme ? "header-dark-mode" : "header-light-mode"
    const buttonIcon = props.theme ? iconSun : iconMoon

    return (
        <header className={ theme }>
            <div className="limitador-largura">
                <img src={ logo } alt="Logo da agência" />
                <button onClick={props.changeTheme}>
                    <img src={ buttonIcon } alt="Icone" />
                </button>
            </div>
        </header>
    )
}