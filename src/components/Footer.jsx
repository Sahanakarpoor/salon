import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>Elegance<span>.</span></h2>
                        <p>Your premier destination for luxury beauty and wellness treatments. Revealing your true beauty.</p>
                        <div className="social-links">
                            <a href="#">Fb</a>
                            <a href="#">Ig</a>
                            <a href="#">Tw</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#services">Hair Styling</a></li>
                            <li><a href="#services">Spa & Massage</a></li>
                            <li><a href="#services">Nail Care</a></li>
                            <li><a href="#services">Bridal Makeup</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Elegance Beauty Salon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
