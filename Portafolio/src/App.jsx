import React from "react"
import AboutMe from "./Components/AboutMe"
import Follow from "./Components/Follow"
import { Header } from "./Components/Header"
import Resume from "./Components/Resume"


function App() {


  return (
    <>
    <Follow/>
    <div className="header">
      <Header/>
    </div>
    <div className="Aboutme">
      <AboutMe/>
    </div>
    <div className="Resume">
      <Resume/>
    </div>

    </>
  )
}

export default App
