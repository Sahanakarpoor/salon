import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Reveal Your <br /> <span>True Beauty</span></h1>
                <p>Experience luxury treatments tailored to enhance your natural grace.</p>
                <div className="hero-buttons">
                    <a href="#book" className="btn">Book Appointment</a>
                    <a href="#services" className="btn btn-outline">Our Services</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
