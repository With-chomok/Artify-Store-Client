import { Fade, Slide } from "react-awesome-reveal";

const FAQ = () => {
  return (
    <section className="community-background rounded-2xl md:mx-5 py-10 md:py-16 text-white">
      <Fade duration={1000} delay={500}>
        <Slide>
          <h2 className="text-3xl text-center font-bold mb-10">FAQ</h2>
        </Slide>
      </Fade>

      <Fade duration={1000} delay={500} direction="right">
        <Slide>
          <div className="space-y-4 max-w-5xl mx-auto">
            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="font-semibold">Is Artify free?</h4>
              <p className="text-sm">Yes, joining and uploading is free.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="font-semibold">How to add artwork?</h4>
              <p className="text-sm">Go to Add Artwork page.</p>
            </div>
          </div>
        </Slide>
      </Fade>
    </section>
  );
};

export default FAQ;
