import React, { useEffect } from "react";
import { FaToolbox } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GiFurnace } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";

// Images
import FurnaceImg from "../../assets/Steel-sector-img/furnace.jpeg";
import MaintenanceImg from "../../assets/Steel-sector-img/maintenance.jpeg";
import AdminImg from "../../assets/Steel-sector-img/admin.jpeg";

const packages = [
  {
    id: "01",
    title: "Furnace & Production Line Workers",
    icon: <GiFurnace className="text-white text-2xl" />,
    img: FurnaceImg,
    benefits: [
      "Hydration and heat-safety awareness workshops",
      "Stretching & warm-up routines before shifts",
      "On-site respiratory fitness screening",
      "Cooling breaks with electrolyte hydration",
      "PPE-use awareness + safety habit training",
    ],
  },
  {
    id: "02",
    title: "Maintenance & Logistics Staff",
    icon: <FaToolbox className="text-white text-2xl" />,
    img: MaintenanceImg,
    benefits: [
      "Ergonomic lifting & posture training",
      "Regular hearing protection awareness",
      "Joint mobility exercise sessions",
      "Safety simulation & emergency response drills",
      "Fatigue monitoring and sleep hygiene talks",
    ],
  },
  {
    id: "03",
    title: "Administrative & QA/QC Staff",
    icon: <MdOutlineAdminPanelSettings className="text-white text-2xl" />,
    img: AdminImg,
    benefits: [
      "Desk yoga & eye strain relaxation sessions",
      "Mental wellness webinars",
      "Monthly stress checks & burnout prevention",
      "Personalized fitness coaching plans",
      "Nutrition guidance for sedentary workers",
    ],
  },
];

const SteelWellnessPackages = () => {
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
        {/* Header */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-down"
        >
          Beyond Checkups: Actionable Wellness for the{" "}
          <span className="text-teal-600">Steel Backbone</span>
        </h2>
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness programs from Nizcare, addressing the unique
          physical and mental demands of every role within the steel industry.
        </p>

        {/* Wellness Package Cards */}
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
                      className="flex items-start gap-2 text-gray-700 text-[15px] leading-snug"
                    >
                      <BsCheckCircleFill className="text-teal-500 mt-1 shrink-0 group-hover:animate-pulse" />
                      {benefit}
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

export default SteelWellnessPackages;