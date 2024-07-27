import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDashboardPage from './pages/UserDashboardPage';
import TenderDetailsPage from './pages/TenderDetailsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user-dashboard" element={<UserDashboardPage />} />
      <Route path="/tender/:tenderId" element={<TenderDetailsPage />} />
      {/* <Route path="/admin-dashboard" element={<AdminDashboardPage />} /> */}
    </Routes>
  </Router>
);

export default App;
