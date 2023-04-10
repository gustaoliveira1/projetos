import "./style.css"

export const Banner = (props)  => {
    const theme = props.theme ? "banner-dark-mode" : "banner-light-theme"

    return (
        <section id="banner" className={ theme }>
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