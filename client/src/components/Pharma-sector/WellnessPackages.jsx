import React, { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GiChemicalDrop, GiFactory } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

// 🧠 Image imports
import LabImg from "../../assets/Pharma-sector-img/LabTechnicians.jpeg";
import ProdImg from "../../assets/Pharma-sector-img/Manufacturing.jpeg";
import CorpImg from "../../assets/Pharma-sector-img/Corporate.jpeg";

const packages = [
  {
    id: "01",
    title: "Lab Technicians & QC Staff",
    icon: <GiChemicalDrop className="text-white text-2xl" />,
    img: LabImg,
    benefits: [
      "Eye care & strain relief sessions",
      "Chemical safety awareness workshops",
      "Mental health talks for sterile environments",
      "Shift-specific nutrition guidance",
      "PPE usage training refreshers",
    ],
  },
  {
    id: "02",
    title: "Production & Packaging Staff",
    icon: <GiFactory className="text-white text-2xl" />,
    img: ProdImg,
    benefits: [
      "Stretch break routines and posters",
      "Ergonomics & injury prevention workshops",
      "Noise safety training",
      "Monthly safety drills + CPR",
      "Hydration & fatigue management sessions",
    ],
  },
  {
    id: "03",
    title: "Sales & Corporate Executives",
    icon: <FaUserTie className="text-white text-2xl" />,
    img: CorpImg,
    benefits: [
      "Mindfulness & mental wellness sessions",
      "Desk yoga / mobility workshops",
      "Time management & burnout prevention sessions",
      "Travel recovery & sleep hygiene modules",
      "Personalized nutrition consulting",
    ],
  },
];

const PharmaWellnessPackages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
          className="text-3xl md:text-4xl font-bold mb-6 text-slate-900"
          data-aos="fade-down"
        >
          Beyond the Lab: <span className="text-teal-600">Wellness That Works Where They Work</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your pharma workforce.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
            >
              {/* Image + Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon + ID Badge */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white rounded-xl px-4 py-3 flex flex-col items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <div>{pkg.icon}</div>
                  <p className="text-sm font-semibold mt-1">{pkg.id}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                  {pkg.title}
                </h3>

                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 leading-snug"
                    >
                      <BsCheckCircleFill className="text-teal-500 mt-1 shrink-0 group-hover:animate-pulse" />
                      <span className="text-[15px]">{benefit}</span>
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

export default PharmaWellnessPackages;