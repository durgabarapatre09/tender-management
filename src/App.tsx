import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDashboardPage from "./pages/UserDashboardPage";
import TenderDetailsPage from "./pages/TenderDetailsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
// import { PrimeReactProvider } from "primereact/api";

const App: React.FC = () => (
  <AuthProvider>
    <Router>
      {/* <PrimeReactProvider value={{ unstyled: true }}> */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/user-dashboard"
          element={
            <Layout>
              <UserDashboardPage />
            </Layout>
          }
        />
        <Route
          path="/tender/:tenderId"
          element={
            <Layout>
              <TenderDetailsPage />
            </Layout>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <Layout>
              <AdminDashboardPage />
            </Layout>
          }
        />
      </Routes>
      {/* </PrimeReactProvider> */}
    </Router>
  </AuthProvider>
);

export default App;
