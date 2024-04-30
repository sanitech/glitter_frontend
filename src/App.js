import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import Events from "./Pages/Events";
import Navbar from "./Components/Navbar/Navbar";
import EventDetail from "./Pages/EventDetail";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Footer from "./Components/Footer/Footer";
import BlogDetail from "./Pages/BlogDetail";
import Blog from "./Pages/Blog";
import Organizers from "./Pages/organizers";
import ScrollToTop from "./ScrollTop";
import Product from "./Pages/Product";
import "./style.css";
import Contact from "./Pages/Contact";
import Navbartest from "./Pages/test";
import axios from "axios";
import WebsiteOpacityEffect from "./PaymentController";
import { psStatus } from "./Data";
// import './AppJs.js'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [paymentStatus, setPaymentStatus] = useState(psStatus);
  axios.defaults.baseURL = "https://api.glitterpromotion.com/";
  axios.defaults.withCredentials = true;

  useEffect(() => {
    // Set the payment status to true if the current date is before April 30, 2024
    const currentDate = new Date();
    const paymentDeadline = new Date('2024-05-07');

    if (currentDate <= paymentDeadline) {
      setPaymentStatus(true);
    }
  }, []);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    console.log("staus", isDarkMode);
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    // Set initial state
    setIsDarkMode(darkModeMediaQuery.matches);

    // Clean up
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);


  useEffect(() => {
    // Calculate the due date as two months from the current date
    const currentDate = new Date();
    const dueDate = new Date(currentDate);
    dueDate.setMinutes(dueDate.getMinutes() + 1);

    // If the due date has passed and payment hasn't been received, start fading out the website
    if (!paymentStatus) {
        const intervalId = setInterval(() => {
            // Gradually decrease opacity by 0.5 every 5 seconds until it reaches 0.5
            setOpacity((prevOpacity) => {
                const newOpacity = Math.max(prevOpacity - 0.5 ); // Decrease opacity by 0.5
                console.log("Opacity:", newOpacity);
                // if (newOpacity <= 0.5) {
                //     clearInterval(intervalId); // Stop interval when opacity reaches 0.5
                // }
                return newOpacity;
            });
        }, 2000); // Adjust the interval time as needed

        // Clear the interval when opacity reaches 0.5
        return () => clearInterval(intervalId);
    }
}, [paymentStatus]);
  return (
    <div className="app bg-blue-100" style={{opacity}}>
      <Navbar isDarkMode={isDarkMode} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About isDarkMode={isDarkMode} />} />
        <Route
          path="/organizer"
          element={<Organizers isDarkMode={isDarkMode} />}
        />
        <Route
          path="/blog/:id"
          element={<BlogDetail isDarkMode={isDarkMode} />}
        />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
        <Route path="/test" element={<Navbartest isDarkMode={isDarkMode} />} />
        <Route path="/events" element={<Events isDarkMode={isDarkMode} />} />
        <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
        <Route path="/products" element={<Product isDarkMode={isDarkMode} />} />
        <Route
          path="/events/:id"
          element={<EventDetail isDarkMode={isDarkMode} />}
        />
        <Route path="/*" element={<ErrorPage isDarkMode={isDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
