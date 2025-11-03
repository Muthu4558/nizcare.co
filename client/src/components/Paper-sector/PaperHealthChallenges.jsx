import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiFactory,
  GiLungs,
  GiMuscleUp,
  GiBurningEye,
  GiGears,
  GiHearingDisabled,
  GiBandageRoll,
  GiBrain,
  GiOfficeChair,
  GiBrainFreeze,
  GiChemicalDrop,
  GiBoxUnpacking,
  GiBackPain,
  GiThermometerHot,
} from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";

// Images
import millWorkers from "../../assets/Paper-sector-img/machine.jpeg";
import maintenanceTeam from "../../assets/Paper-sector-img/maintenance.jpeg";
import adminQC from "../../assets/Paper-sector-img/admin.jpeg";
import warehouseTeam from "../../assets/Paper-sector-img/loaders.jpeg";

const data = [
  {
    title: "Machine Operators & Mill Workers",
    image: millWorkers,
    icon: <GiFactory className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory Issues",
        icon: <GiLungs />,
        description: "Due to airborne fibers, dust, and poor ventilation.",
      },
      {
        title: "Musculoskeletal Strain",
        icon: <GiMuscleUp />,
        description: "From repetitive lifting and standing long hours.",
      },
      {
        title: "Eye Irritation",
        icon: <GiBurningEye />,
        description: "Caused by dust particles and exposure to drying heat.",
      },
    ],
  },
  {
    title: "Maintenance & Technical Staff",
    image: maintenanceTeam,
    icon: <GiGears className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hearing Loss",
        icon: <GiHearingDisabled />,
        description: "Constant exposure to noisy machinery.",
      },
      {
        title: "Joint & Muscle Injuries",
        icon: <GiBandageRoll />,
        description: "From tool handling and awkward postures.",
      },
      {
        title: "Mental Fatigue",
        icon: <GiBrain />,
        description: "Due to shift duties and high-pressure repair tasks.",
      },
    ],
  },
  {
    title: "Administrative & QC Teams",
    image: adminQC,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary-Related Issues",
        icon: <GiOfficeChair />,
        description:
          "Back pain, eye strain, and poor posture from long sitting hours.",
      },
      {
        title: "Work-Related Stress",
        icon: <GiBrainFreeze />,
        description: "Caused by tight deadlines and inter-department coordination.",
      },
      {
        title: "Metabolic Risks",
        icon: <GiChemicalDrop />,
        description: "Obesity and diabetes due to low physical activity.",
      },
    ],
  },
  {
    title: "Logistics, Loading & Warehouse Staff",
    image: warehouseTeam,
    icon: <GiBoxUnpacking className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Lower Back Pain",
        icon: <GiBackPain />,
        description:
          "From repeated lifting and bending during loading/unloading.",
      },
      {
        title: "Heat Stress",
        icon: <GiThermometerHot />,
        description:
          "Especially in non-ventilated or poorly cooled storage areas.",
      },
      {
        title: "Minor Cuts & Injuries",
        icon: <GiBandageRoll />,
        description: "From sharp packaging or roll edges in warehouses.",
      },
    ],
  },
];

const PaperHealthChallenges = () => {
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
        Paper Mill Employee <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        The paper industry exposes workers to dust, noise, repetitive motion, and heat — 
        leading to chronic respiratory, ergonomic, and mental health challenges.
      </p>

      {/* Card Grid */}
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

            {/* Content */}
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

export default PaperHealthChallenges;