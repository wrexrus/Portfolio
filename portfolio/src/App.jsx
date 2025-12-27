import Navbar from "./components/Navbar"
import Hero from "./components/home/Hero"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Skills from "./components/tech/Skills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div id="about" className="scroll-mt-24">
        <About />
      </div>
      <div id="experience" className="scroll-mt-24">
        <Experience />
      </div>
      <div id="skills" className="scroll-mt-24">
        <Skills />
      </div>
      <div id="projects" className="scroll-mt-24">
        <Projects />
      </div>
      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
    </div>
  )
}

export default App
