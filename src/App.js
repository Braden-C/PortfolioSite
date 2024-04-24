import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "../src/App.css";

function App() {
  return (
    <div className="app">
      <div>
        <NavBar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
