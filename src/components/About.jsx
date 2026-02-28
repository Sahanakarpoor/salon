import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Interior of Elegance Beauty Salon"
                    />
                </div>
                <div className="about-content">
                    <h2>About Elegance</h2>
                    <p className="subtitle">Where precision meets art.</p>
                    <p>
                        Founded in 2010, Elegance Beauty Salon has been dedicated to providing
                        top-tier beauty services in a relaxing and luxurious environment. Our
                        team of experienced professionals is passionate about enhancing your
                        natural beauty and ensuring you leave feeling confident and refreshed.
                    </p>
                    <p>
                        From modern hair styling to revitalizing spa treatments, we use only
                        the finest products and techniques tailored to your individual needs.
                    </p>
                    <div className="about-features">
                        <div className="feature">
                            <h4>10+</h4>
                            <span>Years Experience</span>
                        </div>
                        <div className="feature">
                            <h4>5k+</h4>
                            <span>Happy Clients</span>
                        </div>
                        <div className="feature">
                            <h4>15+</h4>
                            <span>Expert Stylists</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
