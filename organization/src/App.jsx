import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import HeroSection from './components/sections/hero'


function App() {


  return (
    <BrowserRouter>
      <main>
          <Nav />
          <HeroSection />
      </main>
    </BrowserRouter>
  )
}

export default App
