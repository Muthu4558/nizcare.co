import React, { useEffect } from "react";
import { FaBoxes } from "react-icons/fa";
import { GiChemicalTank, GiSewingMachine } from "react-icons/gi";
import { BsCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

// Image imports (replace with your actual paths)
import tanneryImg from "../../assets/Leather-sector-img/tannery.jpeg";
import stitchingImg from "../../assets/Leather-sector-img/stitching.jpeg";
import packingImg from "../../assets/Leather-sector-img/packing.jpeg";

const packages = [
  {
    id: "01",
    title: "Tannery Workers",
    icon: <GiChemicalTank className="text-white text-2xl" />,
    img: tanneryImg,
    benefits: [
      "Skin Care & Hygiene Training",
      "Respiratory Safety Workshops",
      "PPE Handling & Chemical Safety Drills",
      "Chromium Allergy Awareness",
      "Hydration Station Setups",
    ],
  },
  {
    id: "02",
    title: "Stitching Line Workers",
    icon: <GiSewingMachine className="text-white text-2xl" />,
    img: stitchingImg,
    benefits: [
      "Eye Relaxation Yoga Sessions",
      "Ergonomic Seating Workshops",
      "Repetitive Strain Injury Prevention",
      "Stress & Mental Wellness Mini-Talks",
      "Neck & Spine Stretch Routines",
    ],
  },
  {
    id: "03",
    title: "Packing & Dispatch Staff",
    icon: <FaBoxes className="text-white text-2xl" />,
    img: packingImg,
    benefits: [
      "Manual Lifting Training",
      "Heat Stress & Hydration Program",
      "Quick Stretch Zones Setup",
      "Daily Fatigue Tracker Tools",
      "First Aid & Emergency Simulation",
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
          Boost Beyond Checkups –{" "}
          <span className="text-teal-600">Wellness That Works for Leather Teams</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Nizcare delivers tailored wellness support designed specifically for
          your workforce — from tannery lines to dispatch bays — turning
          prevention into daily protection.
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
              {/* Image + Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top-left Icon Box */}
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
                    <li key={i} className="flex items-start gap-2 text-gray-700">
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