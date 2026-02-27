import React from 'react';
import { Menu, User, Phone, MapPin } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activePage, onPageChange }) => {
  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="logo-brand" onClick={() => onPageChange('home')} style={{ cursor: 'pointer' }}>
          <div className="logo-icon glass">
            <MapPin size={24} color="var(--primary)" />
          </div>
          <span className="brand-name">Route<span>LK</span></span>
        </div>

        <div className="nav-links">
          <a
            href="#home"
            className={activePage === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('home'); }}
          >Home</a>
          <a
            href="#buses"
            className={activePage === 'buses' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('buses'); }}
          >Buses</a>
          <a
            href="#about"
            className={activePage === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('about'); }}
          >About</a>
          <a
            href="#contact"
            className={activePage === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('contact'); }}
          >Contact</a>
        </div>

        <div className="nav-actions">
          <button className="support-btn" onClick={() => onPageChange('contact')}>
            <Phone size={18} />
            <span>Support</span>
          </button>
          <button className="login-btn glass" onClick={() => onPageChange('login')}>
            <User size={18} />
            <span>Login</span>
          </button>
          <button className="menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
