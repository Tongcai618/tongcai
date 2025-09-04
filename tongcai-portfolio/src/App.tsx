import './App.css'
import About from './components/sections/About'
import Experience from './components/sections/Experiences'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Intro from './components/sections/Intro'
import Nav from './components/layout/Nav'
import Contact from './components/sections/Contect'

function App() {
  return (
    <>
      <main style={styles.main}>
        <Nav />
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

const styles = {
  main: {
    maxWidth: "3000px",
    margin: "0 auto",
    padding: "0 20px",
  },
};


export default App
