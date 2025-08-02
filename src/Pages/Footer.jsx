const Footer = () => {
  return (
    <footer className="bg-[#A7C1A8] text-white font-semibold py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} DocBook. All rights reserved.</p>

        {/* Right Side: Social Links */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-gray-200 transition">Facebook</a>
          <a href="#" className="hover:text-gray-200 transition">Twitter</a>
          <a href="#" className="hover:text-gray-200 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
