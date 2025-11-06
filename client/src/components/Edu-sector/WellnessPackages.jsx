import React, { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdComputer, MdOutlineAdminPanelSettings, MdSchool, MdSupport } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

// Example placeholder images — replace with your real Edu-sector assets if available
import TeachingImg from "../../assets/Edu-sector-img/teaching.jpeg";
import AdminImg from "../../assets/Edu-sector-img/management.jpeg";
import TechImg from "../../assets/Edu-sector-img/tech.jpeg";
import SupportImg from "../../assets/Edu-sector-img/ground.jpeg";

const packages = [
  {
    id: "01",
    title: "Teaching & Academic Staff",
    icon: <MdSchool className="text-white text-2xl" />,
    img: TeachingImg,
    benefits: [
      "Voice Care Training",
      "Stress Management Yoga",
      "Ergonomic Posture Sessions",
      "Mental Wellness Check-ins",
    ],
  },
  {
    id: "02",
    title: "Administrative & Management Staff",
    icon: <MdOutlineAdminPanelSettings className="text-white text-2xl" />,
    img: AdminImg,
    benefits: [
      "Deskercise Routines",
      "Annual Mental Health Screening",
      "Financial Wellness & Sleep Hygiene Talks",
      "On-call Wellness Coach",
    ],
  },
  {
    id: "03",
    title: "Tech & Product Teams (EdTech)",
    icon: <MdComputer className="text-white text-2xl" />,
    img: TechImg,
    benefits: [
      "Eye Care Awareness Drives",
      "Digital Detox Challenges",
      "Sleep Improvement Workshops",
      "Personalized Wellness App Tracking",
    ],
  },
  {
    id: "04",
    title: "Support & Ground Staff",
    icon: <MdSupport className="text-white text-2xl" />,
    img: SupportImg,
    benefits: [
      "Hydration Awareness Drives",
      "Workplace Injury Prevention Training",
      "Routine Fitness & Diet Sessions",
      "First Aid Awareness Camps",
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
          Boost the Bandwidth: <span className="text-teal-600">Add-on Wellness</span> for High-Stress Roles
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your educational ecosystem.
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

                {/* Icon Badge */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white rounded-xl px-4 py-3 flex flex-col items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {pkg.icon}
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