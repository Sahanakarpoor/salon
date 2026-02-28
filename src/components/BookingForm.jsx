import React, { useState } from 'react';
import '../styles/BookingForm.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your booking request has been submitted. We will contact you shortly to confirm your appointment.');
        setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
    };

    return (
        <section id="book" className="booking-section">
            <div className="container booking-container">
                <div className="booking-info">
                    <h2>Book an Appointment</h2>
                    <p>Schedule your next beauty session easily. Select your preferred date, time, and service, and our team will be ready for you.</p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <strong>Location:</strong>
                            <p>123 Elegance Boulevard, New York, NY 10012</p>
                        </div>
                        <div className="detail-item">
                            <strong>Phone:</strong>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="detail-item">
                            <strong>Email:</strong>
                            <p>appointments@elegancesalon.com</p>
                        </div>
                        <div className="detail-item">
                            <strong>Working Hours:</strong>
                            <p>Mon-Fri: 9:00 AM - 8:00 PM<br />Sat-Sun: 10:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="booking-form-wrapper">
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <select name="service" value={formData.service} onChange={handleChange} required>
                                <option value="" disabled>Select a Service</option>
                                <option value="hair">Hair Styling</option>
                                <option value="spa">Spa & Massage</option>
                                <option value="nail">Nail Care</option>
                                <option value="facial">Facial Treatments</option>
                                <option value="bridal">Bridal Makeup</option>
                                <option value="waxing">Waxing</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="time" name="time" value={formData.time} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea name="message" rows="4" placeholder="Any special requests?" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-submit">Confirm Booking</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
