import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <section className="relative overflow-hidden mt-10 md:mt-25">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        className="rounded-2xl h-[300px]">
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full h-full">
            <img
              src="https://i.ibb.co.com/cXpHgJDJ/hq720.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h2 className="md:text-2xl text-xl font-bold mb-3 text-center">
                <Slide>
                  <h2>Discover Masterpieces</h2>
                </Slide>
              </h2>
              <p className="text-center">
                <Typewriter
                  words={[
                    "Explore breathtaking artworks from talented creators.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/7xzcdzpx/header-artist.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h2 className="md:text-2xl text-xl font-bold mb-3 text-center">
                <Slide direction="right">Meet the Artists</Slide>
              </h2>
              <p className="text-center">
                <Typewriter
                  words={[
                    "Learn about the people behind your favorite artworks.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h2 className="md:text-2xl text-xl font-bold mb-3 text-center">
                <Slide>Share Your Creativity</Slide>
              </h2>
              <p className="text-center">
                <Typewriter
                  words={[
                    "Upload your art and inspire others around the world.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
