import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="section-header text-center"
            >
                <h1>Our Journey</h1>
                <p>Redefining highway travel in Sri Lanka since 2026.</p>
            </motion.div>

            <div className="about-grid">
                <motion.div
                    whileHover={{ y: -10 }}
                    className="about-card glass-card"
                >
                    <div className="icon-wrapper"><Shield size={32} /></div>
                    <h3>Safety First</h3>
                    <p>Every bus in our network undergoes rigorous daily safety inspections.</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -10 }}
                    className="about-card glass-card"
                >
                    <div className="icon-wrapper"><Clock size={32} /></div>
                    <h3>Punctuality</h3>
                    <p>We pride ourselves on our 99% on-time departure and arrival rate.</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -10 }}
                    className="about-card glass-card"
                >
                    <div className="icon-wrapper"><Award size={32} /></div>
                    <h3>Premium Service</h3>
                    <p>Experience luxury with our fleet of high-end AC buses and professional crew.</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -10 }}
                    className="about-card glass-card"
                >
                    <div className="icon-wrapper"><Users size={32} /></div>
                    <h3>Community</h3>
                    <p>Serving over 10,000 travelers monthly across the island.</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="about-content glass-card"
            >
                <h2>The RouteLK Vision</h2>
                <p>RouteLK was founded with a single mission: to make highway travel as seamless and comfortable as possible. We noticed that booking seats for long-distance travel often lacked the transparency and ease that modern travelers expect. By introducing our cinema-style seat booking system, we've empowered passengers to choose their exact comfort level, ensuring a stress-free journey every time.</p>
            </motion.div>
        </div>
    );
};

export default About;
