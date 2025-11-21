'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Starsfield from './components/Starsfield'; // full-page stars

export default function Home() {
  return (
   <main className="relative bg-black text-white overflow-x-hidden">
  {/* Starsfield covering entire viewport */}
  <Starsfield />

  {/* All content */}
  <div className="relative z-10">
    <Navbar />
    <section id="hero"><Hero /></section>
    <section id="about"><About /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><ContactForm /></section>
    <Footer />
  </div>
</main>

  );
}
