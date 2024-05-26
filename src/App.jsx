import react, { useState } from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'


export default function App() {

  return (
    <main>
      <div className='main'/>

        <div className='app'>
          <Hero />
          <Demo />
        </div>
    </main>
  )
}


