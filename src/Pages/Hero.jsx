import { Link } from "react-router";
import banner from '../assets/docto-patient.jpg'

const Hero = () => {
  return (
    <section className="bg-gray-50 border py-10">
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
            className="inline-block bg-[#466459] hover:bg-[#678e80] text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Get Started
          </Link>
        </div>

        {/* Image/Illustration */}
        <div className="md:w-1/2">
          <img
            src={banner}
            alt="Doctor illustration"
            className="w-1/2 ml-60 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
