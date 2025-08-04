import React from "react";

const Home = () => {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
            Grow Smart, Farm Better 🌱
          </h1>
          <p className="mt-6 text-green-700 text-lg">
            Empowering farmers with technology for a sustainable future. Join us
            in modernizing agriculture with smart solutions and innovation.
          </p>
          <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-800 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://imgs.search.brave.com/e2aBlqAvYpdS6-TLUWaFPLcyQdqy3ySb155qw-l_t30/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzcyLzU2LzAz/LzM2MF9GXzEwNzI1/NjAzNzRfNFJhaUE3/Z2VFUzQxR0dndGx3/UHlDY1NNOEV4YlpF/SkcuanBn"
            alt="Farmer in field"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
