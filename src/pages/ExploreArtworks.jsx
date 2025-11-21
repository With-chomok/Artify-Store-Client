import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ExploreArtworks = () => {
  const [searchText, setSearchText] = useState("");

  const artworks = useLoaderData();

  // Filter search
  const filtered = artworks.filter((item) => {
    const title = item.title?.toLowerCase() || "";
    const artist = item.artist?.toLowerCase() || "";
    const query = searchText.toLowerCase();

    return title.includes(query) || artist.includes(query);
  });

  return (
    <div className="min-h-screen px-6 py-10 my-20  text-white">
      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-15">
        <input
          name="search"
          type="text"
          placeholder="Search by title..."
          className="bg-[#15094b] w-full p-3 rounded-xl text-white"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((art) => (
          <div
            key={art._id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-xl overflow-hidden hover:scale-105 transition duration-700">
            <img
              src={art.image}
              alt={art.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">{art.title}</h2>
              <p className="text-sm mt-1 opacity-80">Artist: {art.name}</p>
              <p className="text-sm opacity-80">Category: {art.category}</p>

              {/* Likes */}
              <p className="mt-2">👍 {art.likes} likes</p>

              {/* View Details  */}
              <Link to={`/artworks/${art._id}`}>
                <button className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:opacity-90 mt-2 transition">
                  View Details →
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
