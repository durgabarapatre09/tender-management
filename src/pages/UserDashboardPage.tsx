// src/pages/UserDashboardPage.tsx
import React from "react";
import UserDashboard from "../components/UserDashboard";

const UserDashboardPage: React.FC = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
    <UserDashboard />
  </div>
);

export default UserDashboardPage;
