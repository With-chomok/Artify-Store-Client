import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CommunityHighlights from "./pages/home/CommunityHighlights";
import TopArtists from "./pages/home/TopArtists";

const Home = () => {
  const [artworks, setArtworks] = useState([]);

  // ✅ Fetch 6 most recent artworks from MongoDB
  useEffect(() => {
    fetch("http://localhost:5000/artworks")
      .then((res) => res.json())
      .then((data) => setArtworks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] text-gray-800">
      {/* ==================== Banner / Slider ==================== */}
      <section className="relative overflow-hidden">
        <div className="carousel w-full h-[500px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/cXpHgJDJ/hq720.jpg"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-3">Discover Masterpieces</h2>
              <p>Explore breathtaking artworks from talented creators.</p>
            </div>
            <a href="#slide3" className="absolute left-5 top-1/2 btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="absolute right-5 top-1/2 btn btn-circle">
              ❯
            </a>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/7xzcdzpx/header-artist.png"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-3">Meet the Artists</h2>
              <p>Learn about the people behind your favorite artworks.</p>
            </div>
            <a href="#slide1" className="absolute left-5 top-1/2 btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="absolute right-5 top-1/2 btn btn-circle">
              ❯
            </a>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-3">Share Your Creativity</h2>
              <p>Upload your art and inspire others around the world.</p>
            </div>
            <a href="#slide2" className="absolute left-5 top-1/2 btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="absolute right-5 top-1/2 btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </section>

      {/* ==================== Featured Artworks ==================== */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Artworks
        </h2>
        {artworks.length === 0 ? (
          <p className="text-center text-gray-500">Loading artworks...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {artworks.map((art) => (
              <motion.div
                key={art._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{art.title}</h3>
                  <p className="text-sm text-gray-600">
                    by <span className="font-medium">{art.artist}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{art.category}</p>
                  <Link
                    to={`/artworks/${art._id}`}
                    className="text-blue-600 mt-3 inline-block hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ==================== Top Artists of the Week ==================== */}
    <TopArtists></TopArtists>

      {/* ==================== Community Highlights ==================== */}
    
            <CommunityHighlights></CommunityHighlights>

      {/* ==================== Call to Action ==================== */}
      <section className="bg-gradient-to-r from-blue-100 to-pink-100 text-center py-16">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to showcase your creativity?
        </h3>
        <Link
          to="/addart"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Add Artwork
        </Link>
      </section>
    </div>
  );
};

export default Home;
