import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = ({ onPageChange }) => {
    return (
        <footer className="footer-premium">
            <div className="footer-overlay"></div>
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-section brand-info">
                        <div className="footer-logo">
                            <span className="logo-icon">🚌</span>
                            <span className="logo-text">Route<span>LK</span></span>
                        </div>
                        <p className="footer-description">
                            Elevating the bus travel experience in Sri Lanka with premium services,
                            real-time booking, and luxury comfort.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('home'); window.scrollTo(0, 0); }}>Home</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('buses'); window.scrollTo(0, 0); }}>Buses</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('about'); window.scrollTo(0, 0); }}>About Us</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('contact'); window.scrollTo(0, 0); }}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <ul className="contact-details">
                            <li><Phone size={18} /> <span>+94 11 234 5678</span></li>
                            <li><Mail size={18} /> <span>support@routelk.com</span></li>
                            <li><MapPin size={18} /> <span>123 Highway Plaza, Colombo 07</span></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-section newsletter">
                        <h3>Newsletter</h3>
                        <p>Subscribe to get updates on new routes and special offers.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Your email address" />
                            <button type="button"><Send size={18} /></button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 RouteLK Highway Services. All rights reserved.</p>
                    <div className="bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cancellations</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
