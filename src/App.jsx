import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Work } from './sections/Work';
import { About } from './sections/About';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
