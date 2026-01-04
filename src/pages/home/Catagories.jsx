import { Fade, Slide } from "react-awesome-reveal";

const Categories = () => {
  const categories = [
    "Digital Art",
    "Painting",
    "Illustration",
    "Photography",
    "3D Art",
    "AI Art",
  ];

  return (
    <section className="community-background rounded-2xl md:mx-5 py-10 md:py-16 ">
      <h2 className="md:text-2xl text-xl text-white font-bold text-center mb-10">
        <Fade duration={1000} delay={500}>
          <Slide>
            <h1>Art Categories</h1>
          </Slide>
        </Fade>
      </h2>
      <Fade duration={1000} delay={500} direction="right">
        <Slide>
      <div className="grid grid-cols-2 md:grid-cols-3 mx-5 md:mx-15 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className=" bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-xl text-center text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer">
            {cat}
          </div>
        ))}
      </div>
         
        </Slide>
      </Fade>
    </section>
  );
};

export default Categories;
