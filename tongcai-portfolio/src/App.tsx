import './App.css'
import About from './components/sections/About'
import Experience from './components/sections/Experiences'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Intro from './components/sections/Intro'
import Nav from './components/layout/Nav'

function App() {

  return (
    <>
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </>
  )
}

export default App
