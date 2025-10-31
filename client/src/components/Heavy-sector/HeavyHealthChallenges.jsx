import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaIndustry, FaUserTie } from "react-icons/fa";
import {
  GiBodyHeight,
  GiBrain,
  GiBurningEye,
  GiGears,
  GiHearingDisabled,
  GiHeartOrgan,
  GiKnifeThrust,
  GiLungs,
  GiNightSleep,
  GiSleepy,
} from "react-icons/gi";

import admin from "../../assets/Heavy-sector-img/admin.jpeg";
import maintenance from "../../assets/Heavy-sector-img/maintenance.jpeg";
import plant from "../../assets/Heavy-sector-img/plant.jpeg";

const data = [
  {
    title: "Plant Operators & Machinists",
    image: plant,
    icon: <FaIndustry className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders (MSDs)",
        icon: <GiBodyHeight />,
        description:
          "Repetitive tasks, heavy lifting, and poor ergonomics cause joint and muscle strain over time.",
      },
      {
        title: "Noise-Induced Hearing Loss",
        icon: <GiHearingDisabled />,
        description:
          "Long-term exposure to loud industrial machinery can lead to partial or complete hearing loss.",
      },
      {
        title: "Respiratory Issues",
        icon: <GiLungs />,
        description:
          "Industrial dust and airborne particles can compromise respiratory health without proper PPE.",
      },
    ],
  },
  {
    title: "Maintenance & Technical Staff",
    image: maintenance,
    icon: <GiGears className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye Strain & Vision Issues",
        icon: <GiBurningEye />,
        description:
          "Intense focus on screens, circuit boards, and welding tasks can lead to long-term visual stress.",
      },
      {
        title: "Burns or Injuries",
        icon: <GiKnifeThrust />,
        description:
          "Direct contact with hot machinery, chemicals, or live wires increases risk of physical harm.",
      },
      {
        title: "Fatigue",
        icon: <GiSleepy />,
        description:
          "Long working hours and emergency shifts affect energy levels and recovery cycles.",
      },
    ],
  },
  {
    title: "Supervisors & Admin Staff",
    image: admin,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Stress & Anxiety",
        icon: <GiBrain />,
        description:
          "Responsibility overload and performance pressure contribute to chronic stress conditions.",
      },
      {
        title: "Hypertension & Lifestyle Diseases",
        icon: <GiHeartOrgan />,
        description:
          "Sedentary work habits, poor diet, and lack of physical activity raise the risk of heart disease.",
      },
      {
        title: "Sleep Disorders",
        icon: <GiNightSleep />,
        description:
          "Shift changes and late-night monitoring duties disrupt natural sleep patterns and recovery.",
      },
    ],
  },
];

const HeavyHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Heavy Industry Employee{" "}
        <span className="text-teal-600">Health Problems</span>
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Tough jobs come with tough health risks. Industrial workers face
        physical strain, exposure, and fatigue that can be mitigated through
        proactive wellness and ergonomic programs.
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

export default HeavyHealthChallenges;