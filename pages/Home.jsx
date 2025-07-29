import React from 'react'
import Header from '../src/components/Header'
import About from '../src/components/About'
import Experiences from '../src/components/Experiences'
import Education from '../src/components/Education'
import Navbar from '../src/components/Navbar'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Project'

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Experiences />
      <Education />
      <Skills />
      <Projects/>
      <Navbar />

    </div>
  )
}

export default Home

