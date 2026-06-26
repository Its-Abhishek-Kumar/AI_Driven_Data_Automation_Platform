import React from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureBento from './components/FeatureBento';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* 500ms Orchestrated Initial Loader */}
      <Loader />

      {/* Navigation Header */}
      <Header />

      {/* Main content body */}
      <main>
        {/* Hero Area & Technical Console */}
        <Hero />

        {/* Feature Bento Grid (desktop) / Accordion (mobile) with Resize lock */}
        <FeatureBento />

        {/* Performance-Isolated Pricing Matrix */}
        <Pricing />

        {/* Client Testimonials Wall */}
        <Testimonials />
      </main>

      {/* Navigation Footer */}
      <Footer />
    </div>
  );
}

export default App;
