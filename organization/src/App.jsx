import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'


function App() {


  return (
    <BrowserRouter>
      <main>
          <Nav />
      </main>
    </BrowserRouter>
  )
}

export default App
