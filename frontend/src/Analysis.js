import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import './Analysis.css';

const Analysis = () => {
    // Dummy data for detailed analysis
    const churnOverTimeData = [
        { month: 'Jan', churned: 50, retained: 1450 },
        { month: 'Feb', churned: 40, retained: 1460 },
        { month: 'Mar', churned: 60, retained: 1440 },
        { month: 'Apr', churned: 30, retained: 1470 },
    ];

    const clvData = [
        { month: 'Jan', clv: 420 },
        { month: 'Feb', clv: 450 },
        { month: 'Mar', clv: 460 },
        { month: 'Apr', clv: 470 },
        { month: 'May', clv: 480 },
    ];

    const churnPieData = [
        { name: 'Churned', value: 30 },
        { name: 'Retained', value: 70 },
    ];

    return (
        <div className="analysis-container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/analysis">Analysis</Link>
                <Link to="/recommendations">Recommendations</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/support">Support</Link>
            </nav>

            <h1>Business Insights & Analysis</h1>

            {/* Churn Over Time */}
            <div className="chart-container">
                <h3>Churn Over Time</h3>
                <LineChart width={600} height={300} data={churnOverTimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="churned" stroke="#FF8042" />
                    <Line type="monotone" dataKey="retained" stroke="#00C49F" />
                </LineChart>
                <p className="insights">
                    Insight: Churn peaked in March with 60 customers leaving, while the lowest churn occurred in April with only 30 churned customers. Retained customers remained consistent around 1450.
                </p>
            </div>

            {/* Customer Lifetime Value Analysis */}
            <div className="chart-container">
                <h3>Customer Lifetime Value (CLV) Analysis</h3>
                <LineChart width={600} height={300} data={clvData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="clv" stroke="#8884d8" />
                </LineChart>
                <p className="insights">
                    Insight: CLV is steadily increasing, starting at $420 in January and reaching $480 in May, indicating improving customer retention and revenue.
                </p>
            </div>

            {/* Churn Distribution */}
            <div className="chart-container">
                <h3>Churn Distribution</h3>
                <PieChart width={400} height={300}>
                    <Pie data={churnPieData} dataKey="value" outerRadius={100} fill="#82ca9d" label>
                        {churnPieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#FF8042' : '#00C49F'} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <p className="insights">
                    Insight: 30% of customers have churned, while 70% have been retained. There's room to improve retention and reduce churn.
                </p>
            </div>
        </div>
    );
};

export default Analysis;
