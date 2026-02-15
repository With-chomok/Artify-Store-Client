import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
      <div className="relative flex flex-col items-center">
        
        {/* 💓 Heartbeat Pulse Effect */}
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.2, 1, 1.4, 1],
              opacity: [0.5, 0.2, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-10 bg-red-500/20 rounded-full blur-2xl"
          />
          
          {/* 🩸 The Floating Drop */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              scaleX: [1, 0.9, 1],
              scaleY: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-8xl filter drop-shadow-[0_10px_10px_rgba(220,38,38,0.3)]"
          >
            🩸
          </motion.div>
        </div>

        {/* 🌊 Liquid Filling Text Effect */}
        <div className="mt-12 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-black tracking-tighter text-gray-800"
          >
            Life<span className="text-red-600">Drop</span>
          </motion.h2>
          
          <div className="flex items-center gap-1 mt-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                animate={{
                  height: [8, 20, 8],
                  backgroundColor: ["#fee2e2", "#dc2626", "#fee2e2"]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                className="w-1.5 rounded-full"
              />
            ))}
            <span className="ml-2 text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">
              Loading Hope
            </span>
          </div>
        </div>

        {/* 🏢 Bottom Glassmorphism Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 px-6 py-2 bg-red-50 border border-red-100 rounded-full flex items-center gap-3 shadow-inner"
        >
          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
          <span className="text-red-600 text-xs font-black uppercase tracking-wider">
            Fetching Donors Near You
          </span>
        </motion.div>

      </div>
    </div>
  );
};

export default Loading;