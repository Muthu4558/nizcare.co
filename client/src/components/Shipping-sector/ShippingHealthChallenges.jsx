import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaIndustry,
  FaUserTie,
  FaShip,
  FaShieldAlt,
} from "react-icons/fa";
import {
  GiBodyHeight,
  GiHeatHaze,
  GiBandageRoll,
  GiNightSleep,
  GiHeartOrgan,
  GiPsychicWaves,
  GiBurningEye,
  GiWeightScale,
  GiBrain,
  GiSpinalCoil,
} from "react-icons/gi";

import dock from "../../assets/Shipping-sector-img/dock.jpeg";
import maritime from "../../assets/Shipping-sector-img/maritime.jpeg";
import admin from "../../assets/Shipping-sector-img/admin.jpeg";
import security from "../../assets/Shipping-sector-img/security.jpeg";

const data = [
  {
    title: "Dock & Cargo Workers",
    image: dock,
    icon: <FaIndustry className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders",
        icon: <GiBodyHeight />,
        description:
          "Lifting heavy cargo and repetitive movements lead to joint and muscle strain.",
      },
      {
        title: "Heat Stress & Dehydration",
        icon: <GiHeatHaze />,
        description:
          "Working outdoors for long hours in hot environments increases dehydration risks.",
      },
      {
        title: "Injuries & Minor Trauma",
        icon: <GiBandageRoll />,
        description:
          "Frequent handling of heavy machinery can lead to physical injuries and trauma.",
      },
    ],
  },
  {
    title: "Maritime Crew (Ship-based Staff)",
    image: maritime,
    icon: <FaShip className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sleep Disorders & Fatigue",
        icon: <GiNightSleep />,
        description:
          "Rotational duties and extended sea travel disturb regular sleep cycles.",
      },
      {
        title: "Cardiovascular Risks",
        icon: <GiHeartOrgan />,
        description:
          "Limited movement and stress during long voyages elevate heart health risks.",
      },
      {
        title: "Mental Health Challenges",
        icon: <GiPsychicWaves />,
        description:
          "Isolation and long periods away from family affect emotional well-being.",
      },
    ],
  },
  {
    title: "Port Administration & Logistics Staff",
    image: admin,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye Strain & Headaches",
        icon: <GiBurningEye />,
        description:
          "Prolonged screen time and digital paperwork cause visual fatigue and migraines.",
      },
      {
        title: "Hypertension & Metabolic Issues",
        icon: <GiWeightScale />,
        description:
          "Sedentary roles with poor diet contribute to lifestyle-related disorders.",
      },
      {
        title: "Stress & Burnout",
        icon: <GiBrain />,
        description:
          "Tight deadlines and compliance pressure lead to chronic stress.",
      },
    ],
  },
  {
    title: "Security & Safety Officers",
    image: security,
    icon: <FaShieldAlt className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Shift-Induced Sleep Disorders",
        icon: <GiNightSleep />,
        description:
          "Irregular working hours affect circadian rhythm and sleep quality.",
      },
      {
        title: "Back Pain & Joint Issues",
        icon: <GiSpinalCoil />,
        description:
          "Standing and walking for long periods causes musculoskeletal strain.",
      },
      {
        title: "Stress & Anxiety",
        icon: <GiBrain />,
        description:
          "High-alert duty environments increase risk of mental fatigue and anxiety.",
      },
    ],
  },
];

const ShippingHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Shipping & Maritime Workforce{" "}
        <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Maritime operations expose employees to unique physical and mental
        health risks — from the docks to deep-sea vessels. Proactive wellness
        ensures safety, performance, and retention across every role.
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

export default ShippingHealthChallenges;