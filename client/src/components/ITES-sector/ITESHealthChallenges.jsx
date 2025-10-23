import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaLaptopCode, FaServer, FaProjectDiagram } from "react-icons/fa";
import { GiBurningEye, GiKneeling, GiNightSleep, GiBackPain, GiHeartBeats, GiForkKnifeSpoon, GiBrain, GiAlarmClock } from "react-icons/gi";

import tech from "../../assets/Ites-sector-img/develepor.jpeg";
import infra from "../../assets/Ites-sector-img/infra.jpeg";
import project from "../../assets/Ites-sector-img/project.jpeg";

const data = [
  {
    title: "Tech Developers & Programmers",
    image: tech,
    icon: <FaLaptopCode className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Digital Eye Strain",
        icon: <GiBurningEye />,
        description:
          "From prolonged screen time during coding and debugging.",
      },
      {
        title: "Repetitive Stress Injury",
        icon: <GiKneeling />,
        description:
          "Due to constant typing and mouse use without breaks.",
      },
      {
        title: "Sleep Disruption",
        icon: <GiNightSleep />,
        description:
          "Caused by late-night work, deadlines, or on-call duty.",
      },
    ],
  },
  {
    title: "IT Support & Infrastructure Staff",
    image: infra,
    icon: <FaServer className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Lower Back & Neck Pain",
        icon: <GiBackPain />,
        description:
          "Due to static desk work or awkward server room positions.",
      },
      {
        title: "Stress & Hypertension",
        icon: <GiHeartBeats />,
        description:
          "From real-time troubleshooting and critical system downtime.",
      },
      {
        title: "Sedentary Lifestyle Risks",
        // icon: <GiChair />,
        description:
          "Extended sitting and minimal movement during long shifts.",
      },
    ],
  },
  {
    title: "Project Managers & HR/Operations",
    image: project,
    icon: <FaProjectDiagram className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Mental Fatigue & Burnout",
        icon: <GiBrain />,
        description:
          "Due to continuous multitasking and demanding coordination.",
      },
      {
        title: "Anxiety",
        icon: <GiAlarmClock />,
        description:
          "Resulting from tight deadlines and stakeholder pressure.",
      },
      {
        title: "Poor Nutrition Habits",
        icon: <GiForkKnifeSpoon />,
        description:
          "Irregular meals due to hectic schedules.",
      },
    ],
  },
];

const ITESHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        ITES Employee <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Prolonged screen time, high-pressure workloads, and sedentary work styles
        contribute to increased health risks affecting performance and retention.
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

export default ITESHealthChallenges;
