import { Header } from "../../components/Header/"
import { Banner } from "../../components/Banner/"
import { WorkExperienceSection } from "../../components/WorkExperience"
import { Footer } from "../../components/Footer"
import { useCallback, useState } from "react"

const LandingPage = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    return (
        <div className="LandingPage">
            <Header />
            <Banner />
            <WorkExperienceSection />
            <Footer />
        </div>
    )
}

export default LandingPage