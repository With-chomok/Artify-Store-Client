import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-7xl font-bold text-accent-red mb-4">404 </h1><span>Error</span>
      <p className="text-2xl text-white dark:text-gray-300 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/home"
        className="btn w-40 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition">
        Go Home
      </a>
    </div>
  );
};

export default Error;
