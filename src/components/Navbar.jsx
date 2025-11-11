import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const user = null;
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

        {user && (
          <>
            <NavLink to="/add-artwork">Add Artwork</NavLink>
            <NavLink to="/my-gallery">My Gallery</NavLink>
          </>
        )}

        {!user ? (
          <>
            <Link
              className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:opacity-90 transition cursor-pointer btn "
              to="/login">
              Login
            </Link>
            <Link
              className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:opacity-90 transition cursor-pointer btn "
              to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <img src={user.photoURL} alt="" className="w-16 h-16" />

            <button className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:opacity-90 transition cursor-pointer btn ">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
