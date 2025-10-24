import React, { useEffect } from "react";
import { FaToolbox } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GiMiningHelmet } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Image Imports (replace with your actual image paths)
import EngImg from "../../assets/Ncd-Topics/Diabetes.jpg";
import MfgImg from "../../assets/Ncd-Topics/Cardiovascular Diseases4.jpg";
import FieldImg from "../../assets/Ncd-Topics/Chronic.jpg";

const packages = [
  {
    id: "01",
    title: "Underground & Surface Miners",
    icon: <GiMiningHelmet className="text-white text-2xl" />,
    img: EngImg,
    benefits: [
      "Lung health awareness sessions",
      "Stretching & fatigue prevention workshops",
      "Water + salt intake tracking challenges",
      "PPE usage training with health focus",
      "Audio safety campaigns to prevent hearing loss",
    ],
  },
  {
    id: "02",
    title: "Maintenance & Technical Staff",
    icon: <FaToolbox className="text-white text-2xl" />,
    img: MfgImg,
    benefits: [
      "Back & joint care physiotherapy sessions",
      "Blue-light protection training",
      "Ergonomics and safe lifting technique demos",
      "Yoga for endurance and mobility",
      "Stress coping strategies for shift workers",
    ],
  },
  {
    id: "03",
    title: "Admin & Site Management",
    icon: <MdOutlineAdminPanelSettings className="text-white text-2xl" />,
    img: FieldImg,
    benefits: [
      "Mental wellness webinars (stress, burnout, sleep)",
      "Lifestyle disease management talks",
      "On-site guided meditation / breathing programs",
      "Eye strain and posture awareness sessions",
      "Health habit tracking via wellness app",
    ],
  },
];

const MiningWellnessPackages = () => {
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
          Beyond Checkups: Real Wellness.{" "}
          <span className="text-teal-600">Real Impact.</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your mining team.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
              data-aos="fade-up"
              data-aos-delay={200 + index * 150} // stagger each card
            >
              {/* Image + Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top-left Icon Box */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white rounded-xl px-4 py-3 flex flex-col items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300">
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

export default MiningWellnessPackages;