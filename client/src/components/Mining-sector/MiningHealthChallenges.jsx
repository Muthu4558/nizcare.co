import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTools,
  FaRegBuilding,
} from "react-icons/fa";
import {
  GiBrain,
  GiKneeling,
  GiHearingDisabled,
  GiMineWagon,
  GiLungs,
  GiFalling,
  GiBurningEye,
  GiHeartBeats,
  GiNecklaceDisplay,
} from "react-icons/gi";

import MinersImage from "../../assets/Mining-sector-img/surface-miners.jpeg";
import MaintenanceImage from "../../assets/Mining-sector-img/technical-staff.jpeg";
import SiteAdminImage from "../../assets/Mining-sector-img/admin.jpeg";

const data = [
  {
    title: "Underground & Surface Miners",
    image: MinersImage,
    icon: <GiMineWagon className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory Issues",
        icon: <GiLungs />,
        description:
          "Caused by prolonged exposure to dust and particulate matter deep underground.",
      },
      {
        title: "Hearing Loss",
        icon: <GiHearingDisabled />,
        description:
          "Resulting from constant proximity to loud equipment, drilling, and blasting operations.",
      },
      {
        title: "Fatigue & Injuries",
        icon: <GiFalling />,
        description:
          "Due to long shifts in high-risk, physically demanding environments.",
      },
    ],
  },
  {
    title: "Maintenance & Technical Staff",
    image: MaintenanceImage,
    icon: <FaTools className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders",
        icon: <GiKneeling />,
        description:
          "Repetitive tasks, awkward postures, and heavy lifting during maintenance activities.",
      },
      {
        title: "Eye Strain & Burns",
        icon: <GiBurningEye />,
        description:
          "Exposure to welding sparks, grinding debris, or low-light working conditions.",
      },
      {
        title: "Stress & Burnout",
        icon: <GiBrain />,
        description:
          "High-pressure multi-role responsibilities and 24/7 operational support.",
      },
    ],
  },
  {
    title: "Administrative & Site Management",
    image: SiteAdminImage,
    icon: <FaRegBuilding className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hypertension & Diabetes",
        icon: <GiHeartBeats />,
        description:
          "Sedentary work patterns, long hours, and irregular eating habits.",
      },
      {
        title: "Mental Fatigue",
        icon: <GiBrain />,
        description:
          "Due to constant compliance stress and high-stakes decision-making.",
      },
      {
        title: "Vision & Cervical Pain",
        icon: <GiNecklaceDisplay />,
        description:
          "Caused by extended computer usage and poor ergonomic setups.",
      },
    ],
  },
];

const MiningHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Mining Sector <span className="text-teal-600">Employee Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Mining professionals face unique physical and environmental hazards. Addressing these
        issues proactively can reduce absenteeism, improve safety, and promote long-term workforce
        well-being.
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

export default MiningHealthChallenges;
