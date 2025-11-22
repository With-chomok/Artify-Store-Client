import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import CommunityHighlights from "./pages/home/CommunityHighlights";
import TopArtists from "./pages/home/TopArtists";
import Banner from "./pages/home/Banner";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  // const [artworks, setArtworks] = useState([]);
  //  Fetch 6 most recent artworks from MongoDB
  const artworks = useLoaderData();

  return (
    <div className=" text-gray-800 m-2 md:m-10 space-y-20 ">
      {/* ======== Banner / Slider ========= */}
      <Banner></Banner>



      {/* ======== Featured Artworks ========== */}
      <section className="md:py-16  md:px-4">
        <h2 className="md:text-4xl text-3xl mb-10 text-white font-bold text-center">
        <Typewriter
                  words={[
                    "Featured Artworks.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
        </h2>
        {artworks.length === 0 ?  (
          <p className="text-center text-xl text-white">Please Add Your Artworks. <br /> <Link to='/addart' className="underline font-semibold text-red-400">Click Here</Link>.</p>
        
        
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {artworks.map((art) => (
              <motion.div
                key={art._id}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-xl transition-all duration-700 hover:scale-105"
                whileHover={{ scale: 1.02 }}>
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-white text-2xl">{art.title}</h3>
                  <h4 className="font-semibold  text-white text-lg">{art.name}</h4>
                  <p className="text-sm text-white">
                    by <span className="font-medium ">{art.artist}</span>
                  </p>
                  <p className="text-xs text-white mb-4 mt-1">{art.category}</p>
                  <Link
                    to={`/artworks/${art._id}`}
                    className="btn border-none w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:opacity-90 transition">
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>



      {/* ====== Top Artists of the Week ====== */}
      <TopArtists></TopArtists>



      {/* ====== Community Highlights ======= */}



      <CommunityHighlights></CommunityHighlights>



      {/* ====== Call to Action ========= */}
      <section className="bg-gradient-to-r from-blue-100 to-pink-100 text-center py-10 md:py-16 community-background md:mx-5 rounded-2xl">
        <h3 className="text-4xl text-white font-bold mb-10">
          
          <Typewriter
                  words={[
                    "Ready to showcase your creativity?.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
        </h3>
        <Link
          to="/addart"
          className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition">
          Add Artwork
        </Link>
      </section>

    </div>
  );
};

export default Home;
