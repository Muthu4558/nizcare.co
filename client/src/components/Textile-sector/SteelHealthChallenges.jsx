import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaTools,
  FaRegBuilding,
} from 'react-icons/fa';
import {
  GiFactory,
  GiHeartBeats,
  GiDroplets,
  GiLungs,
  GiStrong,
  GiHearingDisabled,
  GiHazardSign,
  GiEyeball,
  GiBrain
} from 'react-icons/gi';
import { FaChair } from 'react-icons/fa6';

import production from '../../assets/Textile-sector-img/production.jpeg';
import dying from '../../assets/Textile-sector-img/dying.jpeg';
import administrative from '../../assets/Textile-sector-img/administrative.jpeg';

const data = [
  {
    title: "Production Floor Workers",
    image: production,
    icon: <GiFactory className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory Issues",
        icon: <GiHeartBeats />,
        description:
          "Continuous exposure to textile dust, fibers, and inadequate ventilation causes chronic respiratory problems.",
      },
      {
        title: "Repetitive Strain Injuries",
        icon: <GiDroplets />,
        description:
          "Repetitive stitching and machine operation lead to shoulder, wrist, and back pain.",
      },
      {
        title: "Fatigue & Dehydration",
        icon: <GiLungs />,
        description:
          "Long working hours in high-temperature environments without proper hydration.",
      },
    ],
  },
  {
    title: "Dyeing & Chemical Unit Workers",
    image: dying,
    icon: <FaTools className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Skin Allergies & Dermatitis",
        icon: <GiStrong />,
        description:
          "Frequent contact with dyes, solvents, and cleaning agents leads to skin irritation and dermatitis.",
      },
      {
        title: "Respiratory Hazards",
        icon: <GiHearingDisabled />,
        description:
          "Inhalation of chemical vapors and fumes causes long-term lung issues.",
      },
      {
        title: "Heat Stress",
        icon: <GiHazardSign />,
        description:
          "Continuous exposure to furnaces and boilers results in heat exhaustion and fatigue.",
      },
    ],
  },
  {
    title: "Supervisors & Administrative Staff",
    image: administrative,
    icon: <FaRegBuilding className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Lifestyle Diseases",
        icon: <GiEyeball />,
        description:
          "Prolonged sitting and desk work lead to obesity, hypertension, and diabetes.",
      },
      {
        title: "Mental Health Stress",
        icon: <GiBrain />,
        description:
          "High-pressure production targets and workforce management contribute to stress and burnout.",
      },
      {
        title: "Eye Strain & Headaches",
        icon: <FaChair />,
        description:
          "Extended screen exposure under artificial lighting conditions.",
      },
    ],
  },
];

const SteelHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Textile Employee <span className="text-teal-600">Health Problems</span>
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Textile operations expose workers to various occupational hazards — from
        dust and chemicals to prolonged strain and stress. Here’s how different
        roles face distinct health challenges on and off the floor.
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
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
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

export default SteelHealthChallenges;