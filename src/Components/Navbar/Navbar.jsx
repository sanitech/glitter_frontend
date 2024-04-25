import React from "react";
import logo from "../../assets/images/logo/logoLight.png";
import logoDark from "../../assets/images/logo/logoDark.png";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";
function Navbar({ isDarkMode }) {
  let { pathname } = useLocation();
  let subMenu = pathname.split("/")?.[1];
  console.log(subMenu);
  const navLinksActive = (type = null) => {
    subMenu === "" && (subMenu = "home");
    return type === subMenu
      ? "flex items-center font-medium text-orange-500 hover:text-orange-500 md:py-6 text-lg"
      : "flex items-center font-medium text-gray-100 hover:text-orange-500 text-lg md:py-6";
  };

  const menuToggle = () => {
    let menu = document.getElementById("navbar-collapse-with-animation");
    menu.classList.toggle("hidden");
  }

  return (
    <div>
      <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50  w-full text-sm">
        <nav
          class="mt-6 relative max-w-[85rem] w-full backdrop-blur-lg bg-orange-50/5  z-20 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto "
          aria-label="Global"
        >
          <div class="flex items-center justify-between">
            <Link
              class="flex items-center text-xl font-semibold dark:text-white"
              className={navLinksActive("home")}
              to="/"
              aria-label="Brand"
            >
              <img
                className="w-12"
                src={ logo}
                alt="glitter logo"
              />
              <div
                className={`logo-text ${
                  isDarkMode ? "text-gray-100" : "text-gray-100"
                }`}
              >
                Glitter promotion
              </div>
            </Link>
            <div class="md:hidden" id="" onClick={menuToggle}>
              <button
                type="button"
                class="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            class="hs-collapse hidden  overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7 dark:text-gray-400">
              <Link className={navLinksActive("home")} to="/" aria-current="page" onClick={menuToggle}>
                Home
              </Link>
              <Link className={navLinksActive("aboutUs")} to="/aboutUs" onClick={menuToggle}>
                About us
              </Link>
              <Link className={navLinksActive("events")} to="/events" onClick={menuToggle}>
                Events
              </Link>
              <Link className={navLinksActive("blog")} to="/blog" onClick={menuToggle}>
                Blog
              </Link>
              <Link to="/organizer" className={navLinksActive("organizer")} onClick={menuToggle}>
                Organizer
              </Link>
              <Link to="/products" className={navLinksActive("products")} onClick={menuToggle}>
                Product
              </Link>

            
              <Link
                to="/contact"
                class="group inline-flex w-fit items-center gap-x-2  py-2 px-3 bg-orange-500 font-medium text-lg text-neutral-800 rounded-full focus:outline-none"
                onClick={menuToggle}
              >
                Contact us
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
