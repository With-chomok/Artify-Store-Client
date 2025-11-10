import { useState } from "react";

// import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { Link, NavLink } from "react-router";

const Navbar = ({ user, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-accent-red transition">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/explore" className="hover:text-accent-red transition">
          Explore Artworks
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-artwork" className="hover:text-accent-red transition">
              Add Artwork
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-gallery" className="hover:text-accent-red transition">
              My Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className="hover:text-accent-red transition">
              My Favorites
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-light-navbar dark:bg-dark-navbar backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-extrabold text-accent-red">
          Artify<span className="text-gray-800 dark:text-gray-200">.</span>
        </Link>

        
        <ul className="hidden md:flex items-center gap-6 font-medium text-light-text-primary dark:text-dark-text-primary">
          {navLinks}
        </ul>

        
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {!user ? (
            <div className="hidden md:flex gap-3">
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl border border-accent-red text-accent-red hover:bg-accent-red hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl bg-accent-red text-white hover:bg-accentHover transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-accent-red cursor-pointer"
              />
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-dark-card shadow-lg rounded-xl p-3 hidden group-hover:block">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {user.displayName}
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 bg-accent-red text-white rounded-lg hover:bg-accentHover transition"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-accent-red focus:outline-none"
          >
            
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 font-medium bg-light-background dark:bg-dark-background text-light-text-primary dark:text-dark-text-primary border-t border-gray-200 dark:border-gray-800">
          {navLinks}
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl border border-accent-red text-accent-red hover:bg-accent-red hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl bg-accent-red text-white hover:bg-accentHover transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-accent-red text-white rounded-xl hover:bg-accentHover transition"
            >
              Logout
            </button>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
