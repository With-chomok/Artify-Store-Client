import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-7xl font-bold text-accent-red mb-4">404</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/home"
        className="bg-accent-red text-white px-6 py-3 rounded-xl hover:bg-accentHover transition">
        Go Home
      </a>
    </div>
  );
};

export default Error;
