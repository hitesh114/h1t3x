import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import { portfolioData } from "./data/portfolioData";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Navigation data={portfolioData.navigation} />
      <Particles />
      <Hero data={portfolioData} />
      <About data={portfolioData.personal} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Skills data={portfolioData.skills} />
      <Certifications data={portfolioData.certifications} />
      <Contact data={portfolioData.contact} />
      <Footer data={portfolioData.footer} />
    </div>
  );
}

export default App;
