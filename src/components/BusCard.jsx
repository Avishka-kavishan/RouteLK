import React from 'react';
import { Clock, Star, Wifi, Coffee, Tv } from 'lucide-react';
import './BusCard.css';

const BusCard = ({ bus, onSelect }) => {
    return (
        <div className="bus-card glass-card">
            <div className="bus-info">
                <div className="route-header">
                    <span className="route-from">{bus.from}</span>
                    <span className="route-arrow">→</span>
                    <span className="route-to">{bus.to}</span>
                </div>
                <div className="time-route">
                    <div className="time">
                        <h3>{bus.departure}</h3>
                        <p>Departure</p>
                    </div>
                    <div className="duration">
                        <span>{bus.duration}</span>
                        <div className="line"></div>
                    </div>
                    <div className="time">
                        <h3>{bus.arrival}</h3>
                        <p>Arrival</p>
                    </div>
                </div>

                <div className="bus-details">
                    <div className="bus-name">
                        <h4>{bus.name}</h4>
                        <div className="rating">
                            <Star size={14} fill="currentColor" />
                            <span>{bus.rating}</span>
                        </div>
                    </div>
                    <p className="bus-type">{bus.type}</p>
                    <div className="amenities">
                        <Wifi size={16} title="Wifi" />
                        <Coffee size={16} title="Refreshments" />
                        <Tv size={16} title="Entertainment" />
                    </div>
                </div>
            </div>

            <div className="bus-pricing">
                <div className="price">
                    <span className="currency">LKR</span>
                    <span className="amount">{bus.price}</span>
                </div>
                <button className="book-btn" onClick={() => onSelect(bus)}>
                    Select Seat
                </button>
                <p className="seats-left">{bus.seatsAvailable} seats left</p>
            </div>
        </div>
    );
};

export default BusCard;
