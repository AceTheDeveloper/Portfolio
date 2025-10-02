import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import AOS from "aos"
import "aos/dist/aos.css"

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      once: false,      // animations run every time you scroll into view
      mirror: true      // animations also play when scrolling back up
    });

    // refresh on load + component updates
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}
