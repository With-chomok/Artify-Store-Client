import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="carousel rounded-2xl h-[300px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/cXpHgJDJ/hq720.jpg"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
            <h2 className="md:text-4xl text-2xl text-center font-bold md:mb-3">
              Discover Masterpieces
            </h2>
            <p className="text-center ">
              Explore breathtaking artworks from talented creators.
            </p>
          </div>
          <a href="#slide3" className="absolute left-5 top-1/2 btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="absolute right-5 top-1/2 btn btn-circle">
            ❯
          </a>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/7xzcdzpx/header-artist.png"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl text-center font-bold mb-3">Meet the Artists</h2>
            <p className="text-center">Learn about the people behind your favorite artworks.</p>
          </div>
          <a href="#slide1" className="absolute left-5 top-1/2 btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="absolute right-5 top-1/2 btn btn-circle">
            ❯
          </a>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl font-bold text-center mb-3">Share Your Creativity</h2>
            <p className="text-center">Upload your art and inspire others around the world.</p>
          </div>
          <a href="#slide2" className="absolute left-5 top-1/2 btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="absolute right-5 top-1/2 btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
