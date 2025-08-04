import React from "react";

const Contact = () => {
  return (
    <section className="bg-green-50 px-6 md:px-24 py-20 text-green-800">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-lg text-green-700 mb-4">
            Have a question or want to know more about our services? Reach out
            and we’ll be happy to help.
          </p>
          <ul className="space-y-3 text-green-700">
            <li>
              <strong>Email:</strong> support@agrigrow.com
            </li>
            <li>
              <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              <strong>Address:</strong> Aahilyanagar, Maharashtra, India
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
