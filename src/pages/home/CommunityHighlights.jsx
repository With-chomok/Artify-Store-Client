import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const CommunityHighlights = () => {
  return (
    <section className="md:py-20 py-10 px-5 md:mx-5 rounded-2xl md:px-20 text-center community-background">
      <h2 className="md:text-4xl text-2xl text-white font-bold mb-8">
        <Fade duration={1000} delay={500} direction="right">
          <Slide>Community Highlights</Slide>
        </Fade>
      </h2>
      <Slide>
        <Fade duration={1000} delay={500}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-xl transition hover:scale-105 duration-700">
              <h3 className="font-bold  text-xl text-white mb-2">
                🎨 10K+ Artworks Shared
              </h3>
              <p className="text-white">
                Thousands of beautiful creations by artists worldwide.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-xl transition hover:scale-105 duration-700">
              <h3 className="font-bold  text-white text-xl mb-2">
                🌍 Global Community
              </h3>
              <p className="text-white">
                Artists from 50+ countries sharing inspiration daily.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-xl transition hover:scale-105 duration-700">
              <h3 className="font-bold text-white   text-xl mb-2 ">
                💬 Artify Talks
              </h3>
              <p className="text-white">
                Join weekly discussions and art appreciation events.
              </p>
            </div>
          </div>
        </Fade>
      </Slide>
    </section>
  );
};

export default CommunityHighlights;
