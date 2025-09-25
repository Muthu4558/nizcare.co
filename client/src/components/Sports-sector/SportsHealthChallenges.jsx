import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { FaDumbbell, FaLungs, FaMicrophoneAltSlash, FaTemperatureHigh, FaUserTie } from 'react-icons/fa';
import { GiBrain, GiBubblingFlask, GiChemicalDrop, GiDrippingBlade, GiGroundSprout, GiKneeling, GiMuscleUp, GiPlayerBase } from 'react-icons/gi';
import { MdOutlineChair, MdPsychologyAlt, MdSports, MdVisibility } from 'react-icons/md';


import livestockHandlers from '../../assets/Sports-sector-img/animal.png';
import sportsCoaches from '../../assets/Sports-sector-img/coach.jpeg';
import adminEventStaff from '../../assets/Sports-sector-img/admin.jpeg';
import groundStaff from '../../assets/Sports-sector-img/ground.jpeg';

const data = [
  {
  title: "Athletes & Players",
  image: livestockHandlers, // replace with actual image asset
  icon: <MdSports className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Muscle Strain & Joint Injuries",
      icon: <GiBubblingFlask />,
      description: "Caused by overtraining and inadequate recovery.",
    },
    {
      title: "Dehydration & Electrolyte Imbalance",
      icon: <GiMuscleUp />,
      description: "Due to intense physical exertion.",
    },
    {
      title: "Performance Burnout",
      icon: <FaLungs />,
      description: "From high competition pressure and mental fatigue.",
    },
  ],
},
{
  title: "Coaches & Trainers",
  image: sportsCoaches, // replace with actual image asset
  icon: <FaDumbbell className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Back and Knee Pain",
      icon: <MdPsychologyAlt />,
      description: "Standing/training for long hours.",
    },
    {
      title: "Vocal Cord Fatigue",
      icon: <GiKneeling />,
      description: "Excessive shouting/instructions on the field.",
    },
    {
      title: "Stress & Sleep Issues",
      icon: <FaMicrophoneAltSlash />,
      description: "Resulting from performance pressure.",
    },
  ],
},
{
  title: "Support & Operational Staff",
  image: groundStaff, // replace with actual image asset
  icon: <GiGroundSprout className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Heat Stress & Exhaustion",
      icon: <GiChemicalDrop />,
      description: "Working long hours under sun.",
    },
    {
      title: "Lower Back Pain",
      icon: <GiDrippingBlade />,
      description: "Due to lifting or physical workload.",
    },
    {
      title: "Skin Issues",
      icon: <FaTemperatureHigh />,
      description: "Exposure to dust, turf, or chemicals.",
    },
  ],
},
{
  title: "Admin, Management & Marketing Team",
  image: adminEventStaff, // replace with actual image asset
  icon: <FaUserTie className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Digital Eye Strain",
      icon: <MdOutlineChair />,
      description: "Prolonged screen time.",
    },
    {
      title: "Chronic Fatigue & Poor Posture",
      icon: <GiBrain />,
      description: "Sedentary office work.",
    },
    {
      title: "Anxiety or Burnout",
      icon: <MdVisibility />,
      description: "From tight schedules and multitasking.",
    },
  ],
}



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

const SportsHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Every Role in the Game Deserves Peak Health
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

export default SportsHealthChallenges;