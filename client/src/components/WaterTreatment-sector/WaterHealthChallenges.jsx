import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MdHearing,
  MdPsychology,
  MdWaterDrop,
  MdOutlineMonitorHeart,
  MdVisibility,
  MdAdminPanelSettings,
  MdCleaningServices,
} from "react-icons/md";
import {
  FaHandsWash,
  FaTemperatureHigh,
  FaEye,
} from "react-icons/fa";
import {
  GiChemicalDrop,
  GiMuscleUp,
  GiBackPain,
  GiFactory,
  GiGears,
} from "react-icons/gi";

import plant from "../../assets/Water-sector-img/plant.jpeg";
import maintenance from "../../assets/Water-sector-img/maintenance.jpeg";
import admin from "../../assets/Water-sector-img/admin.jpeg";
import sanitation from "../../assets/Water-sector-img/sanitation.jpeg";

const data = [
  {
    title: "Plant Operators & Field Technicians",
    image: plant,
    icon: <GiFactory className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory Issues",
        icon: <MdWaterDrop />,
        description: "Exposure to chemicals like chlorine and sludge gases.",
      },
      {
        title: "Musculoskeletal Pain",
        icon: <GiMuscleUp />,
        description: "Long hours of manual work in harsh environments.",
      },
      {
        title: "Skin Infections",
        icon: <FaHandsWash />,
        description: "Constant contact with untreated water and waste materials.",
      },
    ],
  },
  {
    title: "Maintenance & Engineering Staff",
    image: maintenance,
    icon: <GiGears className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hearing Loss",
        icon: <MdHearing />,
        description: "Constant exposure to noisy pumps and mechanical setups.",
      },
      {
        title: "Heat Stress",
        icon: <FaTemperatureHigh />,
        description: "Working in enclosed spaces with boilers or under the sun.",
      },
      {
        title: "Eye Strain / Injury",
        icon: <FaEye />,
        description: "Welding, machinery work, and chemical exposure.",
      },
    ],
  },
  {
    title: "Administrative & Compliance Staff",
    image: admin,
    icon: <MdAdminPanelSettings className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Lifestyle",
        icon: <GiBackPain />,
        description: "Back pain, obesity, and posture issues from long sitting.",
      },
      {
        title: "Mental Stress",
        icon: <MdPsychology />,
        description: "Due to compliance pressures and strict deadlines.",
      },
      {
        title: "Vision Fatigue",
        icon: <MdVisibility />,
        description: "Caused by extended screen-time and document work.",
      },
    ],
  },
  {
    title: "Contract Workers & Sanitation Support",
    image: sanitation,
    icon: <MdCleaningServices className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Infectious Diseases",
        icon: <GiChemicalDrop />,
        description: "Exposure to biohazards and untreated waste.",
      },
      {
        title: "Dehydration & Fatigue",
        icon: <MdOutlineMonitorHeart />,
        description: "Long physical shifts with minimal rest or hydration.",
      },
      {
        title: "Mental Health Neglect",
        icon: <MdPsychology />,
        description: "Often overlooked, leading to isolation and low morale.",
      },
    ],
  },
];

const WaterHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Water Treatment Sector{" "}
        <span className="text-teal-600">Employee Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Employees across water treatment and sanitation services face unique
        occupational hazards. Addressing these proactively ensures workforce
        safety, reduces absenteeism, and boosts overall well-being.
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

            {/* Content */}
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
                      className="border border-teal-600 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
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

export default WaterHealthChallenges;