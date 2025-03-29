import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App