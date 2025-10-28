import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaUserCog, FaUserTie } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";

import AssemblyImg from "../../assets/Automobile-sector-img/assembly.jpeg";
import SupervisorImg from "../../assets/Automobile-sector-img/supervisor.jpeg";
import CorporateImg from "../../assets/Automobile-sector-img/corporate.jpeg";

const packages = [
  {
    id: "01",
    title: "Assembly Line Workers",
    icon: <GiFactory className="text-white text-2xl" />,
    img: AssemblyImg,
    benefits: [
      "Guided stretch sessions during shift transitions",
      "Monthly physiotherapy camps",
      "PPE hygiene awareness",
      "Audiometry & hearing care workshops",
      "Breathing exercises & mask protocol training",
    ],
  },
  {
    id: "02",
    title: "Supervisors & Managers",
    icon: <FaUserCog className="text-white text-2xl" />,
    img: SupervisorImg,
    benefits: [
      "Stress management sessions",
      "Sleep health webinars",
      "Ergonomic posture training",
      "Rotating yoga or fitness breaks",
      "Cardiovascular health screening camps",
    ],
  },
  {
    id: "03",
    title: "Corporate Staff & Engineers",
    icon: <FaUserTie className="text-white text-2xl" />,
    img: CorporateImg,
    benefits: [
      "Eye strain prevention workshops",
      "Virtual wellness challenges (steps, hydration)",
      "Mental wellness webinars & helpline",
      "Nutrition consultation for desk jobs",
      "Posture & spine care coaching",
    ],
  },
];

const WellnessPackages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-down"
        >
          Beyond the Checkup – <span className="text-teal-600">Fueling Total Wellness</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness programs for every role — helping your automotive workforce stay healthy, productive, and resilient.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
            >
              {/* Image with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Box */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white rounded-xl px-4 py-3 flex flex-col items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div>{pkg.icon}</div>
                  <p className="text-sm font-semibold mt-1">{pkg.id}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                  {pkg.title}
                </h3>

                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <BsCheckCircleFill className="text-teal-500 mt-1 shrink-0 group-hover:animate-pulse" />
                      <span className="text-[15px] leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessPackages;