import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Insights from './components/Insights';
import Hook from './components/Hook';
import Legacy from './components/Legacy';

function App() {
  return (
    <div className="min-h-screen bg-cinematic-900 text-cream-100 selection:bg-gold-500 selection:text-cinematic-900">
      <Navbar />
      <main>
        <Hero />
        <Insights />
        <Services />
        <Hook />
        <Team />
        <Contact />
        <Legacy />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;