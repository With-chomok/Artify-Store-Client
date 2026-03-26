import React from "react";
import { motion } from "framer-motion";

const ArtifyLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] w-full bg-white">
      <div className="flex flex-col items-center">

        {/* 🛍️ Animated Shopping Bag */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-7xl drop-shadow-lg"
        >
          🛍️
        </motion.div>

        {/* 🎨 Brand Name Animation */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-6 text-3xl font-extrabold tracking-tight text-gray-800"
        >
          Arti<span className="text-purple-600">fy</span>
        </motion.h2>

        {/* ⚡ Animated Dots */}
        <div className="flex items-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-purple-600 rounded-full"
            />
          ))}
        </div>

        {/* 🧾 Loading Text */}
        <p className="mt-4 text-sm text-gray-500 font-semibold tracking-wide">
          Loading Products...
        </p>

        {/* 🪄 Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 px-5 py-2 bg-purple-50 border border-purple-100 rounded-full shadow-inner flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
            Fetching Best Deals
          </span>
        </motion.div>

      </div>
    </div>
  );
};

export default ArtifyLoader;