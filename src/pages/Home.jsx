import HeroCarousel from '../components/HeroCarousel'
import Stats from '../components/Stats'
import About from '../components/About'
import Philosophy from '../components/Philosophy'
import Services from '../components/Services'
import UploadPDF from '../components/UploadPDF'
import Engagement from '../components/Engagement'
import Team from '../components/Team'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Stats />
      <About />
      <Philosophy />
      <Services />
      <UploadPDF />
      <Engagement />
      <Team />
      <Contact />
    </>
  )
}

export default Home
