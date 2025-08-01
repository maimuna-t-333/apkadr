import { Link, NavLink } from "react-router";
import logo from './../assets/logo.png'

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-3 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="w-10 h-10 ">
          <img src={logo} alt="ApkaDr" />
        </Link>

        {/* Navigation Menu */}
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#466459] font-bold"
                : "text-gray-700 hover:text-[#466459]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#466459] font-bold"
                : "text-gray-700 hover:text-[#466459]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-[#466459] font-bold"
                : "text-gray-700 hover:text-[#466459]"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#466459] font-bold"
                : "text-gray-700 hover:text-[#466459]"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
