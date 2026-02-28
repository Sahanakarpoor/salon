import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={"navbar " + (scrolled ? "scrolled" : "")}>
            <div className="navbar-container">
                <div className="logo">
                    <a href="#home">Elegance<span>.</span></a>
                </div>

                <div className={"menu-toggle " + (menuOpen ? "open" : "")} onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <nav className={"nav-links " + (menuOpen ? "active" : "")}>
                    <ul>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
                        <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
                    </ul>
                    <a href="#book" className="btn btn-book" onClick={() => setMenuOpen(false)}>Book Now</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
