import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 max-w-2xl mx-auto md:mx-0">
            Build Smarter,{" "}
            <span className="text-purple-600">Launch Faster 🚀</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Empowering startups and businesses to build innovative, user-centric
            web solutions that grow with you.
          </p>
          <a
            href="#"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md"
          >
            Get Started
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://illustrations.popsy.co/white/web-design.svg"
            alt="Web Design Illustration"
            className="w-full max-w-md lg:max-w-lg shadow-xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
