const Services = () => {
  return (
    <section className="bg-[#EEEFE0] py-20 border-b-1">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg mb-10">
          Explore the core features that make DocBook a convenient and reliable healthcare partner.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#D1D8BE] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">🩺</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Doctor Appointments
            </h3>
            <p className="text-gray-600">
              Search and book appointments with certified doctors near you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#D1D8BE] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Real-time Scheduling
            </h3>
            <p className="text-gray-600">
              View available time slots and book instantly without calling.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#D1D8BE] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Secure & Private
            </h3>
            <p className="text-gray-600">
              Your personal health data is encrypted and safely stored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
