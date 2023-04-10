import { Header } from "../../components/Header/"
import { Banner } from "../../components/Banner/"
import { WorkExperienceSection } from "../../components/WorkExperience"
import { Footer } from "../../components/Footer"
import { useEffect, useState } from "react"

const LandingPage = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    useEffect(() => getSavedThemeAtLocalStorage())

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        saveThemeInLocalStorage()
    }

    const saveThemeInLocalStorage = () => {
        localStorage.setItem("isDarkTheme", JSON.stringify(!isDarkTheme))
    }

    const getSavedThemeAtLocalStorage = () => {
        const theme = JSON.parse(localStorage.getItem("isDarkTheme"))
        setIsDarkTheme(theme)
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