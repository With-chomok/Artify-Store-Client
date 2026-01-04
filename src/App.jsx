import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./pages/home/Banner";
import CommunityHighlights from "./pages/home/CommunityHighlights";
import TopArtists from "./pages/home/TopArtists";
import Categories from "./pages/home/Catagories";
import Testimonials from "./pages/home/Testimonials";
import FAQ from "./pages/home/FAQ";

const Home = () => {
  // const [artworks, setArtworks] = useState([]);
  //  Fetch 6 most recent artworks from MongoDB
  const artworks = useLoaderData();

  return (
    <div className=" text-gray-800 m-2 md:m-10 space-y-25">
      {/* ======== Banner / Slider ========= */}
      <Banner></Banner>

      {/* ======== Featured Artworks ========== */}

      <section className="rounded-2xl">
        <h2 className="md:text-4xl text-2xl mb-10 text-white font-bold text-center">
          <Fade duration={1000} delay={500} direction="right">
            <Slide>
              <h1>Featured Artworks.</h1>
            </Slide>
          </Fade>
        </h2>
        {artworks.length === 0 ? (
          <p className="text-center text-xl text-white">
            Please Add Your Artworks. <br />{" "}
            <Link to="/addart" className="underline font-semibold text-red-400">
              Click Here
            </Link>
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {artworks.map((art) => (
              <Fade key={art._id} duration={1000} delay={500}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-700">
                  {/* Image */}
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-56 object-cover"
                  />

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="font-semibold text-white text-lg">
                      {art.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                      {art.description}
                    </p>

                    {/* Meta Info */}
                    <div className="mt-3 text-xs text-gray-300 space-y-1 mb-2">
                      <p>🎨 Category: {art.category}</p>
                      <p>💰 Price: ${art.price} </p>

                       <p>❤️ Likes: {art.likes}</p>
                    </div>

                    {/* Button (fixed bottom) */}
                    <Link
                      to={`/artworks/${art._id}`}
                      className="mt-auto w-full text-center
                           bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600
                           text-white font-semibold px-4 py-2 rounded-xl shadow-md
                           hover:opacity-90 transition">
                      View Details →
                    </Link>
                  </div>
                </motion.div>
              </Fade>
            ))}
          </div>
        )}
      </section>
      {/* ====== Art Categories ====== */}

      <Categories></Categories>

      {/* ====== Testimonials ====== */}
      <Testimonials></Testimonials>
      {/* ====== Top Artists of the Week ====== */}
      <TopArtists></TopArtists>

      {/* ====== Community Highlights ======= */}

      <CommunityHighlights></CommunityHighlights>
      {/* ====== FAQ Section ====== */}
      <FAQ></FAQ>
      {/* ====== Call to Action ========= */}
      <section className="bg-gradient-to-r from-blue-100 to-pink-100 text-center py-10 md:py-16 community-background md:mx-5 rounded-2xl">
        <Fade duration={1000} delay={500}>
          <Slide>
            <h3 className="text-4xl text-white font-bold mb-10">
              Ready to showcase your creativity?.
            </h3>
          </Slide>
          <Slide direction="right">
            <Link
              to="/addart"
              className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition">
              Add Artwork
            </Link>
          </Slide>
        </Fade>
      </section>
    </div>
  );
};

export default Home;
