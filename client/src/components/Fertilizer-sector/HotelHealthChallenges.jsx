import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaUserTie,
  FaUsersCog,
  FaUserNurse,
  FaLungs,
  FaBurn,
  FaBolt,
  FaHeadphonesAlt,
  FaBrain,
  FaTint,
} from 'react-icons/fa';
import { MdOutlineLocalDrink } from 'react-icons/md';
import { GiSleepy } from 'react-icons/gi';

import Management from '../../assets/fertilizer-sector-img/2.jpg';
import Admin from '../../assets/fertilizer-sector-img/3.jpg';
import Front from '../../assets/fertilizer-sector-img/1.jpg';

const data = [
  {
    title: 'Plant Operations & Shift Workers',
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      { title: 'Respiratory issues', icon: <FaLungs />, description: 'Constant exposure to ammonia, urea, and dust' },
      { title: 'Fatigue & Sleep Disorders', icon: <GiSleepy />, description: 'Long shifts and night duties' },
      { title: 'Skin Irritations or Burns', icon: <FaBurn />, description: 'Chemical handling without proper safety breaks' },
    ],
  },
  {
    title: 'Maintenance & Technical Staff',
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      { title: 'Musculoskeletal strain', icon: <FaBolt />, description: 'Repetitive lifting, bending, awkward postures' },
      { title: 'Eye strain or injury', icon: <MdOutlineLocalDrink />, description: 'Prolonged focus, welding light exposure' },
      { title: 'Hearing loss', icon: <FaHeadphonesAlt />, description: 'High-noise environments from machinery' },
    ],
  },
  {
    title: 'Supervisory & Administrative Staff',
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      { title: 'Mental fatigue & burnout', icon: <FaBrain />, description: 'High-pressure decision-making' },
      { title: 'Hypertension/Diabetes', icon: <FaTint />, description: 'Sedentary work style + stress' },
      { title: 'Eye strain & headaches', icon: <MdOutlineLocalDrink />, description: 'Screen-heavy workloads' },
    ],
  },
];

const HotelHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Fertilizer Employee <span className="text-teal-600">Health Problems</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        In industrial fertilizer plants, employees face high exposure to chemicals, long shifts, and physically demanding tasks. Addressing these health challenges ensures safer, more productive workforces.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-teal-400 overflow-hidden group flex flex-col"
            data-aos="zoom-in-up"
            data-aos-delay={groupIdx * 100}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
                  {group.icon} {group.title}
                </h3>

                <div className="space-y-4">
                  {group.issues.map((issue, idx) => (
                    <div
                      key={idx}
                      className="border border-teal-600 transition-all duration-300 rounded-xl p-4 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-teal-600 text-xl mt-1">{issue.icon}</span>
                        <div>
                          <h4 className="font-semibold text-sm text-teal-600">{issue.title}</h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{issue.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelHealthChallenges;
