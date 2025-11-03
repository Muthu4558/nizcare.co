import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { GiFactory, GiHazmatSuit } from "react-icons/gi";
import { MdOutlineSupervisorAccount } from "react-icons/md";

// ✅ Replace these with real Water sector images
import PlantImg from "../../assets/Water-sector-img/plant.jpeg";
import MaintenanceImg from "../../assets/Water-sector-img/maintenance.jpeg";
import AdminImg from "../../assets/Water-sector-img/admin.jpeg";
import SanitationImg from "../../assets/Water-sector-img/sanitation.jpeg";

const packages = [
  {
    id: "01",
    title: "Plant Operators & Technicians",
    icon: <GiFactory className="text-white text-2xl" />,
    img: PlantImg,
    benefits: [
      "Respiratory Yoga Workshops",
      "PPE Hygiene Training",
      "Monthly Water Intake Challenges",
      "Ergonomic Movement Sessions",
      "Sleep & Shift Work Management Seminars",
    ],
  },
  {
    id: "02",
    title: "Maintenance & Engineers",
    icon: <FaTools className="text-white text-2xl" />,
    img: MaintenanceImg,
    benefits: [
      "Noise Protection Awareness",
      "Ortho & Back Care Camps",
      "Dehydration Monitoring",
      "Eye Health Clinics",
      "Safety Reflex Drills",
    ],
  },
  {
    id: "03",
    title: "Admin & Compliance Team",
    icon: <MdOutlineSupervisorAccount className="text-white text-2xl" />,
    img: AdminImg,
    benefits: [
      "Chair Yoga & Posture Clinics",
      "Guided Meditation for Focus",
      "Screen Time Reduction Challenges",
      "Mental Wellness Counselling",
      "Digital Detox Workshops",
    ],
  },
  {
    id: "04",
    title: "Contract Workers & Sanitation",
    icon: <GiHazmatSuit className="text-white text-2xl" />,
    img: SanitationImg,
    benefits: [
      "Basic Health Literacy Sessions",
      "Cleanliness & Self-care Campaigns",
      "Mobile Vaccination Drives",
      "Access to Free Periodic Health Talks",
      "Nutrition Distribution Programs",
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
        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-down"
        >
          Beyond the Basics: <span className="text-teal-600">Wellness That Works</span> Where They Work
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your team —
          from plant operators to administrators.
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
              {/* Image & Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top-left Icon Badge */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white rounded-xl px-4 py-3 flex flex-col items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
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