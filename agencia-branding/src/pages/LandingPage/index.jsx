import { Header } from "../../components/Header/"
import { Banner } from "../../components/Banner/"
import { WorkExperienceSection } from "../../components/WorkExperience"
import { Footer } from "../../components/Footer"
import { useCallback, useState } from "react"

const LandingPage = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <div className="LandingPage">
            <Header changeTheme={ changeTheme } theme={isDarkTheme} />
            <Banner theme={isDarkTheme} />
            <WorkExperienceSection theme={isDarkTheme} />
            <Footer theme={isDarkTheme} />
        </div>
    )
}

export default LandingPage