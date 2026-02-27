import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, ArrowRight } from 'lucide-react';
import './Login.css';

const Login = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="login-overlay glass"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="login-modal glass-card"
                >
                    <button className="close-btn" onClick={onClose}><X /></button>

                    <div className="login-header">
                        <h2>Welcome Back</h2>
                        <p>Login to manage your bookings and profile.</p>
                    </div>

                    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <label><Mail size={16} /> Email</label>
                            <input type="email" placeholder="email@example.com" />
                        </div>

                        <div className="input-group">
                            <label><Lock size={16} /> Password</label>
                            <input type="password" placeholder="••••••••" />
                        </div>

                        <div className="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="submit" className="login-submit">
                            <span>Login</span>
                            <ArrowRight size={18} />
                        </button>

                        <div className="register-prompt">
                            Don't have an account? <a href="#">Sign up</a>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Login;
