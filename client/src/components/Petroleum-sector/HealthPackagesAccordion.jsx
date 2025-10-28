import React, { useEffect } from "react";
import {
  GiStrong,
  GiHealthNormal,
  GiChemicalDrop,
  GiStethoscope,
  GiBrain,
  GiBiohazard,
  GiTestTubes,
  GiFactory,
  GiHazmatSuit,
  GiOilDrum,
} from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Rig & Field Operators",
    icon: <GiOilDrum className="text-xl text-teal-700" />,
    issues: [
      {
        title: "Basic Rig Fit",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle:
          "CBC, BMI",
        description: "For daily rig workers and new recruits.",
      },
      {
        title: "Basic Rig Fit",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle:
          "ECG",
        description: "For daily rig workers and new recruits.",
      },
      {
        title: "Basic Rig Fit",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Vision Test",
        description: "For daily rig workers and new recruits.",
      },
      {
        title: "Basic Rig Fit",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Audiometry",
        description: "For daily rig workers and new recruits.",
      },
      {
        title: "Heavy Duty Health",
        icon: <GiStrong className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Liver & Kidney Function",
        description: "For mid-level operators and shift leads.",
      },
      {
        title: "Heavy Duty Health",
        icon: <GiStrong className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Vitamin D",
        description: "For mid-level operators and shift leads.",
      },
      {
        title: "Heavy Duty Health",
        icon: <GiStrong className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Musculoskeletal Screening",
        description: "For mid-level operators and shift leads.",
      },
      {
        title: "Advanced Safety+",
        icon: <GiHazmatSuit className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Cardiac Risk Profile",
        description: "For long-tenure field staff and HSE leads.",
      },
      {
        title: "Advanced Safety+",
        icon: <GiHazmatSuit className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Spirometry",
        description: "For long-tenure field staff and HSE leads.",
      },
      {
        title: "Advanced Safety+",
        icon: <GiHazmatSuit className="text-amber-500 text-lg" />,
        descriptionTittle:
          "X-ray Chest",
        description: "For long-tenure field staff and HSE leads.",
      },
      {
        title: "Advanced Safety+",
        icon: <GiHazmatSuit className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Heavy Metal Exposure Screening",
        description: "For long-tenure field staff and HSE leads.",
      },
    ],
  },
  {
    title: "Refinery & Plant Staff",
    icon: <GiFactory className="text-xl text-teal-700" />,
    issues: [
      {
        title: "Plant Essential",
        icon: <GiTestTubes className="text-amber-500 text-lg" />,
        descriptionTittle:
          "CBC",
        description: "For entry-level technicians.",
      },
      {
        title: "Plant Essential",
        icon: <GiTestTubes className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Urine Routine",
        description: "For entry-level technicians.",
      },
      {
        title: "Plant Essential",
        icon: <GiTestTubes className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Blood Sugar",
        description: "For entry-level technicians.",
      },
      {
        title: "Plant Essential",
        icon: <GiTestTubes className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Blood Pressure",
        description: "For entry-level technicians.",
      },
      {
        title: "Process Pro+",
        icon: <GiChemicalDrop className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Lipid Profile",
        description: "For operations engineers and shift staff.",
      },
      {
        title: "Process Pro+",
        icon: <GiChemicalDrop className="text-amber-500 text-lg" />,
        descriptionTittle:
          "LChest X-ray",
        description: "For operations engineers and shift staff.",
      },
      {
        title: "Process Pro+",
        icon: <GiChemicalDrop className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Lung Function Test",
        description: "For operations engineers and shift staff.",
      },
      {
        title: "Process Pro+",
        icon: <GiChemicalDrop className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Electrolyte Panel",
        description: "For operations engineers and shift staff.",
      },
      {
        title: "High-Risk Worker",
        icon: <GiBiohazard className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Thyroid",
        description: "For safety officers and supervisors.",
      },
      {
        title: "High-Risk Worker",
        icon: <GiBiohazard className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Liver/Kidney Function",
        description: "For safety officers and supervisors.",
      },
      {
        title: "High-Risk Worker",
        icon: <GiBiohazard className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Cardiac Enzymes",
        description: "For safety officers and supervisors.",
      },
      {
        title: "High-Risk Worker",
        icon: <GiBiohazard className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Toxic Gas Exposure Screening",
        description: "For safety officers and supervisors.",
      },
    ],
  },
  {
    title: "Corporate & Admin Staff",
    icon: <FaBriefcase className="text-xl text-teal-700" />,
    issues: [
      {
        title: "Smart Desk Health",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "CBC, BMI, BP, Blood Sugar",
        description: "For all desk employees.",
      },
      {
        title: "Smart Desk Health",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Blood Sugar",
        description: "For all desk employees.",
      },
      {
        title: "Stress Shield",
        icon: <GiBrain className="text-amber-500 text-lg" />,
        descriptionTittle:
          "ECG",
        description: "For mid-management staff.",
      },
      {
        title: "Stress Shield",
        icon: <GiBrain className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Thyroid Panel",
        description: "For mid-management staff.",
      },
      {
        title: "Stress Shield",
        icon: <GiBrain className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Vitamin B12 & D",
        description: "For mid-management staff.",
      },
      {
        title: "Stress Shield",
        icon: <GiBrain className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Mental Wellness Screening",
        description: "For mid-management staff.",
      },
      {
        title: "Executive 360°",
        icon: <GiStethoscope className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Full Body Check-up",
        description: "For senior management, HR, and directors.",
      },
      {
        title: "Executive 360°",
        icon: <GiStethoscope className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Cardiac Profile",
        description: "For senior management, HR, and directors.",
      },
      {
        title: "Executive 360°",
        icon: <GiStethoscope className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Liver/Kidney Panel",
        description: "For senior management, HR, and directors.",
      },
      {
        title: "Executive 360°",
        icon: <GiStethoscope className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Eye & Hearing Exam",
        description: "For senior management, HR, and directors.",
      },
    ],
  },
];

const HealthPackagesSimplified = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Precision <span className="text-teal-600">Health Check-ups</span> for Petroleum Professionals
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Targeted health screening packages designed for the unique risks of each operational role.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px]"
          >
            {/* Header */}
            <h3 className="text-xl font-semibold text-teal-700 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            {/* Scrollable List */}
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-4">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-2 rounded-lg text-gray-800 shadow-sm"
                  >
                    <div className="flex items-center gap-2 font-semibold text-sm text-teal-700">
                      {/* {issue.icon} */}
                      {/* <span>{issue.title}</span> */}
                    </div>
                    <p className="text-sm font-medium mt-1 text-gray-700">
                      {issue.descriptionTittle}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {/* {issue.description} */}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Custom scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(13, 148, 136, 0.4);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(13, 148, 136, 0.7);
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
};

export default HealthPackagesSimplified;