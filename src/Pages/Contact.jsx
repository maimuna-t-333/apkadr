const Contact = () => {
  return (
    <section className="bg-[#EEEFE0] py-16" >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        <p className="text-gray-600 text-center mb-10">
          Have questions or need help? Send us a message and we’ll get back to you as soon as possible.
        </p>

        <form className="bg-[#D1D8BE] shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full border border-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#5e8275] text-white px-6 py-2 rounded-md hover:bg-[#4a635a] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
