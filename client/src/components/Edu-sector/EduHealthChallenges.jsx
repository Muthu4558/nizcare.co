import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  MdCastForEducation,
  MdOutlineAdminPanelSettings,
  MdDevices,
  MdEventSeat,
  MdPsychology,
  MdOutlineMonitorHeart,
  MdVisibility,
} from "react-icons/md";
import {
  GiTalk,
  GiSpinalCoil,
  GiBrain,
  GiBandageRoll,
  GiChemicalDrop,
  GiMechanicGarage,
} from "react-icons/gi";
import { FaTemperatureHigh, FaWeight } from "react-icons/fa";

import teachingStaff from "../../assets/Edu-sector-img/teaching.jpeg";
import adminStaff from "../../assets/Edu-sector-img/management.jpeg";
import techTeams from "../../assets/Edu-sector-img/tech.jpeg";
import groundStaff from "../../assets/Edu-sector-img/ground.jpeg";

const data = [
  {
    title: "Teaching & Academic Staff",
    image: teachingStaff,
    icon: <MdCastForEducation className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Vocal Strain",
        icon: <GiTalk />,
        description: "Due to long hours of speaking in classrooms or lectures.",
      },
      {
        title: "Chronic Stress & Burnout",
        icon: <MdPsychology />,
        description:
          "From academic pressure, multitasking, and emotional labor.",
      },
      {
        title: "Musculoskeletal Pain",
        icon: <GiSpinalCoil />,
        description:
          "From prolonged standing, poor seating, or lack of movement.",
      },
    ],
  },
  {
    title: "Administrative & Management Staff",
    image: adminStaff,
    icon: <MdOutlineAdminPanelSettings className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Lifestyle Diseases",
        icon: <MdEventSeat />,
        description: "Due to extended desk hours and low physical activity.",
      },
      {
        title: "Eye Strain & Headaches",
        icon: <MdVisibility />,
        description: "From screen exposure and paperwork fatigue.",
      },
      {
        title: "Hypertension",
        icon: <MdOutlineMonitorHeart />,
        description:
          "From high responsibility roles and administrative pressure.",
      },
    ],
  },
  {
    title: "Tech & Product Teams",
    image: techTeams,
    icon: <MdDevices className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Postural Issues & Neck Pain",
        icon: <GiSpinalCoil />,
        description:
          "From poor workstation ergonomics and long hours at desks.",
      },
      {
        title: "Mental Fatigue & Insomnia",
        icon: <GiBrain />,
        description: "From long screen exposure and cognitive overload.",
      },
      {
        title: "Weight Gain & Lifestyle Disorders",
        icon: <FaWeight />,
        description:
          "Due to sedentary routines, irregular meals, and low activity.",
      },
    ],
  },
  {
    title: "Support & Ground Staff",
    image: groundStaff,
    icon: <GiMechanicGarage className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Exposure-Related Illnesses",
        icon: <GiChemicalDrop />,
        description:
          "From handling cleaning agents, dust, or waste material.",
      },
      {
        title: "Dehydration or Fatigue",
        icon: <FaTemperatureHigh />,
        description:
          "Due to physically demanding roles often in hot environments.",
      },
      {
        title: "Minor Injuries & First Aid Needs",
        icon: <GiBandageRoll />,
        description:
          "From slips, tool use, or minor accidents during work hours.",
      },
    ],
  },
];

const EduHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Educational Workforce <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Across campuses, educators and support staff face diverse health
        challenges that affect productivity and well-being. Proactive wellness
        programs can help reduce absenteeism and boost institutional health.
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

export default EduHealthChallenges;