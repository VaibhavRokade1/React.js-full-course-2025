import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-20 px-6 md:px-24 overflow-hidden">
      <div className="grid md:grid-cols-2 items-center gap-16">
        {/* Left Side */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 leading-snug">
            Grow Smart, <br />{" "}
            <span className="text-green-600">Farm Better 🌿</span>
          </h1>
          <p className="mt-6 text-green-700 text-lg md:text-xl max-w-xl">
            Empowering farmers with technology for a sustainable future. Join us
            in transforming agriculture with smart, innovative solutions.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-800 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end">
          <div className="animated-border rounded-3xl">
            <img
              src="https://imgs.search.brave.com/e2aBlqAvYpdS6-TLUWaFPLcyQdqy3ySb155qw-l_t30/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzcyLzU2LzAz/LzM2MF9GXzEwNzI1/NjAzNzRfNFJhaUE3/Z2VFUzQxR0dndGx3/UHlDY1NNOEV4YlpF/SkcuanBn"
              alt="Farmer in field"
              className="rounded-2xl shadow-xl w-full max-w-md border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
