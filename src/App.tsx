import './index.css';
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="scroll-smooth ">
      <Navbar />
      <div className="pt-4">
        
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
