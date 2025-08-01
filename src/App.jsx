import Navbar from './components/Navbar'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (

    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
    </div>

  )
}

export default App
