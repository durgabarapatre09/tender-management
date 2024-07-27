// src/pages/AdminDashboardPage.tsx
import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import Header from "../components/Header";

const AdminDashboardPage: React.FC = () => (
  <div className="p-4">
    <Header />
    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
    <AdminDashboard />
  </div>
);

export default AdminDashboardPage;
