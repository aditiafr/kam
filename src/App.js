import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import "./index.css";
import Product from "./pages/product";
import { Route, Routes } from 'react-router-dom'
import Gallery from "./pages/gallery";
import About from "./pages/about";
import ContactUs from "./pages/contact-us";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Set loading to true whenever location changes
    // Simulate an asynchronous operation, e.g., fetching data
    setTimeout(() => {
      setLoading(false); // Set loading to false after the operation is done
    }, 1500); // Adjust the timeout as needed
  }, [location]); // Trigger effect on location change

  return (
    <>
      <Navbar />
      <main className="mt-20">
        {loading ? (
          // Display loading screen here
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
