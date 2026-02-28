import React from 'react';

const galleryImages = [
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://i.ibb.co/whQTyXD4/712vo-SOZU6-L-AC-UF894-1000-QL80.jpg",
    "https://i.ibb.co/whQTyXD4/712vo-SOZU6-L-AC-UF894-1000-QL80.jpg",
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-title">
                    <h2>Our Gallery</h2>
                    <p>Take a glimpse into our world of beauty, precision, and elegance.</p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={src} alt={`Salon Work ${index + 1}`} />
                            <div className="gallery-overlay">
                                <span>View Full</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
