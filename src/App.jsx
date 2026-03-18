import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
    useEffect(() => {
        // Reveal animations or other setup
    }, []);

    return (
        <div className="min-h-screen selection:bg-primary-500/30 selection:text-primary-200">
            <Navbar />

            <main>
                <Hero />
                <Experience />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>

            <ScrollToTop />
        </div>
    );
}

export default App;
