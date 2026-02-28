import React from 'react';
import '../styles/Services.css';

const servicesData = [
    {
        title: 'Hair Styling',
        description: 'Precision cuts, vibrant coloring, and modern styling matching your unique personality.',
        price: 'From $50',
        icon: '✂️'
    },
    {
        title: 'Spa & Massage',
        description: 'Relaxing massages and body treatments to rejuvenate your mind and soul.',
        price: 'From $80',
        icon: '💆‍♀️'
    },
    {
        title: 'Nail Care',
        description: 'Luxury manicures and pedicures with a wide range of elegant designs.',
        price: 'From $35',
        icon: '💅'
    },
    {
        title: 'Facial Treatments',
        description: 'Customized facials to cleanse, exfoliate, and hydrate your skin deeply.',
        price: 'From $65',
        icon: '✨'
    },
    {
        title: 'Bridal Makeup',
        description: 'Flawless makeup and hair preparation for your special unforgettable day.',
        price: 'From $150',
        icon: '💄'
    },
    {
        title: 'Waxing',
        description: 'Smooth and long-lasting hair removal services using premium waxing products.',
        price: 'From $25',
        icon: '🌸'
    }
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>Indulge in our exquisite range of beauty and wellness treatments designed to bring out your best self.</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <span className="service-price">{service.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
