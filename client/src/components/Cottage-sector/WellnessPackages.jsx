import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import {
  GiPaintedPottery,
  GiSewingNeedle,
  GiSpinningWheel,
} from "react-icons/gi";

// Image Imports
import HandloomImg from "../../assets/Cottage-sector-img/Handloom.jpeg";
import EmbroideryImg from "../../assets/Cottage-sector-img/embroidery.jpeg";
import PotteryImg from "../../assets/Cottage-sector-img/pottery.jpeg";
import ShgImg from "../../assets/Cottage-sector-img/self-group.jpeg";

const packages = [
  {
    id: "01",
    title: "Handloom & Weaving Artisans",
    icon: <GiSpinningWheel className="text-white text-2xl" />,
    img: HandloomImg,
    benefits: [
      "Ergonomic Posture Sessions",
      "Eye Relaxation Workshops",
      "Breathwork for Respiratory Health",
      "Weekly Stretching Routines",
    ],
  },
  {
    id: "02",
    title: "Embroidery & Tailoring Workers",
    icon: <GiSewingNeedle className="text-white text-2xl" />,
    img: EmbroideryImg,
    benefits: [
      "Mindfulness & Stress-Relief Sessions",
      "Finger & Hand Strengthening Exercises",
      "Nutrition Talks",
      "Self-Care Awareness Programs",
    ],
  },
  {
    id: "03",
    title: "Pottery & Craft Workers",
    icon: <GiPaintedPottery className="text-white text-2xl" />,
    img: PotteryImg,
    benefits: [
      "Dust Exposure Safety Training",
      "Back & Joint Care Physiotherapy",
      "Summer Hydration & Fatigue Prevention Sessions",
      "PPE Training (Masks, Aprons)",
    ],
  },
  {
    id: "04",
    title: "Women in SHGs",
    icon: <FaUsers className="text-white text-2xl" />,
    img: ShgImg,
    benefits: [
      "Anemia Awareness & Iron-Rich Diet Tips",
      "Balancing Home & Work Stress Sessions",
      "Group Fitness & Yoga",
      "Preventive Hygiene & Sanitation Training",
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
          Boost the Bandwidth: Add-on Wellness for{" "}
          <span className="text-teal-600">High-Stress Roles</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness programs crafted by Nizcare to support artisans,
          workers, and women across cottage industries — blending tradition with
          health-first innovation.
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