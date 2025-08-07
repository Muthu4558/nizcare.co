import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserTie,
  FaUsersCog,
  FaUserNurse
} from 'react-icons/fa';
import {
  MdHealthAndSafety,
  MdOutlinePsychology,
  MdRestaurant,
  MdScreenSearchDesktop,
  MdChairAlt
} from 'react-icons/md';
import {
  GiLeg,
  GiSoap,
  GiNightSleep
} from 'react-icons/gi';
import {
  TbTemperatureCelsius
} from 'react-icons/tb';
import {
  BiCollapse,
  BiExpand
} from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Management from '../../assets/Hotel-sector-img/owners.jpeg';
import Admin from '../../assets/Hotel-sector-img/reception.jpeg';
import Front from '../../assets/Hotel-sector-img/frontline.jpeg';

const data = [
  {
    title: "Plant Operations & Shift Workers",
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory issues",
        icon: <TbTemperatureCelsius />,
        description: " Constant exposure to ammonia, urea, and dust",
      },
      {
        title: "Fatigue & Sleep Disorders",
        icon: <GiLeg />,
        description: "Long shifts and night duties",
      },
      {
        title: "Skin Irritations or Burns",
        icon: <GiSoap />,
        description: "Chemical handling without proper safety breaks",
      },
    ],
  },
  {
    title: "Maintenance & Technical Staff",
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal strain",
        icon: <MdScreenSearchDesktop />,
        description: "Repetitive lifting, bending, awkward postures",
      },
      {
        title: "Eye strain or injury",
        icon: <MdRestaurant />,
        description: " Prolonged focus, welding light exposure",
      },
      {
        title: "Hearing loss",
        icon: <MdOutlinePsychology />,
        description: "High-noise environments from machinery",
      },
    ],
  },
  {
    title: "Supervisory & Administrative Staff",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Mental fatigue & burnout",
        icon: <MdChairAlt />,
        description: "High-pressure decision-making",
      },
      {
        title: "Hypertension/Diabetes",
        icon: <GiNightSleep />,
        description: "Sedentary work style + stress",
      },
      {
        title: "Eye strain & headaches",
        icon: <MdHealthAndSafety />,
        description: "Screen-heavy workloads",
      },
    ],
  },
];

const AccordionItem = ({ title, icon, description, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-md text-left font-semibold transition-all"
      >
        <span className="flex items-center gap-2">
          <span className='text-2xl text-amber-500'>{icon}</span> {title}
        </span>
        <span>{isOpen ? <BiCollapse /> : <BiExpand />}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white px-4 py-3 text-gray-700 font-semibold text-sm shadow">
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HotelHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Feeding the Nation, Facing the Pressure: Fertilizer Workforce Risks Uncovered
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => {
          const [openIndex, setOpenIndex] = useState(null);

          return (
            <div
              key={groupIdx}
              className="bg-white rounded-2xl shadow p-4"
              data-aos="zoom-in-up"
              data-aos-delay={groupIdx * 100}
            >
              <img
                src={group.image}
                alt={group.title}
                className="rounded-lg mb-4 w-full h-92 object-cover"
              />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                {group.icon} {group.title}
              </h3>

              {group.issues.map((issue, idx) => (
                <AccordionItem
                  key={idx}
                  title={issue.title}
                  icon={issue.icon}
                  description={issue.description}
                  index={idx}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HotelHealthChallenges;