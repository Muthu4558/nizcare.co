import React from "react";
import { motion } from "framer-motion";
import { Rocket, HeartPulse } from "lucide-react"; // optional icons
import BackgroundAnimation from "../BackgroundAnimation"; // optional background animation
import wellnessImage from "../../assets/logo.png"; // replace with your image

const Introduction = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-30 py-20 md:py-32 overflow-hidden">
      {/* Optional animated background */}
      {/* <BackgroundAnimation /> */}

      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>

      {/* Left Content */}
      <motion.div
        className="relative z-10 flex-1 text-left max-w-xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-4 space-x-3">
          <HeartPulse className="text-teal-600 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Strategic Wellness, <span className="text-teal-600">Elevated.</span>
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Nizcare provides{" "}
          <span className="font-semibold text-gray-900">
            strategic wellness support
          </span>{" "}
          designed to secure the well-being, compliance, and sustained
          productivity of your aerospace and defense workforce.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We offer{" "}
          <span className="font-semibold text-gray-900">
            India’s only NCD-focused, digital health platform
          </span>{" "}
          engineered for the high-precision demands of your sector.
        </p>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="500">
          <a
            href="#section-header"
            className="text-center inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 
          text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-12"
          >
            Request a Strategic NCD Risk Review & Demo
          </a>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          <img
            src={wellnessImage}
            alt="Nizcare Wellness Illustration"
            className="w-full max-w-md rounded-2xl"
          />
          {/* floating decorative icon */}
          <motion.div
            className="absolute -top-6 -right-6 bg-white p-3 rounded-full shadow-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Rocket className="text-teal-600 w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduction;