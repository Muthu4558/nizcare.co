import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaTools, FaRegBuilding } from "react-icons/fa";
import { GiFactory, GiHearingDisabled, GiStrong, GiHazardSign, GiHeartBeats, GiDroplets, GiLungs, GiEyeball, GiBrain } from "react-icons/gi";
import { FaChair } from "react-icons/fa";

import furnaceImage from "../../assets/Steel-sector-img/furnace.jpeg";
import MaintenanceImage from "../../assets/Steel-sector-img/maintenance.jpeg";
import SiteAdminImage from "../../assets/Steel-sector-img/admin.jpeg";

const data = [
  {
    title: "Furnace & Production Line Workers",
    image: furnaceImage,
    icon: <GiFactory className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Heat Stress",
        icon: <GiHeartBeats />,
        description:
          "Long hours in extreme temperatures without proper cooling systems.",
      },
      {
        title: "Fatigue & Dehydration",
        icon: <GiDroplets />,
        description:
          "Intensive physical work with inadequate hydration and rest.",
      },
      {
        title: "Respiratory Issues",
        icon: <GiLungs />,
        description:
          "Exposure to fumes, dust, and fine metal particles in the air.",
      },
    ],
  },
  {
    title: "Maintenance & Logistics Staff",
    image: MaintenanceImage,
    icon: <FaTools className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders (MSDs)",
        icon: <GiStrong />,
        description:
          "Lifting heavy equipment and performing repetitive mechanical tasks.",
      },
      {
        title: "Hearing Loss",
        icon: <GiHearingDisabled />,
        description:
          "Constant exposure to high-decibel machinery and industrial noise.",
      },
      {
        title: "Accidental Injuries",
        icon: <GiHazardSign />,
        description:
          "Risks from equipment malfunctions, falls, or unsafe work zones.",
      },
    ],
  },
  {
    title: "Administrative & QA/QC Employees",
    image: SiteAdminImage,
    icon: <FaRegBuilding className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Vision Strain",
        icon: <GiEyeball />,
        description:
          "Extended screen or microscope use without adequate breaks.",
      },
      {
        title: "Mental Fatigue & Stress",
        icon: <GiBrain />,
        description:
          "Constant pressure from deadlines, inspections, and compliance documentation.",
      },
      {
        title: "Sedentary Health Issues",
        icon: <FaChair />,
        description:
          "Prolonged sitting hours leading to poor posture and circulation problems.",
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
      {/* Section Header */}
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Steel Industry <span className="text-teal-600">Health Challenges</span>
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        The steel sector demands strength, endurance, and precision — but behind
        the heat and machinery lie real human challenges. Addressing these
        health issues ensures safety, productivity, and workforce well-being.
      </p>

      {/* Grid */}
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

export default SteelHealthChallenges;