import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";

const TopArtists = () => {
  return (
    <section className="community-background rounded-2xl md:mx-5 py-10 md:py-16 ">
      <h2 className="md:text-2xl text-xl text-white font-bold text-center mb-10">
        <Fade duration={1000} delay={500}>
          <Slide>
            <h1>Top Artists of the Week.</h1>
          </Slide>
        </Fade>
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {["Tahia Rahman", "Rafiul Islam", "Aminul Haque", "Sajid Ahmed"].map(
          (name, i) => (
            <Fade key={i} duration={1000} delay={500}>
              <Slide direction="right">
                <motion.div
                  
                  className="bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl shadow-xl transition hover:scale-105 p-6 w-60 text-center hover:shadow-lg duration-700"
                  whileHover={{ scale: 1.05 }}>
                  <img
                    src={`https://randomuser.me/api/portraits/${
                      i % 2 === 0 ? "women" : "men"
                    }/${i + 10}.jpg`}
                    alt={name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold text-white">{name}</h4>
                  <p className="text-white text-sm">Contemporary Artist</p>
                </motion.div>
              </Slide>
            </Fade>
          )
        )}
      </div>
    </section>
  );
};

export default TopArtists;
