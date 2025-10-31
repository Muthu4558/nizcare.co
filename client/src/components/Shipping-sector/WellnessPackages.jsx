import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheckCircleFill } from "react-icons/bs";
import {
  GiCargoCrate,
  GiSteeringWheel,
  GiCargoShip,
  GiSecurityGate,
} from "react-icons/gi";

// Replace with your actual image imports
import DockImg from "../../assets/Shipping-sector-img/dock.jpeg";
import MaritimeImg from "../../assets/Shipping-sector-img/maritime.jpeg";
import AdminImg from "../../assets/Shipping-sector-img/admin.jpeg";
import SecurityImg from "../../assets/Shipping-sector-img/security.jpeg";

const packages = [
  {
    id: "01",
    title: "Dock & Cargo Workers",
    icon: <GiCargoCrate className="text-white text-2xl" />,
    img: DockImg,
    benefits: [
      "Ergonomic training for lifting techniques",
      "Hydration & heat awareness camps",
      "Injury prevention & safety drills",
      "Weekly physiotherapy camps",
      "Group stretching & fitness routines",
    ],
  },
  {
    id: "02",
    title: "Maritime Crew",
    icon: <GiSteeringWheel className="text-white text-2xl" />,
    img: MaritimeImg,
    benefits: [
      "Mental health helpline & counseling",
      "Sleep hygiene workshops",
      "Nutritional planning for long voyages",
      "At-sea telemedicine consults",
      "Breathing & mindfulness sessions",
    ],
  },
  {
    id: "03",
    title: "Port Administration & Logistics",
    icon: <GiCargoShip className="text-white text-2xl" />,
    img: AdminImg,
    benefits: [
      "Desk yoga sessions",
      "Vision & posture correction camps",
      "Burnout management webinars",
      "Monthly stress assessments",
      "Work-life balance workshops",
    ],
  },
  {
    id: "04",
    title: "Security & Safety Officers",
    icon: <GiSecurityGate className="text-white text-2xl" />,
    img: SecurityImg,
    benefits: [
      "Reaction time improvement drills",
      "Physical fitness & endurance coaching",
      "Shift nutrition & hydration sessions",
      "Sleep optimization programs",
      "Emergency preparedness simulations",
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
          Beyond Checkups – Wellness Waves that Uplift Every{" "}
          <span className="text-teal-600">Maritime Role</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role across ports and
          ships — empowering healthier, safer, and more resilient teams.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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