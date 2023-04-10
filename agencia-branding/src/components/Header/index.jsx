import "./style.css"

export const Header = () => {
    return (
        <header className="background-light-mode">
            <div className="limitador-largura">
                <img src="/assets/logo.png" alt="Logo da agência" />
                <button className="background-light-mode">
                    <img src="/assets/moon.png" alt="Lua" />
                </button>
            </div>
        </header>
    )
}