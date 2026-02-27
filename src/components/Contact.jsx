import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="section-header text-center"
            >
                <h1>Get in Touch</h1>
                <p>We're here to help you with your journey. Reach out anytime.</p>
            </motion.div>

            <div className="contact-wrapper">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="contact-info"
                >
                    <div className="info-item glass-card">
                        <Mail className="info-icon" />
                        <div>
                            <h3>Email Us</h3>
                            <p>support@routelk.com</p>
                        </div>
                    </div>

                    <div className="info-item glass-card">
                        <Phone className="info-icon" />
                        <div>
                            <h3>Call Us</h3>
                            <p>+94 11 234 5678</p>
                        </div>
                    </div>

                    <div className="info-item glass-card">
                        <MapPin className="info-icon" />
                        <div>
                            <h3>Head Office</h3>
                            <p>123 High-Level Rd, Colombo 07, Sri Lanka</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="contact-form-container glass-card"
                >
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group grid-2">
                            <div className="input-field">
                                <label>Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="input-field">
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="input-field">
                            <label>Subject</label>
                            <select>
                                <option>Booking Inquiry</option>
                                <option>Refund Request</option>
                                <option>Feedback</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="input-field">
                            <label>Message</label>
                            <textarea rows="5" placeholder="How can we help?"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
