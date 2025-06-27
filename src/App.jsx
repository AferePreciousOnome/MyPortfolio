import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
