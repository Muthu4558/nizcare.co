import React, { useEffect } from 'react';
import { FaBriefcase, FaUsersCog, FaPeopleCarry } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

import EngImg from "../../assets/Ncd-Topics/Diabetes.jpg";
import MfgImg from "../../assets/Ncd-Topics/Cardiovascular Diseases4.jpg";
import FieldImg from "../../assets/Ncd-Topics/Chronic.jpg";

const packages = [
  {
    id: '01',
    title: 'Production & Kiln Operators',
    icon: <FaBriefcase className="text-white text-2xl" />,
    img: EngImg,
    benefits: [
      'Heat stress awareness sessions',
      'Breathing technique training (yoga-based)',
      'PPE usage & lung protection training',
      'Weekly hydration reminders (via app)',
    ],
  },
  {
    id: '02',
    title: 'Supervisors & Admin Staff',
    icon: <FaUsersCog className="text-white text-2xl" />,
    img: MfgImg,
    benefits: [
      'Driver fatigue and posture workshops',
      'Onsite stretching & physiotherapy sessions',
      'Eye care & stress-relief mini breaks',
      'Ergonomics & lifting safety training',
    ],
  },
  {
    id: '03',
    title: 'Management & Executives',
    icon: <FaPeopleCarry className="text-white text-2xl" />,
    img: FieldImg,
    benefits: [
      'Nutrition awareness drives',
      'Personal hygiene & sanitation workshops',
      'Mental health counseling in native language',
      'Vaccination & infectious disease awareness',
    ],
  },
];

const WellnessPackages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
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
          Extra Care Where It Counts: <span className="text-teal-600">Add-ons That Make a Difference</span>
        </h2>
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your cement workforce.
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