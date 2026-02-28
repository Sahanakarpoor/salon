import React from 'react';

const testimonialsData = [
    {
        name: "Sarah Jenkins",
        text: "The stylists here are absolute magicians! I came in for a completely new look and they exceeded my expectations. The atmosphere is so relaxing.",
        rating: 5,
        role: "Regular Client"
    },
    {
        name: "Emily Chen",
        text: "I booked their bridal package for my wedding, and they made me feel like royalty. My hair and makeup stayed flawless the entire night.",
        rating: 5,
        role: "Bride"
    },
    {
        name: "Jessica Taylor",
        text: "The best facial I've ever had. My skin has literally never glowed this much before. I highly recommend their signature spa treatment.",
        rating: 5,
        role: "First-time Visitor"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="section-title">
                    <h2>Client Reviews</h2>
                    <p>Don't just take our word for it—hear what our beautiful clients have to say.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map((review, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="client-info">
                                <h4>{review.name}</h4>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
