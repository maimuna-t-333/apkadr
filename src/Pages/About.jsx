

const About = () => {
  return (
    <div>
      
            <section className="bg-[#EEEFE0] py-20 border-b-1 md:px-6">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          About DocBook
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          DocBook is a doctor appointment platform built to make healthcare
          easier and faster for everyone. Whether you're booking a consultation
          from home or on the go, our mission is to connect you with verified,
          experienced doctors — right when you need them.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left mt-8 ">
          <div className="border p-4 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Trusted Doctors
            </h4>
            <p className="text-gray-600">
              We work with verified and experienced medical professionals.
            </p>
          </div>
          <div className="border p-4 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Instant Booking
            </h4>
            <p className="text-gray-600">
              No more waiting. Book appointments in just a few clicks.
            </p>
          </div>
          <div className="border p-4 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Simple & Secure
            </h4>
            <p className="text-gray-600">
              Easy-to-use interface with complete privacy and security.
            </p>
          </div>
        </div>
      </div>
    </section>

    </div>

  );
};

export default About;


