import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Typewriter } from "react-simple-typewriter";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  // Load favorites when page open
  useEffect(() => {
    fetch(`http://localhost:5000/favorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [user.email]);

  // Remove favorite item
  const handleUnfavorite = (id) => {
    fetch(`http://localhost:5000/favorites/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setFavorites(favorites.filter((item) => item._id !== id));
      });
  };

  return (
    <div className="min-h-screen px-4 md:px-5 lg:px-20 py-16 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
         <Typewriter
                  words={[
                    "My Favorite Artworks.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
      </h1>

      <div
        className="grid grid-cols-2  md:grid-cols-3 gap-6 md:gap-10">
        {favorites.map((item) => (
          <div
            key={item._id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl 
              shadow-xl transition duration-700 hover:scale-105">
            <img
              src={item.image}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-3">{item.title}</h2>
            <p className="opacity-80 text-sm">Artist: {item.artist}</p>

            <button
              onClick={() => handleUnfavorite(item._id)}
              className="w-full bg-gradient-to-r 
                from-red-900 via-red-500 to-purple-600 
                text-white font-semibold px-4 py-2 rounded-full 
                shadow-md hover:opacity-90 transition mt-4">
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>

      {/* If no items */}
      {favorites.length === 0 && (
        <p className="text-center text-gray-300 mt-10 text-lg">
          You have no favorite artworks yet...
        </p>
      )}
    </div>
  );
};

export default Favorites;
