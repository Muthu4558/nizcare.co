import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaIndustry, FaUserTie } from "react-icons/fa";
import { GiBodyHeight, GiHearingDisabled, GiLungs, GiHeartburn, GiSpinalCoil, GiNightSleep, GiBurningEye, GiBackPain, GiBrain, GiGears } from "react-icons/gi";

import plant from "../../assets/Automobile-sector-img/assembly.jpeg";
import supervisor from "../../assets/Automobile-sector-img/supervisor.jpeg";
import corporate from "../../assets/Automobile-sector-img/corporate.jpeg";

const data = [
  {
    title: "Assembly Line & Plant Workers",
    image: plant,
    icon: <FaIndustry className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders (MSDs)",
        icon: <GiBodyHeight />,
        description:
          "Repetitive motions and awkward postures during long shifts lead to joint and muscle problems.",
      },
      {
        title: "Noise-Induced Hearing Loss",
        icon: <GiHearingDisabled />,
        description:
          "Prolonged exposure to high-decibel machinery sounds can cause irreversible hearing damage.",
      },
      {
        title: "Respiratory Issues",
        icon: <GiLungs />,
        description:
          "Fumes, dust, and poor air circulation in enclosed areas affect lung health over time.",
      },
    ],
  },
  {
    title: "Supervisors & Floor Managers",
    image: supervisor,
    icon: <GiGears className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hypertension & Cardiac Stress",
        icon: <GiHeartburn />,
        description:
          "Managing continuous production cycles and pressure-filled timelines impacts heart health.",
      },
      {
        title: "Chronic Back & Neck Pain",
        icon: <GiSpinalCoil />,
        description:
          "Standing for long hours and bending frequently cause persistent spine and neck strain.",
      },
      {
        title: "Sleep Disruption",
        icon: <GiNightSleep />,
        description:
          "Irregular shifts and extended duty hours disturb circadian rhythm and rest quality.",
      },
    ],
  },
  {
    title: "Corporate Staff & Engineers",
    image: corporate,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye Strain & Migraine",
        icon: <GiBurningEye />,
        description:
          "Extended screen time and design tools like CAD software trigger headaches and vision fatigue.",
      },
      {
        title: "Sedentary Lifestyle Risks",
        icon: <GiBackPain />,
        description:
          "Prolonged desk work increases risks of obesity, diabetes, and lower back pain.",
      },
      {
        title: "Mental Stress",
        icon: <GiBrain />,
        description:
          "High innovation demands, deadlines, and continuous digital engagement cause chronic stress.",
      },
    ],
  },
];

const AutomobileHealthChallenges = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-16 px-6">
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Automobile Workforce <span className="text-teal-600">Health Challenges</span>
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        From factory floors to boardrooms — the auto industry faces unique health risks driven by long shifts, heavy machinery, and high innovation stress.
      </p>

      {/* Grid Layout */}
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

export default AutomobileHealthChallenges;