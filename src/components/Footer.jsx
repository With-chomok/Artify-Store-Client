const Footer = () => {
  return (
    <footer className="w-full bg-[#0f0a2a] text-white pt-10 pb-5 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        {/* Website Info */}
        <div>
          <h2 className="text-4xl font-bold">🎨 Artify</h2>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">
            A creative art marketplace where artists can showcase and share
            their imagination with the world.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <ul className="text-white/70 text-sm space-y-2">
            <li>Email: artify.support@gmail.com</li>
            <li>Phone: +880 1756-32200</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-white/70 hover:text-white transition text-xl">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-white/70 hover:text-white transition text-xl">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-white/70 hover:text-white transition text-xl">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="text-white/70 hover:text-white transition text-xl">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Artify — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
