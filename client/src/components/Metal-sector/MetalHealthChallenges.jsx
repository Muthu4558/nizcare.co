import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  GiGasMask,
  GiBodyHeight,
  GiSpeakerOff,
  GiElectric,
  GiFireShield,
  GiHeatHaze,
  GiSpinalCoil,
  GiBurningEye,
  GiBrain,
  GiWeightScale,
  GiHeartOrgan,
  GiPsychicWaves,
  GiNightSleep,
  GiMetalBar
} from "react-icons/gi";
import { FaUserCog, FaUserTie } from "react-icons/fa";

import shopfloor from "../../assets/Metal-sector-img/shopfloor.jpeg";
import maintenance from "../../assets/Metal-sector-img/maintenance.jpeg";
import supervisor from "../../assets/Metal-sector-img/supervisor.jpeg";
import admin from "../../assets/Metal-sector-img/admin.jpeg";

const data = [
  {
    title: "Shop Floor Workers",
    image: shopfloor,
    icon: <GiMetalBar className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory Issues",
        icon: <GiGasMask />,
        description:
          "Caused by continuous exposure to metal dust, fumes, and gases.",
      },
      {
        title: "Musculoskeletal Disorders",
        icon: <GiBodyHeight />,
        description:
          "Repetitive tasks and improper posture during long shifts.",
      },
      {
        title: "Hearing Loss",
        icon: <GiSpeakerOff />,
        description:
          "Daily exposure to high-decibel machines leads to hearing impairment.",
      },
    ],
  },
  {
    title: "Maintenance & Utility Staff",
    image: maintenance,
    icon: <GiElectric className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Electrical & Burn Injuries",
        icon: <GiFireShield />,
        description: "Due to live wire exposure and overheated components.",
      },
      {
        title: "Fatigue & Dehydration",
        icon: <GiHeatHaze />,
        description:
          "Working in high-heat conditions without proper breaks or hydration.",
      },
      {
        title: "Joint & Back Pain",
        icon: <GiSpinalCoil />,
        description: "Awkward postures and lifting tasks lead to joint strain.",
      },
    ],
  },
  {
    title: "Supervisors & Quality Control",
    image: supervisor,
    icon: <FaUserCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye Strain",
        icon: <GiBurningEye />,
        description:
          "Continuous inspection under artificial lighting causes visual fatigue.",
      },
      {
        title: "Stress & Anxiety",
        icon: <GiBrain />,
        description:
          "High responsibility and safety oversight induce mental stress.",
      },
      {
        title: "Sedentary Health Risks",
        icon: <GiWeightScale />,
        description:
          "Long monitoring hours with little physical activity increases lifestyle risks.",
      },
    ],
  },
  {
    title: "Admin & Management",
    image: admin,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hypertension & Diabetes",
        icon: <GiHeartOrgan />,
        description:
          "Sedentary workstyle and poor diet contribute to chronic health conditions.",
      },
      {
        title: "Mental Burnout",
        icon: <GiPsychicWaves />,
        description:
          "Stress from tight deadlines and high-level decision making.",
      },
      {
        title: "Obesity & Sleep Disorders",
        icon: <GiNightSleep />,
        description:
          "Lack of activity and irregular hours disrupt sleep and weight regulation.",
      },
    ],
  },
];

const MetalHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Metal Sector <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        From molten furnaces to management offices — each role in the metal
        sector faces unique occupational health risks that impact productivity,
        safety, and employee well-being.
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

export default MetalHealthChallenges;