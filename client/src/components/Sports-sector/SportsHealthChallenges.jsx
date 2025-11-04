import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MdSports,
  MdPsychologyAlt,
  MdOutlineChair,
  MdVisibility,
} from "react-icons/md";
import {
  GiBubblingFlask,
  GiMuscleUp,
  GiChemicalDrop,
  GiDrippingBlade,
  GiBrain,
  GiKneeling,
  GiGroundSprout,
} from "react-icons/gi";
import {
  FaUserTie,
  FaDumbbell,
  FaLungs,
  FaMicrophoneAltSlash,
} from "react-icons/fa";

// Image imports
import livestockHandlers from "../../assets/Sports-sector-img/animal.png";
import sportsCoaches from "../../assets/Sports-sector-img/coach.jpeg";
import adminEventStaff from "../../assets/Sports-sector-img/admin.jpeg";
import groundStaff from "../../assets/Sports-sector-img/ground.jpeg";

const data = [
  {
    title: "Athletes & Players",
    image: livestockHandlers,
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
    image: sportsCoaches,
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
    image: groundStaff,
    icon: <GiGroundSprout className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Heat Stress & Exhaustion",
        icon: <GiChemicalDrop />,
        description: "Working long hours under the sun.",
      },
      {
        title: "Lower Back Pain",
        icon: <GiDrippingBlade />,
        description: "Due to lifting or physical workload.",
      },
      {
        title: "Skin Issues",
        // icon: <MdTemperatureHigh />,
        description: "Exposure to dust, turf, or chemicals.",
      },
    ],
  },
  {
    title: "Admin, Management & Marketing Team",
    image: adminEventStaff,
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
  },
];

const SportsHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Sports Industry <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Athletes, coaches, and support teams face intense physical, mental, and
        environmental stressors. Addressing these proactively ensures sustained
        performance and well-being across every role.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                  {group.icon}
                  {group.title}
                </h3>

                <div className="space-y-4">
                  {group.issues.map((issue, idx) => (
                    <div
                      key={idx}
                      className="border border-teal-600 transition-all duration-300 rounded-xl p-4 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-teal-600 text-xl mt-1">
                          {issue.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold text-sm text-teal-600">
                            {issue.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {issue.description}
                          </p>
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

export default SportsHealthChallenges;