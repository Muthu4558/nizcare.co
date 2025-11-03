import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBroadcastTower, FaHeadset, FaSalesforce } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

// Import your telecom images
import fieldImg from "../../assets/Telecom-sector-img/field.jpeg";
import callCenterImg from "../../assets/Telecom-sector-img/callsupport.jpeg";
import salesImg from "../../assets/Telecom-sector-img/sales.jpeg";
import adminImg from "../../assets/Telecom-sector-img/admin.jpeg";

const packages = [
  {
    id: "01",
    title: "Field Technicians & Tower Workers",
    icon: <FaBroadcastTower className="text-white text-2xl" />,
    img: fieldImg,
    benefits: [
      "Stretching & Recovery Sessions",
      "Hydration & Nutrition Awareness",
      "Basic Safety & Injury Prevention Workshops",
      "Physiotherapy Consults",
      "Ergonomics for Outdoor Work",
    ],
  },
  {
    id: "02",
    title: "Call Center & Customer Support",
    icon: <FaHeadset className="text-white text-2xl" />,
    img: callCenterImg,
    benefits: [
      "Guided Stress Relief & Breathing Sessions",
      "Workplace Ergonomics Webinar",
      "Eye Care & Screen Time Workshops",
      "Voice & Vocal Cord Care Tips",
      "Mental Health 1:1 Counseling",
    ],
  },
  {
    id: "03",
    title: "Sales & Marketing Executives",
    icon: <FaSalesforce className="text-white text-2xl" />,
    img: salesImg,
    benefits: [
      "On-the-Go Wellness Kits",
      "Mental Resilience Coaching",
      "Smart Eating on the Road Session",
      "Sleep Hygiene Hacks",
      "Quick Desk Exercises",
    ],
  },
  {
    id: "04",
    title: "IT, Network Ops & Admin",
    icon: <MdOutlineAdminPanelSettings className="text-white text-2xl" />,
    img: adminImg,
    benefits: [
      "Shift Wellness Routine Creation",
      "Posture & Eye Health",
      "Desk Yoga & Relaxation Breaks",
      "Burnout Prevention Workshops",
      "Caffeine Awareness & Hydration Tips",
    ],
  },
];

const TelecomWellnessPackages = () => {
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
          Boost the Bandwidth: Add-On Wellness for{" "}
          <span className="text-teal-600">High-Stress Roles</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your telecom team.
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

export default TelecomWellnessPackages;