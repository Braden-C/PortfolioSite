import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import "../src/App.css";

function App() {
  return (
    <div className="app">
      <div>
        <NavBar />
        <Hero />
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
}

export default App;
