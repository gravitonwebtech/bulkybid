import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import bidlogo from './img/image3.svg'

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
  
    const closeDropdowns = () => {
    
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 40) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Scroll to the top when the route changes
  
      window.scrollTo(0, 0);
    }, [location.pathname]);
  
  




  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled
            ? "bg-white text-black shadow-b-lg px-5 py-2 sm:px-10 sm:py-2 md:px-20 md:py-2"
            : "bg-transparent text-white px-5 py-5  md:px-10 md:py-5 lg:px-20 lg:py-5"
        }`}
      >
      
        <div className="flex justify-between items-center">
          <Link to="/">
            {isScrolled ? (
              <img className="w-30 h-10 cursor-pointer" src={bidlogo} alt="" />
            ) : (
              <img
                className="w-30 h-10 cursor-pointer"
                src={bidlogo} // Replace with the path to your first logo
                alt=""
              />
            )}
          </Link>

          <div className="lg:hidden">
            {/* Hamburger Icon */}

            <button
              className="p-2 focus:outline-none third-dropdown-button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Drawer */}

          {isDrawerOpen && (
            <div className="lg:hidden absolute top-0 right-0 h-screen w-64 bg-[#DDDDDD] text-black p-4 shadow-md">
              <button
                className="text-white p-2 focus:outline-none absolute top-2 right-2"
                onClick={() => setIsDrawerOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className=" hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className=" hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Services
                  </Link>
                </li>
          

               

               

                <li onClick={() => closeDropdowns()}>
                  <Link
                    to="/contact"
                    className="hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="mt-4">
              <Link
                    to="/contact">
                <button
                  className="rounded-[4px] px-5 py-2 font-semibold bg-[#0071B3]"
                
                >
                  Sign In
                </button>
                </Link>
              </div>
            </div>
          )}

          {/* for desktop */}

          <ul className="hidden lg:flex text-md font-medium space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex justify-center text-white ">
          <Link
                    to="/contact">
            <button
              className="rounded-[4px] px-5 py-2 font-semibold bg-[#0071B3]"
             
            >
             Sign In
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar