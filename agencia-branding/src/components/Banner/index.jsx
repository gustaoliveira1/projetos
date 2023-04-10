import "./style.css"

export const Banner = (props)  => {
    return (
        <section id="banner" className={props.theme}>
            <div className="img-banner"></div>
            <div className="destaque-banner">
                <div className="container-texto-banner">
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>
                    <h2>Agência de Branding</h2>
                    <span>e design digital</span>
                </div>
            </div>
        </section>
    )
}