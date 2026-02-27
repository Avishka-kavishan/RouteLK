import React from 'react';
import { Search, MapPin, Calendar, ArrowRightLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ onSearch, stations = [] }) => {
    const [from, setFrom] = React.useState('Colombo');
    const [to, setTo] = React.useState('Kandy');

    const handleSearchClick = () => {
        onSearch(from, to);
    };

    return (
        <section className="hero bg-gradient-main">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-text"
                >
                    <span className="badge glass">Sri Lanka's #1 Highway Service</span>
                    <h1>Explore <span>Sri Lanka</span> <br /> with Comfort</h1>
                    <p>Book your intercity bus seats in seconds. Premium travel across the pearl of the Indian Ocean.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="search-box-container glass-card"
                >
                    <div className="search-tabs">
                        <button className="active">One Way</button>
                        <button>Round Trip</button>
                    </div>

                    <div className="search-form">
                        <div className="input-group">
                            <label><MapPin size={16} /> From</label>
                            <select value={from} onChange={(e) => setFrom(e.target.value)}>
                                {stations.map(station => (
                                    <option key={station} value={station}>{station}</option>
                                ))}
                            </select>
                        </div>

                        <button className="swap-btn glass" onClick={() => {
                            const temp = from;
                            setFrom(to);
                            setTo(temp);
                        }}>
                            <ArrowRightLeft size={18} />
                        </button>

                        <div className="input-group">
                            <label><MapPin size={16} /> To</label>
                            <select value={to} onChange={(e) => setTo(e.target.value)}>
                                {stations.map(station => (
                                    <option key={station} value={station}>{station}</option>
                                ))}
                            </select>
                        </div>

                        <div className="input-group">
                            <label><Calendar size={16} /> Date</label>
                            <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                        </div>

                        <button className="search-button" onClick={handleSearchClick}>
                            <Search size={20} />
                            <span>Search Buses</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="hero-scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mouse"
                ></motion.div>
            </div>
        </section>
    );
};

export default Hero;
