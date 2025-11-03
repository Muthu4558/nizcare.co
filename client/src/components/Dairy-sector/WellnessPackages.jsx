import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTruckLoading } from "react-icons/fa";
import { GiCow, GiStethoscope } from "react-icons/gi";
import { MdOutlineSupervisorAccount } from "react-icons/md";

// ✅ Import Dairy sector images
import FarmImg from "../../assets/Dairy-sector-img/farm-workers.jpeg";
import VetImg from "../../assets/Dairy-sector-img/veterinary.jpeg";
import LogisticsImg from "../../assets/Dairy-sector-img/logistics.jpeg";
import AdminImg from "../../assets/Dairy-sector-img/admin.jpeg";

const packages = [
  {
    id: "01",
    title: "Farm Workers",
    icon: <GiCow className="text-white text-2xl" />,
    img: FarmImg,
    benefits: [
      "Occupational Hygiene Training",
      "Back Care Physiotherapy Sessions",
      "Hand & Skin Protection Workshops",
      "Seasonal Health Camps (Rainy/Winter Illnesses)",
      "Zoonotic Disease Awareness Camps",
    ],
  },
  {
    id: "02",
    title: "Veterinary Staff",
    icon: <GiStethoscope className="text-white text-2xl" />,
    img: VetImg,
    benefits: [
      "Biohazard Safety Drills",
      "Needle-Stick Injury Prevention Workshops",
      "Mental Health Debriefing Sessions",
      "Ergonomic Training for Field Work",
      "PPE Usage Best Practices",
    ],
  },
  {
    id: "03",
    title: "Processing & Logistics Crew",
    icon: <FaTruckLoading className="text-white text-2xl" />,
    img: LogisticsImg,
    benefits: [
      "Hydration and Fatigue Awareness Drive",
      "Noise Safety Ear Care Camps",
      "Weekly Stretching/Mobility Sessions",
      "Posture Correction Workshops",
      "Nutrition Tips for Shift Workers",
    ],
  },
  {
    id: "04",
    title: "Supervisors & Admin",
    icon: <MdOutlineSupervisorAccount className="text-white text-2xl" />,
    img: AdminImg,
    benefits: [
      "Digital Eye Strain Relief Training",
      "Desk Yoga and Stretch Sessions",
      "Monthly Stress Management Webinars",
      "Lifestyle Risk Screening",
      "Health Challenges (Steps, Water Intake, etc.)",
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
          Beyond Basics – Smart <span className="text-teal-600">Wellness Boosters</span> for Dairy Workforce Well-being
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your team.
        </p>

        {/* Cards Grid */}
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
                      <span className="text-[15px] leading-snug">
                        {benefit}
                      </span>
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