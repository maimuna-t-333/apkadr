import { Link } from "react-router";
import banner from '../assets/docto-patient.jpg'

const Hero = () => {
  return (
    <section className="bg-[#EEEFE0] border-y-3 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 pl-10 ">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Book Your <br /> Appointment <br /> with Trusted Doctors
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Connect with verified healthcare professionals and schedule appointments at your convenience.
          </p>
          <Link
            to="/services"
            className="inline-block bg-[#5e8275] hover:bg-[#4a635a] text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Get Started
          </Link>
        </div>

        {/* Image/Illustration */}
        <div className="md:w-1/2 ">
          <img
            src={banner}
            alt="Doctor illustration"
            className="lg:w-1/2 lg:ml-60 md:ml-20 lg:h-auto sm:h-48 rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
