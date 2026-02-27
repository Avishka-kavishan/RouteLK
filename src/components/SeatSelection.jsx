import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Check } from 'lucide-react';
import './SeatSelection.css';

const SeatSelection = ({ bus, onClose, onConfirm }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const topRows = [
        [1, 2, 5, 12, 13, 20, 21, 28, 29, 36, 37, 44, 45, 52, 53],
        [null, 3, 6, 11, 14, 19, 22, 27, 30, 35, 38, 43, 46, 51, 54, 55]
    ];
    const bottomRows = [
        [null, 7, 10, 15, 18, 23, 26, 31, 34, 39, 42, 47, 50, 55],
        [4, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 54]
    ];

    const bookedSeats = [5, 12, 19, 24, 30, 47, 51];

    const toggleSeat = (id) => {
        if (id === null || bookedSeats.includes(id)) return;
        if (selectedSeats.includes(id)) {
            setSelectedSeats(selectedSeats.filter(s => s !== id));
        } else {
            setSelectedSeats([...selectedSeats, id]);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="seat-selection-full"
        >
            <header className="header-strip">
                <button className="back-link" onClick={onClose}>
                    <ChevronLeft size={20} />
                    <span>Back to Home</span>
                </button>
            </header>

            <div className="selection-view-container">
                {/* NEW TOP SECTION */}
                <div className="top-info-area">
                    <div className="bus-meta-header">
                        <h1 className="bus-title">{bus.name}</h1>
                        <p className="bus-route-path">Colombo ↔ Kandy • {bus.departure}</p>
                    </div>

                    <div className="status-legend-row">
                        <div className="legend-box"><div className="dot empty"></div> Available</div>
                        <div className="legend-box"><div className="dot selected"></div> Selected</div>
                        <div className="legend-box"><div className="dot booked"></div> Booked</div>
                    </div>
                </div>

                <div className="bus-sketch-section">
                    <div className="bus-silhouette">
                        <div className="bus-head">
                            <div className="steering-icon"></div>
                            <div className="mirror mirror-left"></div>
                            <div className="mirror mirror-right"></div>
                        </div>

                        <div className="bus-body-interior">
                            <div className="seating-area">
                                <div className="seat-group-top">
                                    {topRows.map((row, rIdx) => (
                                        <div key={`row-t-${rIdx}`} className="seat-row-lane">
                                            {row.map((id, idx) => (
                                                <div
                                                    key={`s-t-${rIdx}-${idx}`}
                                                    className={`seat-unit ${id === null ? 'gap' : ''} ${bookedSeats.includes(id) ? 'is-booked' : ''} ${selectedSeats.includes(id) ? 'is-selected' : ''}`}
                                                    onClick={() => toggleSeat(id)}
                                                >
                                                    {id}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                <div className="aisle-path"></div>

                                <div className="seat-group-bottom">
                                    {bottomRows.map((row, rIdx) => (
                                        <div key={`row-b-${rIdx}`} className="seat-row-lane">
                                            {row.map((id, idx) => (
                                                <div
                                                    key={`s-b-${rIdx}-${idx}`}
                                                    className={`seat-unit ${id === null ? 'gap' : ''} ${bookedSeats.includes(id) ? 'is-booked' : ''} ${selectedSeats.includes(id) ? 'is-selected' : ''}`}
                                                    onClick={() => toggleSeat(id)}
                                                >
                                                    {id}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-action-panel">
                    <div className="booking-status-summary">
                        <span>{selectedSeats.length} Seats Selected</span>
                    </div>
                    <button
                        className="conform-booking-btn"
                        onClick={() => onConfirm(selectedSeats)}
                        disabled={selectedSeats.length === 0}
                    >
                        {selectedSeats.length > 0 && <Check size={20} className="mr-2" />}
                        Conform
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default SeatSelection;
