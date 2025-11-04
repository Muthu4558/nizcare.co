import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GiCow, GiFarmTractor, GiStrongMan } from "react-icons/gi";

// ✅ Image Imports (replace these with your real sports-related images)
import EngImg from "../../assets/Ncd-Topics/Diabetes.jpg";
import MfgImg from "../../assets/Ncd-Topics/Cardiovascular Diseases4.jpg";
import FieldImg from "../../assets/Ncd-Topics/Chronic.jpg";
import AdminImg from "../../assets/Ncd-Topics/Cancer.jpg";

const packages = [
  {
    id: "01",
    title: "For Athletes & Players",
    icon: <GiCow className="text-white text-2xl" />,
    img: EngImg,
    benefits: [
      "Strength & flexibility workshops",
      "Hydration & nutrition guidance",
      "Mental toughness & mindset coaching",
      "Cryotherapy & recovery sessions",
    ],
  },
  {
    id: "02",
    title: "For Coaches & Trainers",
    icon: <GiStrongMan className="text-white text-2xl" />,
    img: MfgImg,
    benefits: [
      "Voice care & ergonomics training",
      "Preventive physiotherapy sessions",
      "Group meditation & stress relief",
    ],
  },
  {
    id: "03",
    title: "For Support & Operational Staff",
    icon: <GiFarmTractor className="text-white text-2xl" />,
    img: FieldImg,
    benefits: [
      "Back pain prevention workshops",
      "PPE training & hygiene awareness",
      "Healthy eating on shift programs",
    ],
  },
  {
    id: "04",
    title: "For Admin & Management",
    icon: <FaUserTie className="text-white text-2xl" />,
    img: AdminImg,
    benefits: [
      "Screen fatigue workshops",
      "Corporate yoga & stretch breaks",
      "Time management & burnout prevention",
    ],
  },
];

const SportsWellnessPackages = () => {
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
          Wellness Boosters That Take{" "}
          <span className="text-teal-600">Performance Beyond the Basics</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your team —
          from field to front office.
        </p>

        {/* Grid */}
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

                {/* Icon Box */}
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

export default SportsWellnessPackages;