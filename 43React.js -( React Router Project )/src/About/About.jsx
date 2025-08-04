import React from "react";

const About = () => {
  return (
    <section className="bg-green-50 px-6 md:px-24 py-20 text-green-800">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-green-600">AgriGrow</span>
          </h2>
          <p className="text-lg leading-relaxed text-green-700 mb-4">
            At AgriGrow, we are dedicated to empowering farmers through
            innovative, tech-driven solutions. Our mission is to revolutionize
            agriculture with modern tools that support smarter farming and a
            sustainable future.
          </p>
          <p className="text-lg leading-relaxed text-green-700">
            We believe in bridging the gap between tradition and technology —
            making agriculture more efficient, productive, and resilient for
            generations to come.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://imgs.search.brave.com/rBbU82xBWkrDpYtDvHESjuzKz5eOFSiT1H3WMnTtf1U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA4/MzEzMTU3L3Bob3Rv/L2luZGlhLWZhcm1p/bmcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWVJaDVxTHEz/Zm1VSUtmVlZ6ZzFH/Ty1hVTJjVFhDSF82/eWpmMTZ6TVBFSzg9"
            alt="About AgriGrow"
            className="rounded-3xl shadow-xl max-w-md w-full border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
