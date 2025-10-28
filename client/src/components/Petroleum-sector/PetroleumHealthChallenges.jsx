import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  GiOilRig,
  GiMuscleUp,
  GiThermometerHot,
  GiSoundWaves,
  GiLungs,
  GiChemicalDrop,
  GiHeartPlus,
  GiStethoscope,
  GiBrain,
  GiBurningEye,
} from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";

import field from "../../assets/Petroleum-sector-img/field.jpeg";
import refinery from "../../assets/Petroleum-sector-img/refinery.jpeg";
import admin from "../../assets/Petroleum-sector-img/admin.jpeg";

const data = [
  {
    title: "Field & Rig Operators",
    image: field,
    icon: <GiOilRig className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Injuries",
        icon: <GiMuscleUp />,
        description:
          "Caused by repetitive strain, heavy lifting, and awkward working postures on rigs.",
      },
      {
        title: "Heat Stress & Fatigue",
        icon: <GiThermometerHot />,
        description:
          "Extended outdoor shifts in high-temperature zones cause exhaustion and dehydration.",
      },
      {
        title: "Noise-Induced Hearing Loss",
        icon: <GiSoundWaves />,
        description:
          "Constant exposure to drilling equipment and generators impacts auditory health.",
      },
    ],
  },
  {
    title: "Refinery & Plant Employees",
    image: refinery,
    icon: <GiFactory className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory Disorders",
        icon: <GiLungs />,
        description:
          "Inhalation of hydrocarbon vapors and chemical fumes compromises lung function.",
      },
      {
        title: "Skin Conditions",
        icon: <GiChemicalDrop />,
        description:
          "Direct or indirect exposure to solvents can cause irritation, burns, or dermatitis.",
      },
      {
        title: "Cardiovascular Strain",
        icon: <GiHeartPlus />,
        description:
          "Stressful, high-stakes roles with minimal physical movement increase heart health risks.",
      },
    ],
  },
  {
    title: "Corporate & Administrative Staff",
    image: admin,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Lifestyle Diseases",
        icon: <GiStethoscope />,
        description:
          "Long sitting hours contribute to diabetes, hypertension, and metabolic issues.",
      },
      {
        title: "Mental Stress & Burnout",
        icon: <GiBrain className="text-xl" />,
        description:
          "Constant deadlines, decision pressure, and lack of movement lead to burnout.",
      },
      {
        title: "Eye Strain",
        icon: <GiBurningEye />,
        description:
          "Prolonged exposure to screens without breaks causes dryness, fatigue, and vision stress.",
      },
    ],
  },
];

const PetroleumHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Petroleum Workforce <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        The petroleum workforce operates in physically demanding and high-risk
        environments. Preventive health measures can significantly reduce
        fatigue, injuries, and chronic diseases — ensuring sustained productivity
        and employee well-being.
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

export default PetroleumHealthChallenges;