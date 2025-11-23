import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";

const ExploreArtworks = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const artworks = useLoaderData();

  // Get all unique categories
  const categories = ["All", ...new Set(artworks.map((a) => a.category))];

  // Filter logic (Search + Category)
  const filtered = artworks.filter((item) => {
    const title = item.title?.toLowerCase() || "";
    const artist = item.name?.toLowerCase() || "";
    const category = item.category;

    const searchMatch =
      title.includes(searchText.toLowerCase()) ||
      artist.includes(searchText.toLowerCase());

    const categoryMatch =
      selectedCategory === "All" || selectedCategory === category;

    return searchMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen px-6 py-10 my-20 text-white">
      <Fade duration={1000} delay={500}>
        <Slide>
      <h1 className="md:text-4xl text-2xl text-white font-bold text-center mb-10">Explore Artworks</h1>

        </Slide>
      </Fade>
      {/* Search Input */}
    <Slide direction="right">
      <div className="max-w-xl mx-auto mb-10">
        <input
          name="search"
          type="text"
          placeholder="Search by title or artist..."
          className="bg-[#15094b] w-full p-3 rounded-xl text-white"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

    </Slide>
      {/* Category Filter */}
      <Fade duration={1000} delay={500}>
        <Slide>
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {categories.map((data) => (
              <button
                key={data}
                onClick={() => setSelectedCategory(data)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition
            ${
              selectedCategory === data
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105"
                : "bg-white/10 border border-white/20 hover:bg-white/20"
            }
          `}>
                {data}
              </button>
            ))}
          </div>
        </Slide>
      </Fade>

      {/* Artwork Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art) => (
      <Fade duration={1000} delay={500}>
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

                {/* View Details */}
                <Link to={`/artworks/${art._id}`}>
                  <button className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:opacity-90 mt-2 transition">
                    View Details →
                  </button>
                </Link>
              </div>
            </div>
          </Fade>
          ))}
        </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-300 mt-10 font-bold text-lg">
          No artworks found...
        </p>
      )}
    </div>
  );
};

export default ExploreArtworks;
