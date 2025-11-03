import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  GiCow,
  GiHealthNormal,
  GiBackPain,
  GiStethoscope,
  GiMechanicalArm,
  GiBrain,
} from "react-icons/gi";
import {
  FaHandsWash,
  FaSyringe,
  FaTruckLoading,
  FaTemperatureHigh,
} from "react-icons/fa";
import {
  MdPsychology,
  MdWaterDrop,
  MdHearing,
  MdOutlineSupervisorAccount,
  MdOutlineMonitorHeart,
  MdVisibility,
} from "react-icons/md";

import farm from "../../assets/Dairy-sector-img/farm-workers.jpeg";
import veterinary from "../../assets/Dairy-sector-img/veterinary.jpeg";
import logistics from "../../assets/Dairy-sector-img/logistics.jpeg";
import admin from "../../assets/Dairy-sector-img/admin.jpeg";

const data = [
  {
    title: "Dairy Farm Workers & Milkers",
    image: farm,
    icon: <GiCow className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Zoonotic Infections",
        icon: <GiHealthNormal />,
        description:
          "Exposure from raw milk, animal waste, and direct animal contact.",
      },
      {
        title: "Lower Back Pain",
        icon: <GiBackPain />,
        description:
          "Due to prolonged bending during daily milking routines.",
      },
      {
        title: "Skin Infections",
        icon: <FaHandsWash />,
        description:
          "From contact with dirty udders, contaminated water, and disinfectants.",
      },
    ],
  },
  {
    title: "Veterinary & Animal Health Staff",
    image: veterinary,
    icon: <GiStethoscope className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Needlestick Injuries",
        icon: <FaSyringe />,
        description:
          "Risks during animal vaccinations and medication handling.",
      },
      {
        title: "Stress & Fatigue",
        icon: <MdPsychology />,
        description:
          "Caused by emergency treatments and demanding animal care.",
      },
      {
        title: "Respiratory Issues",
        icon: <MdWaterDrop />,
        description:
          "Triggered by medications, disinfectants, or barn allergens.",
      },
    ],
  },
  {
    title: "Logistics & Processing Crew",
    image: logistics,
    icon: <FaTruckLoading className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Dehydration & Heat Stress",
        icon: <FaTemperatureHigh />,
        description:
          "Working near boilers or outdoors without hydration breaks.",
      },
      {
        title: "Repetitive Strain Injury",
        icon: <GiMechanicalArm />,
        description:
          "From frequent lifting, packing, sealing, and loading.",
      },
      {
        title: "Noise-Induced Hearing Loss",
        icon: <MdHearing />,
        description:
          "Due to high-decibel processing units and machinery.",
      },
    ],
  },
  {
    title: "Supervisors & Admin/Office Team",
    image: admin,
    icon: <MdOutlineSupervisorAccount className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hypertension & Diabetes",
        icon: <MdOutlineMonitorHeart />,
        description:
          "Linked to sedentary work and prolonged mental stress.",
      },
      {
        title: "Eye Strain",
        icon: <MdVisibility />,
        description:
          "From constant screen exposure and document reviewing.",
      },
      {
        title: "Mental Fatigue",
        icon: <GiBrain />,
        description:
          "Due to long working hours and high performance pressure.",
      },
    ],
  },
];

const DairyHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Dairy Workforce <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        The dairy industry plays a vital role in rural employment — yet long hours,
        animal handling, and exposure to harsh environments often lead to preventable
        health risks. Addressing these can significantly improve productivity and
        employee retention.
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

export default DairyHealthChallenges;