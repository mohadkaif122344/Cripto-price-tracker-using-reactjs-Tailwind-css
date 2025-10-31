import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import { motion } from "framer-motion";
import { FaCoins, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { currency, setCurrency } = useContext(CoinContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCurrency = (e) => {
    const val = e.target.value;
    const symbol = val === "usd" ? "$" : val === "eur" ? "€" : "₹";
    setCurrency({ name: val, symbol });
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 flex items-center bg-gray-800 text-white border-b-4 border-gray-600 shadow-lg px-7">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2 z-20"
      >
        <FaCoins className="text-yellow-300 text-3xl" />
        <h1 className="text-2xl md:text-3xl font-extrabold transition-colors duration-300 hover:text-blue-400">
          <Link to="/">CryptoTracker</Link>
        </h1>
      </motion.div>
      <ul className="hidden md:flex gap-16 text-lg md:text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">
        {["Home", "About", "Contact"].map((link) => (
          <motion.li
            key={link}
            whileHover={{ scale: 1.15, color: "#3B82F6" }}
            className="cursor-pointer transition-all duration-300"
          >
            <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
              {link}
            </Link>
          </motion.li>
        ))}
      </ul>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="ml-auto hidden md:block z-20"
      >
        <select
          value={currency.name}
          onChange={handleCurrency}
          className="bg-gray-700 p-2 rounded text-white border border-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 cursor-pointer"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
      </motion.div>
      <div className="ml-auto md:hidden z-30">
        {!menuOpen && (
          <FaBars
            onClick={() => setMenuOpen(true)}
            className="text-3xl cursor-pointer text-white"
          />
        )}
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center z-20 transition-all duration-300">
          <FaTimes
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl cursor-pointer text-white"
          />
          {["Home", "About", "Contact"].map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="text-2xl font-bold text-white my-4 hover:text-blue-400 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <select
            value={currency.name}
            onChange={handleCurrency}
            className="bg-gray-700 p-3 rounded text-white border border-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 mt-8 cursor-pointer"
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
