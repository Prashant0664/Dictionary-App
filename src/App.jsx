import { useState } from 'react'
import './App.css'
import React from 'react'
import { Navbar, Hero, Footer } from './components'

function App() {
  return (
  <>
    <main>
      <Navbar/>
      <Hero/>
    </main>
    <Footer/>
  </>
  )
}

export default App
