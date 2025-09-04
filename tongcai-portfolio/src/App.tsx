import './App.css'
import Reveal from './components/animations/Reveal'
import About from './components/sections/About'
import Experience from './components/sections/Experiences'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Intro from './components/sections/Intro'
import Nav from './components/layout/Nav'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <main style={styles.main}>
        <Nav />
        <Reveal kind="fade-up" once={false} delayMs={120}>
          <Intro />
        </Reveal >

        <Reveal kind="fade-up" once={false} delayMs={120}>
          <About />
        </Reveal >

        <Reveal kind="fade-up" once={false} delayMs={120}>
          <Skills />
        </Reveal >

        <Reveal kind="fade-up" once={false} delayMs={120}>
          <Experience />
        </Reveal>

        <Reveal kind="fade-up" once={false} delayMs={120}>
          <Projects />
        </Reveal>

        <Reveal kind="fade-up" once={false} delayMs={120}>
          <Contact />
        </Reveal>
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
