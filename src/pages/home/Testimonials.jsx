import { Fade, Slide } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <section className="community-background rounded-2xl md:mx-5 py-10 md:py-16 ">
      <h2 className="md:text-2xl text-xl text-white font-bold text-center mb-10">
        <Fade duration={1000} delay={500}>
          <Slide>
            <h1>What Artists Says</h1>
          </Slide>
        </Fade>
      </h2>
      <Fade duration={1000} delay={500} direction="right">
        <Slide>
          <div className="grid md:grid-cols-3 text-white mx-5 md:mx-15 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <p>"Artify helped me showcase my work globally."</p>
              <h4 className="mt-4 font-semibold">— Alex</h4>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <p>"Best platform for creative artists."</p>
              <h4 className="mt-4 font-semibold">— Sarah</h4>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <p>"Clean UI and amazing community."</p>
              <h4 className="mt-4 font-semibold">— John</h4>
            </div>
          </div>
        </Slide>
      </Fade>
    </section>
  );
};

export default Testimonials;
