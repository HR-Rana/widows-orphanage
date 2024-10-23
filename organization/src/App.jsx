import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import HeroSection from './components/sections/hero'
import AboutSection from './components/sections/about'
import Sponsor from './components/sections/sponsor'
import Gallery from './components/sections/Gallery'
import Mission_Vission from './components/sections/mission'
import Contact from './components/sections/contact'
import Success from './components/sections/Success'


function App() {


  return (
    <BrowserRouter>
          <Nav />
      <main className='section'>
        <header>
          <HeroSection />
        </header>
        <section>
          <AboutSection />
        </section>
        <section>
          <Sponsor />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
            <Success />
        </section>
        <section>
          <Mission_Vission />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App
