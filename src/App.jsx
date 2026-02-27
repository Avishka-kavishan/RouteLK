import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusCard from './components/BusCard';
import SeatSelection from './components/SeatSelection';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

const STATIONS = [
  'Colombo', 'Makumbura', 'Kottawa', 'Maharagama', 'Kadawatha',
  'Panadura', 'Galle', 'Matara', 'Kandy', 'Kurunegala', 'Jaffna'
];

const MOCK_BUSES = [
  { id: 1, name: 'Superline Express', from: 'Colombo', to: 'Kandy', departure: '06:00 AM', arrival: '09:30 AM', duration: '3h 30m', price: 3500, rating: 4.8, type: 'Luxury AC Sleeper', seatsAvailable: 12 },
  { id: 2, name: 'Highway King', from: 'Colombo', to: 'Matara', departure: '08:30 AM', arrival: '12:00 PM', duration: '3h 30m', price: 2800, rating: 4.5, type: 'Super Luxury AC', seatsAvailable: 24 },
  { id: 3, name: 'Coastal Wave', from: 'Colombo', to: 'Galle', departure: '10:00 AM', arrival: '01:30 PM', duration: '3h 30m', price: 3200, rating: 4.7, type: 'Luxury AC Semi-Sleeper', seatsAvailable: 8 },
  { id: 4, name: 'Expressway Star', from: 'Makumbura', to: 'Matara', departure: '07:00 AM', arrival: '09:00 AM', duration: '2h 00m', price: 2500, rating: 4.6, type: 'Super Luxury AC', seatsAvailable: 15 },
  { id: 5, name: 'Royal Swift', from: 'Kadawatha', to: 'Kandy', departure: '09:00 AM', arrival: '12:00 PM', duration: '3h 00m', price: 2200, rating: 4.4, type: 'Luxury AC', seatsAvailable: 10 },
  { id: 6, name: 'Highway Link', from: 'Kottawa', to: 'Galle', departure: '02:00 PM', arrival: '03:45 PM', duration: '1h 45m', price: 1800, rating: 4.5, type: 'Super Luxury AC', seatsAvailable: 30 },
];

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedBus, setSelectedBus] = useState(null);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({ from: 'Colombo', to: 'Kandy' });

  const handleSearch = (from, to) => {
    setSearchParams({ from, to });
    setActivePage('buses');
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const filteredBuses = MOCK_BUSES.filter(bus =>
    bus.from.toLowerCase() === searchParams.from.toLowerCase() &&
    bus.to.toLowerCase() === searchParams.to.toLowerCase()
  );

  const handleSeatConfirm = (seats) => {
    setSelectedBus(null);
    setIsBookingConfirmed(true);
    setTimeout(() => setIsBookingConfirmed(false), 5000);
  };

  const handlePageChange = (page) => {
    if (page === 'login') {
      setIsLoginOpen(true);
    } else {
      setActivePage(page);
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onSearch={handleSearch} stations={STATIONS} />
            <section className="bus-results" id="buses">
              <div className="section-container">
                <div className="section-header">
                  <h2>Popular Routes</h2>
                  <p>Book your next adventure with the most reliable network.</p>
                </div>
                <div className="bus-list">
                  {MOCK_BUSES.slice(0, 3).map(bus => (
                    <BusCard key={bus.id} bus={bus} onSelect={(b) => setSelectedBus(b)} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'buses':
        return (
          <section className="bus-results" style={{ paddingTop: '120px' }}>
            <div className="section-container">
              <div className="section-header">
                <h2>Buses for {searchParams.from} to {searchParams.to}</h2>
                <p>Showing {filteredBuses.length} results found for your search.</p>
              </div>
              <div className="bus-list">
                {filteredBuses.length > 0 ? (
                  filteredBuses.map((bus, idx) => (
                    <BusCard key={idx} bus={bus} onSelect={(b) => setSelectedBus(b)} />
                  ))
                ) : (
                  <div className="no-results glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1rem' }}>No Buses Found</h3>
                    <p>Sorry, we couldn't find any buses for this route. Please try another search.</p>
                    <button className="book-btn" style={{ width: 'auto', marginTop: '1.5rem' }} onClick={() => setActivePage('home')}>Go Back</button>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app-container bg-gradient-main">
      <Navbar activePage={activePage} onPageChange={handlePageChange} />

      <main>
        {renderPage()}
      </main>

      {selectedBus && (
        <SeatSelection
          bus={selectedBus}
          onClose={() => setSelectedBus(null)}
          onConfirm={handleSeatConfirm}
        />
      )}

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {isBookingConfirmed && (
        <div className="confirmation-toast glass">
          <p>🎉 Booking successful! Your tickets have been sent to your email.</p>
        </div>
      )}

      <Footer onPageChange={handlePageChange} />

      <style jsx>{`
        .bus-results {
          padding: 80px 2rem;
        }
        .section-container {
          max-width: var(--container-width);
          margin: 0 auto;
        }
        .section-header {
          margin-bottom: 3rem;
        }
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .section-header p {
          color: var(--text-muted);
        }
        .bus-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .confirmation-toast {
          position: fixed;
          bottom: 40px;
          right: 40px;
          padding: 1.5rem 2.5rem;
          border-radius: var(--radius-md);
          border-left: 5px solid var(--primary);
          z-index: 3000;
          animation: slideIn 0.5s ease-out;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;
