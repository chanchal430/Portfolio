import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Loader from './components/Loader';
import About from './components/About';
import Projects from './components/Project';
import Journey from './components/Journey';
import Contact from './components/Contact';

const App = () => {

  const [loading, setLoading] = useState(true);

  return (
    <div className='min-h-screen rounded bg-gray-900 text-white'>

       {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Journey />
          <Contact />
        </>
      )}
    </div>

  )
}

export default App
