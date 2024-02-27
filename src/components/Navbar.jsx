import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const closeNavbar = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation().pathname]);

  return (
    <header className="fixed left-0 top-0 z-20 flex w-full items-center bg-[#1CA449]">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to="/" className="block w-full py-5">
              <img src="/images/navbar/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="flex w-full items-center justify-end px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-white focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`z-10 bg-[#1CA449] absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"}`}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/" onClick={closeNavbar}>
                    Home
                  </ListItem>
                  <ListItem NavLink="/product" onClick={closeNavbar}>
                    Product
                  </ListItem>
                  <ListItem NavLink="/gallery" onClick={closeNavbar}>
                    Gallery
                  </ListItem>
                  <ListItem NavLink="/about" onClick={closeNavbar}>
                    About
                  </ListItem>
                </ul>
                <div className="lg:hidden flex items-center justify-center w-full mt-2">
                  <Link
                    to="/contact-us"
                    className="rounded-lg px-7 py-2 font-bold border text-white hover:bg-white hover:text-[#1CA449]"
                    onClick={closeNavbar}
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                to="/contact-us"
                className="rounded-lg px-7 py-2 font-bold border text-white  hover:bg-white hover:text-[#1CA449]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink, onClick }) => {

  
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? 'flex py-2 text-base text-[#1CA449] lg:font-normal lg:px-6 px-4 bg-white rounded-lg lg:mx-2 lg:inline-flex' : 'flex py-2 text-base font-medium text-white hover:text-[#1CA449] lg:hover:font-normal hover:font-bold lg:px-6 px-4 hover:bg-white hover:rounded-lg lg:mx-2 lg:inline-flex';
  };

  return (
    <li>
      <Link
        to={NavLink}
        onClick={onClick}
        className={`${isActive(NavLink)}`}
      >
        {children}
      </Link>
    </li>
  );
};
