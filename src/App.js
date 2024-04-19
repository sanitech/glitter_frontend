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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  return (
    <div className="app bg-blue-100">
      <Navbar isDarkMode={isDarkMode} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About isDarkMode={isDarkMode} />} />
        <Route path="/organizer" element={<Organizers isDarkMode={isDarkMode} />} />
        <Route
          path="/blog/:id"
          element={<BlogDetail isDarkMode={isDarkMode} />}
        />
        <Route path="/events" element={<Events isDarkMode={isDarkMode} />} />
        <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
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
