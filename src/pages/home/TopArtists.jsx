import React from "react";
import { motion } from "framer-motion";

const TopArtists = () => {
  return (
    <section className="bg-[#f7f8fa] py-16">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Top Artists of the Week
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {["Tahia Rahman", "Rafiul Islam", "Aminul Haque", "Sajid Ahmed"].map(
          (name, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 w-64 text-center hover:shadow-lg"
              whileHover={{ scale: 1.05 }}>
              <img
                src={`https://randomuser.me/api/portraits/${
                  i % 2 === 0 ? "women" : "men"
                }/${i + 10}.jpg`}
                alt={name}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-semibold">{name}</h4>
              <p className="text-gray-500 text-sm">Contemporary Artist</p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default TopArtists;
