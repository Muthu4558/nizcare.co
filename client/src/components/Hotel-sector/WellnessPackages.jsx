import React, { useEffect } from "react";
import { FaBriefcase, FaUsersCog, FaPeopleCarry } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

import ManagementImg from "../../assets/Ncd-Topics/Diabetes.jpg";
import AdminImg from "../../assets/Ncd-Topics/Cardiovascular Diseases4.jpg";
import FrontlineImg from "../../assets/Ncd-Topics/Chronic.jpg";

const packages = [
  {
    id: "01",
    title: "Management & Executives",
    icon: <FaBriefcase className="text-white text-2xl" />,
    img: ManagementImg,
    benefits: [
      "Comprehensive Health Engagements",
      "Mental Wellness & Counseling",
      "Doctor-Led Webinars & Camps",
    ],
  },
  {
    id: "02",
    title: "Supervisors & Admin Staff",
    icon: <FaUsersCog className="text-white text-2xl" />,
    img: AdminImg,
    benefits: [
      "Work-Life Balance & Stress Management Workshops",
      "Desk Fitness & Ergonomics Guidance",
      "Personalized Health Coaching",
    ],
  },
  {
    id: "03",
    title: "Frontline Workers",
    icon: <FaPeopleCarry className="text-white text-2xl" />,
    img: FrontlineImg,
    benefits: [
      "Active Stretch & Injury Prevention Sessions",
      "Healthy Habits on the Go",
      "Stress Relief Corners",
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
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-down"
        >
          Nizcare <span className="text-teal-600">Wellness Packages</span> for Hotel Teams
        </h2>
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness solutions for every hotel staff member — from executives to frontline staff — to stay healthy, productive, and resilient.
        </p>

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

export default WellnessPackages;