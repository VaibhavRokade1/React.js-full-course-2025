import React from "react";

const services = [
  {
    title: "Smart Irrigation",
    desc: "Automate your water usage with intelligent systems that save resources and increase crop yield.",
    icon: "💧",
  },
  {
    title: "Crop Monitoring",
    desc: "Get real-time insights on crop health using AI and drone technologies.",
    icon: "🌾",
  },
  {
    title: "Market Access",
    desc: "Connect directly with buyers and markets for better pricing and reduced middlemen.",
    icon: "📈",
  },
];

const Services = () => {
  return (
    <section className="bg-green-100 px-6 md:px-24 py-20 text-green-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our <span className="text-green-600">Services</span>
        </h2>
        <p className="text-lg text-green-700 max-w-xl mx-auto">
          We provide modern solutions to empower farmers and make agriculture
          smarter, easier, and more profitable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-green-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
