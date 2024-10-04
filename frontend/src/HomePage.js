// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import CSS for styling

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="header">
                <nav className="nav">
                    <h1 className="logo">Integrated Dashboard</h1>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/analysis">Analysis</Link>
                        <Link to="/recommendations">Recommendations</Link>
                        <Link to="/settings">Settings</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/support">Support</Link>
                    </div>
                </nav>
            </header>

            <section className="hero-section">
                <div className="hero-text">
                    <h2>Empower Your Business Decisions</h2>
                    <p>Analyze customer data, forecast sales, and optimize your strategies to drive business growth.</p>
                    <Link to="/dashboard" className="cta-button">Explore Dashboard</Link>
                </div>
                {/* <div className="hero-image">
                    <img src="https://image-0.uhdpaper.com/wallpaper/sports-car-mountains-retrowave-synthwave-hd-wallpaper-uhdpaper.com-233@0@k.jpg" />
                </div> */}
            </section>

            <section className="overview">
                <h2>Key Metrics Overview</h2>
                <div className="metrics">
                    <div className="metric-card glass">
                        <h3>Total Sales</h3>
                        <p>50,000</p>
                    </div>
                    <div className="metric-card glass">
                        <h3>Churn Rate</h3>
                        <p>15%</p>
                    </div>
                    <div className="metric-card glass">
                        <h3>Average CLV</h3>
                        <p>500</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
