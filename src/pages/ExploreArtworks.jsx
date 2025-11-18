import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExploreArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [searchText, setSearchText] = useState("");

  
  useEffect(() => {
    fetch("http://localhost:5000/artworks")
      .then(res => res.json())
      .then(data => setArtworks(data))
      .catch(err => console.log(err));
  }, []);

  // Filter search
  const filtered = artworks.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()) ||
    item.artist.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen px-6 py-10  text-white">
      
      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by title or artist..."
          className="w-full p-3 rounded-xl text-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((art) => (
          <div
            key={art._id}
            className="bg-[#1a1338] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={art.image}
              alt={art.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">{art.title}</h2>
              <p className="text-sm mt-1 opacity-80">Artist: {art.artist}</p>
              <p className="text-sm opacity-80">Category: {art.category}</p>

              {/* Likes */}
              <p className="mt-2">❤️ {art.likes} likes</p>

              {/* View Details */}
              <Link to={`/artworks/${art._id}`}>
                <button className="mt-4 bg-white text-purple-800 font-bold px-4 py-2 rounded hover:bg-gray-200">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-300 mt-10 text-lg">
          No artworks found...
        </p>
      )}
    </div>
  );
};

export default ExploreArtworks;
