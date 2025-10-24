import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaUserTie, FaUsersCog, FaUserNurse } from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdOutlineLocalHospital,
  MdAccessTime,
} from "react-icons/md";
import { BiBrain, BiBody, BiDrink } from "react-icons/bi";
import { GiStandingPotion, GiChemicalDrop, GiVirus } from "react-icons/gi";

import Management from "../../assets/Hotel-sector-img/owners.jpeg";
import Admin from "../../assets/Hotel-sector-img/reception.jpeg";
import Front from "../../assets/Hotel-sector-img/frontline.jpeg";

const data = [
  {
    title: "Management & Executives",
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Chronic Lifestyle Conditions",
        icon: <MdHealthAndSafety />,
        description:
          "High blood pressure, diabetes, and cardiac risks from sedentary lifestyle and stress.",
      },
      {
        title: "Lack of Preventive Care",
        icon: <MdOutlineLocalHospital />,
        description:
          "Skipped regular checkups due to busy schedules, leading to late diagnoses.",
      },
      {
        title: "Sleep Deprivation & Imbalance",
        icon: <MdAccessTime />,
        description:
          "Insomnia, fatigue, and reduced productivity from constant workload and late hours.",
      },
    ],
  },
  {
    title: "Supervisors & Admin Staff",
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Mental Stress & Pressure",
        icon: <BiBrain />,
        description:
          "Burnout, anxiety, and reduced focus from managing daily operations and teams.",
      },
      {
        title: "Prolonged Sitting & Poor Ergonomics",
        icon: <BiBody />,
        description:
          "Back pain and neck stiffness due to long desk hours and improper seating posture.",
      },
      {
        title: "Irregular Meals & Hydration",
        icon: <BiDrink />,
        description:
          "Digestive issues, fatigue, and headaches caused by erratic eating and dehydration.",
      },
    ],
  },
  {
    title: "Frontline Workers",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Physical Strain & Fatigue",
        icon: <GiStandingPotion />,
        description:
          "Muscle pain, back strain, and varicose veins due to long hours of standing.",
      },
      {
        title: "Exposure to Heat & Chemicals",
        icon: <GiChemicalDrop />,
        description:
          "Respiratory and skin irritation from constant contact with fumes and cleaning agents.",
      },
      {
        title: "Infection & Hygiene Risks",
        icon: <GiVirus />,
        description:
          "High exposure to infectious diseases due to frequent guest interactions.",
      },
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
        Hotel Employee <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        In the hospitality industry, long shifts, stress, and physical strain
        contribute to a wide range of preventable health challenges. These
        affect productivity, morale, and overall employee well-being.
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

export default HotelHealthChallenges;
