import React from "react";
import BackgroundAnimation from "../BackgroundAnimation";

const Introduction = () => {
  return (
    <section className="relative flex flex-col justify-center items-center px-6 py-20 md:py-28 overflow-hidden text-center">
      {/* Background Animation */}
      {/* <BackgroundAnimation /> */}

      {/* Introduction Text */}
      <div
        className="relative z-10 max-w-4xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          Nizcare provides{" "}
          <span className="font-semibold text-gray-900">
            strategic wellness support
          </span>{" "}
          designed to secure the well-being, compliance, and sustained
          productivity of your aerospace and defense workforce. We offer{" "}
          <span className="font-semibold text-gray-900">
            India’s only NCD-focused, digital health platform
          </span>{" "}
          engineered for the high-precision demands of your sector.
        </p>
      </div>

      {/* Hero Title */}
      <h2
        className="relative z-10 text-3xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight tracking-tight"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Securing{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
          High-Performance Teams
        </span>
      </h2>

      {/* Subheading */}
      <h3
        className="relative z-10 text-2xl md:text-3xl font-semibold mb-6 text-gray-800"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Precision Health for{" "}
        <span className="text-teal-500">Mission-Critical Teams</span>
      </h3>

      {/* Description */}
      <div
        className="relative z-10 max-w-3xl mx-auto mb-10"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
          Nizcare is your strategic partner, transforming NCD risk management
          into a source of operational reliability and competitive advantage.
        </p>
      </div>

      {/* CTA Button */}
      <div data-aos="fade-up" data-aos-delay="500">
        <a
          href="#section-header"
          className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 
          text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Request a Strategic NCD Risk Review & Demo
        </a>
      </div>

      {/* Subtle Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 -z-10"></div>
    </section>
  );
};

export default Introduction;