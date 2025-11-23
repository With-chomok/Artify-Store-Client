import React from "react";
import { Link } from "react-router";
import Err from "../assets/error.png"
const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  dark:from-gray-800 dark:to-gray-900 space-y-4">
      <img className=" w-70 md:w-[350px] rounded-3xl" src={Err} alt="" />
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Oops! Looks like you're lost.
      </h2>
      <p className="text-white/80 text-center leading-relaxed">
        The page you are looking for does not exist, has been removed, or is
        temporarily unavailable. You can go back to the homepage or explore some
        amazing artworks below.
      </p>
      <a
       href="/"
        className="btn w-40 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition">
        Go Home
      </a>
    </div>
  );
};

export default Error;
