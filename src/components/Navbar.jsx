import { use, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import '../../src/App.css'
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [showCard, setShowCard] = useState(false);
  return (
    <nav className="bg-gray-900 text-white md:px-6 pr-2  py-2  flex justify-between items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul id="nav"
            tabIndex="-1"
            className="menu bg-pink-800 menu-sm dropdown-content  rounded-box z-1 mt-2 w-52 p-2 shadow">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/addart">Add Artwork</NavLink>
            <NavLink to="/mygallery">My Gallery</NavLink>
            <NavLink to="/myfavourite">My Favourite</NavLink>
          </ul>
        </div>
        <Link to="/" className="md:text-2xl text-xl font-bold text-pink-400">
          🎨 Artify
        </Link>
      </div>

      <div className="flex justify-center items-center gap-3 ">
        <div className="hidden navbar-center md:block mr-4 space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/addart">Add Artwork</NavLink>

          <NavLink to="/mygallery">My Gallery</NavLink>
          <NavLink to="/myfavourite">My Favourite</NavLink>
        </div>

        {!user ? (
          <>
            <Link
              className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:opacity-90 transition cursor-pointer btn"
              to="/login">
              Login
            </Link>
            <Link
              className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:opacity-90 transition cursor-pointer btn"
              to="/register">
              Register
            </Link>
          </>
        ) : (
          <div className="relative ">
            <img
              src={user.photoURL}
              alt="User"
              onMouseEnter={() => setShowCard(true)}
              onClick={() => setShowCard((prev) => !prev)}
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-fuchsia-500 transition-transform hover:scale-105"
            />

            {showCard && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 z-50 block">
                <p className="text-gray-800 dark:text-gray-100 font-semibold text-center mb-2">
                  {user.displayName || "Anonymous User"}
                </p>
                <button
                  onClick={signOutUser}
                  className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
