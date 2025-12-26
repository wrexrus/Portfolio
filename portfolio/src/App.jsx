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
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
