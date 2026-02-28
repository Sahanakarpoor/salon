import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Gallery />
            <Testimonials />
            <BookingForm />
            <Footer />
        </div>
    );
}

export default App;
