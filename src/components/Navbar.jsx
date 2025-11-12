import { use, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
    const [showCard, setShowCard] = useState(false);
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-pink-400">
        🎨 Artify
      </Link>

      <div className="flex justify-center items-center gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/addart">Add Artwork</NavLink>

        <NavLink to="/mygallery">My Gallery</NavLink>
        <NavLink to="/myfavourite">My Favourite</NavLink>

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
          <div className="relative inline-block">

      <img
        src={user.photoURL}
        alt="User"
        onMouseEnter={() => setShowCard(true)}  
        onClick={() => setShowCard(false)}       
        className="w-10 h-10 rounded-full cursor-pointer border-2 border-fuchsia-500 transition-transform hover:scale-105"
      />

  
      {showCard && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 animate-fadeIn z-50"
        >
          <p className="text-gray-800 dark:text-gray-100 font-semibold text-center mb-2">
            {user.displayName || "Anonymous User"}
          </p>
          <button
            onClick={signOutUser}
            className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
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
