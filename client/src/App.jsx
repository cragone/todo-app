import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ButtonAppBar from './ButtonAppBar'; // Import the ButtonAppBar component
import Home from './pages/Home';
import PaymentPage from './pages/PaymentPage';
import SubmitProblemPage from './pages/SubmitProblemPage';
import OpenRentalsPage from './pages/OpenRentalsPage';
import OldPaymentsPage from './pages/OldPaymentsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <ButtonAppBar /> {/* Include the ButtonAppBar component */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/submit-problem" element={<SubmitProblemPage />} />
        <Route path="/open-rentals" element={<OpenRentalsPage />} />
        <Route path="/old-payments" element={<OldPaymentsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Add more routes for other pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;
