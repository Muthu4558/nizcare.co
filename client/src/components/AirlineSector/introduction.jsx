import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, HeartPulse } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import wellnessVideo from "../../assets/AirlineSector-img/video-airline.mp4"; // replace with your video file

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      className="relative flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-30 py-20 md:py-28 overflow-hidden"
      id="introduction-section"
    >
      {/* Decorative animated background blob */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl -z-10 animate-pulse"
        data-aos="fade-in"
      ></div>

      {/* Left Content */}
      <motion.div
        className="relative z-10 flex-1 text-left max-w-xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        data-aos="fade-right"
        data-aos-delay="100"
      >
        {/* Title */}
        <div
          className="flex items-center mb-4 space-x-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <HeartPulse className="text-teal-600 w-8 h-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Empowering Workforces Through
            <span className="text-teal-600"> Preventive Health Intelligence.</span>
          </h2>
        </div>

        {/* Paragraph 1 */}
        <p
          className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Revolutionizing Healthcare for Aerospace Professionals */}

          <span className="font-semibold text-gray-900">
            At Nizcare
          </span>, we believe the future of employee health lies in prevention, not reaction. In every industry, rising cases of lifestyle and non-communicable diseases (NCDs) like diabetes, hypertension, and cardiac risks are quietly impacting productivity, morale, and profitability.
        </p>

        {/* Paragraph 2 */}
        <p
          className="text-sm md:text-lg text-gray-700 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          That’s why we’ve built{" "}
          <span className="font-semibold text-gray-900">
            India’s first NCD-focused,
          </span>{" "}
          digital preventive healthcare platform, combining advanced 
          screening, real-time analytics, and company-specific wellness 
          programs to keep your workforce not just healthy, but high-performing.
        </p>

        {/* CTA Button */}
        <div data-aos="zoom-in-up" data-aos-delay="600">
          <a
            href="#section-header"
            className="text-center inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 
            text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-12"
          >
            Request a Strategic NCD Risk Review & Demo
          </a>
        </div>
      </motion.div>

      {/* Right Video Section */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0 relative"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <video
          src={wellnessVideo}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl shadow-lg object-cover"
          data-aos="zoom-in"
          data-aos-delay="500"
        />

        {/* Floating decorative icon */}
        <motion.div
          className="absolute -top-6 -right-6 bg-white p-3 rounded-full shadow-md"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Rocket className="text-teal-600 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;