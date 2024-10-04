import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    // Dummy Data for Dashboard
    const dashboardData = {
        totalSales: 120000,
        totalCustomers: 1500,
        churnRate: 5.2,
        salesForecast: 130000,
        activeUsers: 800,
    };

    const revenueTrendData = [
        { month: 'Jan', revenue: 40000 },
        { month: 'Feb', revenue: 50000 },
        { month: 'Mar', revenue: 60000 },
        { month: 'Apr', revenue: 55000 },
        { month: 'May', revenue: 65000 },
        { month: 'Jun', revenue: 70000 },
    ];

    return (
        <div className="dashboard-container">
            <h1>Business Dashboard</h1>
            <div className="metrics">
                <div className="metric-card">
                    <h3>Total Sales</h3>
                    <p>{dashboardData.totalSales}</p>
                </div>
                <div className="metric-card">
                    <h3>Total Customers</h3>
                    <p>{dashboardData.totalCustomers}</p>
                </div>
                <div className="metric-card">
                    <h3>Churn Rate</h3>
                    <p>{dashboardData.churnRate}%</p>
                </div>
                <div className="metric-card">
                    <h3>Sales Forecast</h3>
                    <p>{dashboardData.salesForecast}</p>
                </div>
                <div className="metric-card">
                    <h3>Active Users</h3>
                    <p>{dashboardData.activeUsers}</p>
                </div>
            </div>

            {/* Revenue Trend Chart */}
            <div className="chart-container">
                <h3>Revenue Trend</h3>
                <LineChart width={600} height={300} data={revenueTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;
