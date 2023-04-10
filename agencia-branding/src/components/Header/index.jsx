import "./style.css"

export const Header = (props) => {
    return (
        <header className={props.theme}>
            <div className="limitador-largura">
                <img src="/assets/logo.png" alt="Logo da agência" />
                <button>
                    <img src="/assets/sun.png" alt="Sol" />
                </button>
            </div>
        </header>
    )
}