import React from "react"
import AboutMe from "./Components/AboutMe"
import Follow from "./Components/Follow"
import { Header } from "./Components/Header"
import Projects from "./Components/Projects"
import Resume from "./Components/Resume"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Skills from "./Components/Slick/Skills"











function App() {
  


  return (
    <>
    <Follow/>
    <div className="header">
      
      <Header  />
  
      
    </div>
    <div className="main">
      <AboutMe/>
      <Resume/>
      <Skills/>
      <Projects/>
   
      
      <Contact/>
    </div>  
    <Footer/>
    </>
  )
}

export default App
