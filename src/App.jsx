import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Transactions from './components/Transactions';
import Budget from './components/Budget';
import Report from './components/Reports';
import { WalletProvider } from './context/WalletContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Define the state for the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          {/* Navbar */}
          <nav className="bg-blue-700 text-white shadow-md py-4">
            <div className="container mx-auto px-6 sm:px-20 flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-white">WalletApp</Link>

              {/* Hamburger icon for small screens */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)} // Toggle the menu state
                  className="text-white focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <ul className="hidden lg:flex space-x-8">
                <li>
                  <Link to="/" className="text-lg hover:text-yellow-400 transition">Home</Link>
                </li>
                <li>
                  <Link to="/transactions" className="text-lg hover:text-yellow-400 transition">Transactions</Link>
                </li>
                <li>
                  <Link to="/budget" className="text-lg hover:text-yellow-400 transition">Budget</Link>
                </li>
                <li>
                  <Link to="/report" className="text-lg hover:text-yellow-400 transition">Reports</Link>
                </li>
              </ul>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
              <ul className="space-y-4 px-6 py-4">
                <li>
                  <Link to="/" className="text-lg hover:text-yellow-400 transition">Home</Link>
                </li>
                <li>
                  <Link to="/transactions" className="text-lg hover:text-yellow-400 transition">Transactions</Link>
                </li>
                <li>
                  <Link to="/budget" className="text-lg hover:text-yellow-400 transition">Budget</Link>
                </li>
                <li>
                  <Link to="/report" className="text-lg hover:text-yellow-400 transition">Reports</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Routes for different pages */}
          <div className="container mx-auto p-6 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </div>

          {/* Footer */}
          <footer className="bg-blue-700 text-white py-6">
            <div className="container mx-auto text-center">
              <p className="text-sm">© 2025 WalletApp. All Rights Reserved.</p>
              <div className="space-x-4 mt-2">
                <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-400">Terms & Conditions</a>
                <a href="#" className="hover:text-yellow-400">Contact Us</a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
      <ToastContainer />
    </WalletProvider>
  );
};

// Home Page Component
const Home = () => {
  return (
    <div className="text-center space-y-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to WalletApp!</h1>
      <p className="text-xl text-gray-600">Your all-in-one solution to manage expenses, track transactions, and create budgets.</p>
      <div className="flex justify-center space-x-6">
        <Link to="/transactions" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">Start Tracking Transactions</Link>
        <Link to="/budget" className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition">Set Your Budget</Link>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700">Features</h2>
        <p className="text-lg text-gray-600 mt-2">- Track income and expenses</p>
        <p className="text-lg text-gray-600">- Generate detailed reports</p>
        <p className="text-lg text-gray-600">- Set and monitor budgets</p>
      </div>
    </div>
  );
};

export default App;
