import { Header } from "../../components/Header/"
import { Banner } from "../../components/Banner/"
import { WorkExperienceSection } from "../../components/WorkExperience"
import { Footer } from "../../components/Footer"

const LandingPage = () => {
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